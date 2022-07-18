import { DataObject, HeatMapItem, HeatMapGeneItem } from './interfaces'

export function buildHeatMapData(orderedDataSet: Array<DataObject>, rangeFilterValue: any, optionGenes: any, optionDiagnosis: any) {
    let dataHeatMap: Array<HeatMapItem> = [];
    if (optionGenes.length > 0 || optionDiagnosis.length > 0) {
        dataHeatMap = buildHeatMapByFilters(orderedDataSet, optionGenes, optionDiagnosis)
    } else {
        if (rangeFilterValue == 100) {
            dataHeatMap = buildHeatMapByFilters(orderedDataSet, optionGenes, optionDiagnosis)
        } else {
            dataHeatMap = buildHeatMapByRange(orderedDataSet, rangeFilterValue)
        }
    }
    return dataHeatMap
}

function buildHeatMapByFilters(orderedDataSet: Array<DataObject>, optionGenes: any, optionDiagnosis: any) {
    let dataHeatMap: Array<HeatMapItem> = [];
    for (let i = 0; i < orderedDataSet.length; i++) {
        const dataSetItem = orderedDataSet[i];
        let gene_symbol = dataSetItem["gene_symbol"];
        let pushGene: Boolean = true;
        if (optionGenes.length > 0) {
            let indexGene: number = optionGenes.findIndex((geneSymbolItem: string) => geneSymbolItem == dataSetItem["gene_symbol"]);
            if (indexGene == -1) {
                pushGene = false;
            }
        }
        if (pushGene == true) {
            let dataGene: Array<HeatMapGeneItem> = [];
            let averageGeneScore: number = getAverageGeneZScore(dataSetItem["diagnoses"]);
            for (let j = 0; j < dataSetItem["diagnoses"].length; j++) {
                const diagnosis = dataSetItem["diagnoses"][j];
                let pushDiagnosis: Boolean = true;
                if (optionDiagnosis.length > 0) {
                    let indexDiagnosis: number = optionDiagnosis.findIndex((diagnosisFilterItem: string) => diagnosisFilterItem == diagnosis["diagnosis"]);
                    if (indexDiagnosis == -1) {
                        pushDiagnosis = false;
                    }
                }
                if (pushDiagnosis == true) {
                    dataGene = dataGene.concat(buildHeatMapGeneDiagnosisItem(diagnosis, gene_symbol, averageGeneScore))
                }
            }
            let objGene: HeatMapItem = {
                "id": gene_symbol,
                "data": dataGene
            };
            dataHeatMap.push(objGene);
        }
    }
    return dataHeatMap
}

function buildHeatMapByRange(orderedDataSet: Array<DataObject>, rangeFilterValue: any) {
    let dataHeatMap: Array<HeatMapItem> = [];
    let maxAverage: number = 0;
    let minAverage: number = 0;
    let averages: Array<DataObject> = [];
    for (let i = 0; i < orderedDataSet.length; i++) {
        const dataSetItem = orderedDataSet[i];
        let gene_symbol = dataSetItem["gene_symbol"];
        let averageGeneScore: number = getAverageGeneZScore(dataSetItem["diagnoses"]);
        if (averageGeneScore > maxAverage) {
            maxAverage = averageGeneScore;
        } else {
            if (averageGeneScore < minAverage) {
                minAverage = averageGeneScore;
            }
        }
        let objAverageGene: DataObject = {}
        objAverageGene["dataSetPosition"] = i;
        objAverageGene["gene_symbol"] = gene_symbol;
        objAverageGene["averageGeneScore"] = averageGeneScore;
        averages.push(objAverageGene);
    }
    let fractionOfAverageForPerceptile: number = (Math.abs(maxAverage) + Math.abs(minAverage)) / 10;
    let targetPerceptileValue: number = maxAverage - (fractionOfAverageForPerceptile * (rangeFilterValue/10))

    for (let j = 0; j < averages.length; j++) {
        const averageGeneItem = averages[j];
        if (averageGeneItem["averageGeneScore"] >= targetPerceptileValue) {
            let averageGeneScore: number = averageGeneItem["averageGeneScore"];
            const dataSetItem = orderedDataSet[averageGeneItem["dataSetPosition"]];
            let gene_symbol = dataSetItem["gene_symbol"];
            let dataGene: Array<HeatMapGeneItem> = [];
            for (let j = 0; j < dataSetItem["diagnoses"].length; j++) {
                const diagnosis = dataSetItem["diagnoses"][j];
                dataGene = dataGene.concat(buildHeatMapGeneDiagnosisItem(diagnosis, gene_symbol, averageGeneScore))
            }
            let objGene: HeatMapItem = {
                "id": gene_symbol,
                "data": dataGene
            };
            dataHeatMap.push(objGene);
        }
    }

    return dataHeatMap;
}

function getAverageGeneZScore(diagnoses: any) {
    let totalGeneScores: number = 0;
    let totalModelSum: number = 0;
    for (let j = 0; j < diagnoses.length; j++) {
        const diagnosis = diagnoses[j];
        for (let k = 0; k < diagnosis["models"].length; k++) {
            const model = diagnosis["models"][k];
            totalGeneScores += (model["z_score"] / model["total_scores"]);
            totalModelSum += 1;
        }
    }
    let averageGeneScore: number = parseFloat((totalGeneScores / totalModelSum).toFixed(3))
    return averageGeneScore;
}

function buildHeatMapGeneDiagnosisItem(diagnosis: any, gene_symbol: string, averageGeneScore: number) {
    let dataGene: Array<HeatMapGeneItem> = [];
    for (let k = 0; k < diagnosis["models"].length; k++) {
        const model = diagnosis["models"][k];
        let objDataGene: HeatMapGeneItem = {
            "x": model["model_id"],
            "y": parseFloat((model["z_score"] / model["total_scores"]).toFixed(3)),
            "gene_symbol": gene_symbol,
            "gene_z_score_avg": averageGeneScore,
            "diagnosis": diagnosis["diagnosis"],
            "chromosome": model["chromosome"],
            "seq_start_position": model["seq_start_position"],
            "seq_end_position": model["seq_end_position"],
            "gene_id_ensembl": model["gene_id_ensembl"],
        };
        dataGene.push(objDataGene);
    }
    return dataGene;
}

export function buildDiagnosisHeaders(orderedDataSet: Array<DataObject>, rangeFilterValue: any, optionGenes: any, optionDiagnosis: any) {
    let diagnosisHeaders: Array<DataObject> = new Array<String>();
    const dataSetItem = orderedDataSet[0];
    for (let j = 0; j < dataSetItem["diagnoses"].length; j++) {
        const diagnosis = dataSetItem["diagnoses"][j];
        let objDiagnosisHeaders: DataObject = {};
        objDiagnosisHeaders["diagnosis"] = diagnosis["diagnosis"];
        let modelsDiagnosis: number = diagnosis["models"].length;
        objDiagnosisHeaders["numberModels"] = modelsDiagnosis;
        let pushDiagnosis: Boolean = true;
        if (optionDiagnosis.length > 0) {
            if (optionDiagnosis.length > 0) {
                let indexDiagnosisFilterApplied: number = optionDiagnosis.findIndex((diagnosisFilterItem: string) => diagnosisFilterItem == diagnosis["diagnosis"]);
                if (indexDiagnosisFilterApplied == -1) {
                    pushDiagnosis = false;
                }
            }
        } 
        
        if (pushDiagnosis == true) {
            let indexDiagnosisFilter: number = diagnosisHeaders.findIndex((tmpD: DataObject) => tmpD["diagnosis"] == diagnosis["diagnosis"]);
            if (indexDiagnosisFilter == -1) {
                diagnosisHeaders.push(objDiagnosisHeaders);
            }
        }
    }
    return diagnosisHeaders;
}

export function getMaxValue(heatMapData: Array<HeatMapItem>) {
    let maxValue: number = 0;
    for (let i = 0; i < heatMapData.length; i++) {
        const itemHeatMapGene = heatMapData[i];
        for (let j = 0; j < itemHeatMapGene["data"].length; j++) {
            const itemHeatMapGeneData = itemHeatMapGene["data"][j]["y"];
            if (itemHeatMapGeneData > maxValue) {
                maxValue = Math.ceil(itemHeatMapGeneData);
            }
        }
        
    }
    return maxValue;
}

export function getMinValue(heatMapData: Array<HeatMapItem>) {
    let minValue: number = 0;
    for (let i = 0; i < heatMapData.length; i++) {
        const itemHeatMapGene = heatMapData[i];
        for (let j = 0; j < itemHeatMapGene["data"].length; j++) {
            const itemHeatMapGeneData = itemHeatMapGene["data"][j]["y"];
            if (itemHeatMapGeneData < minValue) {
                minValue = Math.floor(itemHeatMapGeneData);
            }
        }
        
    }
    return minValue;
}