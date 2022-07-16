import React, { Component } from 'react'
import DataInit from '../../components/dataInit/DataInit';
import NavEBI from '../../components/nav/Nav';

import { DataObject, HeatMapItem, HeatMapGeneItem } from '../../helpers/interfaces'
import { buildHeatMapData, buildDiagnosisHeaders, getMaxValue, getMinValue } from '../../helpers/helpers'

export default class DataView extends Component {
    state = {
        fullDataSet: [],
        orderedDataSet: [],
        diagnosisHeaders: [],
        genesFilter: [],
        diagnosisFilter: [],
        heatMapData: [],
        minValue: 0,
        maxValue: 0,
        heatMapReady: false,
        componentReady: false
    }

    componentWillMount() {
        let fullDataSet: Array<DataObject> = new Array<DataObject>();
        let request = new XMLHttpRequest();
        request.open('GET', 'https://raw.githubusercontent.com/PDCMFinder/expression-data-test/main/Expression.tsv', true);
        request.send(null);
        const self = this
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                var typeOfRequest = request.getResponseHeader('Content-Type');
                if (typeOfRequest != null) {
                    if (typeOfRequest.indexOf("text") !== 1) {
                        if (typeOfRequest.indexOf("text") !== 1) {
                            let tsv = request.responseText;
                            const lines = tsv.split("\r\n");
                            const headers = lines[0].split("\t");

                            for (let i = 1; i < lines.length; i++) {
                                let objData: DataObject = {};
                                const currentline = lines[i].split("\t");
                                for (let j = 0; j < headers.length; j++) {
                                    if (headers[j] == "z_score") {
                                        objData[headers[j]] = parseFloat(currentline[j]);
                                    } else {
                                        objData[headers[j]] = currentline[j];
                                    }
                                }

                                fullDataSet.push(objData);
                            }
                            self.setState({
                                fullDataSet: fullDataSet
                            })
                            self.buildData(fullDataSet)
                        }
                    }
                }
            }
        }
    }

    sortModels = (a: DataObject, b: DataObject) => {
        var aValue: number = parseInt(a["model_id"].substring(1));
        var bValue: number = parseInt(b["model_id"].substring(1));
        return aValue - bValue;
    }

    buildData = (fullDataSet: Array<DataObject>) => {
        let orderedDataSet: Array<DataObject> = new Array<DataObject>();
        let genesFilter: Array<String> = new Array<String>();
        let diagnosisFilter: Array<String> = new Array<String>();
        
        for (let i = 0; i < fullDataSet.length; i++) {
            const tmpData = fullDataSet[i];
            let indexGeneFilter: number = genesFilter.findIndex((tmpG: String) => tmpG == tmpData["gene_symbol"]);
            if (indexGeneFilter == -1) {
                genesFilter.push(tmpData["gene_symbol"]);
            }
            let indexDiagnosisFilter: number = diagnosisFilter.findIndex((tmpD: String) => tmpD == tmpData["diagnosis"]);
            if (indexDiagnosisFilter == -1) {
                diagnosisFilter.push(tmpData["diagnosis"]);
            }
            let indexData: number = orderedDataSet.findIndex((tmpD: DataObject) => tmpD["gene_symbol"] == tmpData["gene_symbol"]);
            let objModel: DataObject = {
                "model_id": tmpData["model_id"],
                "z_score": tmpData["z_score"],
                "chromosome": tmpData["chromosome"],
                "seq_start_position": tmpData["seq_start_position"],
                "seq_end_position": tmpData["seq_end_position"],
                "gene_id_ensembl": tmpData["gene_id_ensembl"],
                "total_scores": 1
            };
            if (indexData === -1) {
                let objData: DataObject = {};
                objData["gene_symbol"] = tmpData["gene_symbol"];
                let diagnoses: Array<DataObject> = [{
                    "diagnosis": tmpData["diagnosis"],
                    "models": [objModel]
                }];

                objData["diagnoses"] = diagnoses;
                orderedDataSet.push(objData);
            } else {
                let indexDiagnosis: number = orderedDataSet[indexData]["diagnoses"].findIndex((diagnosis: DataObject) => diagnosis["diagnosis"] == tmpData["diagnosis"]);
                if (indexDiagnosis == -1) {
                    let objDiagnosis: DataObject = {};
                    objDiagnosis["diagnosis"] = tmpData["diagnosis"];
                    let models: Array<DataObject> = [objModel];
                    objDiagnosis["models"] = models;
                    orderedDataSet[indexData]["diagnoses"].push(objDiagnosis)
                } else {
                    let indexModel = orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"].findIndex((model: DataObject) => model["model_id"] == tmpData["model_id"]);
                    if (indexModel == -1) {
                        orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"].push(objModel);
                        orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"] = orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"].sort(this.sortModels)
                        console.log(orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"])
                    } else {
                        orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"][indexModel]["z_score"] += tmpData["z_score"];
                        orderedDataSet[indexData]["diagnoses"][indexDiagnosis]["models"][indexModel]["total_scores"] += 1;
                    }
                }
            }
        }

        console.log(orderedDataSet)
        this.setState({
            orderedDataSet: orderedDataSet,
            genesFilter: genesFilter,
            diagnosisFilter: diagnosisFilter            
        })
        this.buildDataHeatMap(orderedDataSet, 100, [], [])
    }

    buildDataHeatMap = (orderedDataSet: Array<DataObject>, rangeFilterValue: any, optionGenes: any, optionDiagnosis: any) => {
        let heatMapData: Array<HeatMapItem> = buildHeatMapData(orderedDataSet, rangeFilterValue, optionGenes, optionDiagnosis);
        let diagnosisHeaders: Array<DataObject> = buildDiagnosisHeaders(orderedDataSet, rangeFilterValue, optionGenes, optionDiagnosis);
        let minValue: number = getMaxValue(heatMapData);
        let maxValue: number = getMinValue(heatMapData);
        this.setState({
            heatMapData: heatMapData,
            diagnosisHeaders: diagnosisHeaders,
            minValue: minValue,
            maxValue: maxValue,
            heatMapReady: true,
            componentReady: true
        })
    }

    applyFilters = (rangeFilterValue: any, optionGenes: any, optionDiagnosis: any) => {
        this.setState({
            heatMapReady: false
        })
        setTimeout(() => {
            this.buildDataHeatMap(this.state.orderedDataSet, rangeFilterValue, optionGenes, optionDiagnosis)
        }, 100);
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <NavEBI />
                {
                    this.state.componentReady && <DataInit heatMapReady={this.state.heatMapReady} fullDataSet={this.state.fullDataSet} orderedDataSet={this.state.orderedDataSet} genesFilter={this.state.genesFilter} diagnosisFilter={this.state.diagnosisFilter} diagnosisHeaders={this.state.diagnosisHeaders} heatMapData={this.state.heatMapData} minValue={this.state.minValue} maxValue={this.state.maxValue} applyFilters={this.applyFilters}/>
                }
            </div>
        )
    }
}