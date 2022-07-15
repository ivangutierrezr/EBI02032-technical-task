import React, { Component } from 'react';

import Stack from 'react-bootstrap/Stack'

import DataHeatMap from '../dataHeatMap/DataHeatMap';
import DataSearch from '../dataSearch/DataSearch';
import './DataInit.css'

import { DataObject, HeatMapItem } from '../../helpers/interfaces'

const DataInit = (props: { fullDataSet: Array<DataObject>, orderedDataSet: Array<DataObject>, genesFilter: Array<String>, diagnosisFilter: Array<String>, diagnosisHeaders: Array<DataObject>,  heatMapData: Array<HeatMapItem>, minValue: number, maxValue: number, applyFilters: Function }) => {
    
    const [fullDataSet, setFullDataSet] = React.useState(props.fullDataSet);
    const [orderedDataSet, setOrderedDataSet] = React.useState(props.orderedDataSet);
    const [genesFilter, setGenesFilter] = React.useState(props.genesFilter);
    const [diagnosisFilter, setDiagnosisFilter] = React.useState(props.diagnosisFilter);
    const [diagnosisHeaders, setDiagnosisHeaders] = React.useState(props.diagnosisHeaders);
    const [heatMapData, setHeatMapData] = React.useState(props.heatMapData);
    const [minValue, setMinValue] = React.useState(props.minValue);
    const [maxValue, setMaxValue] = React.useState(props.maxValue);

    return (
        <Stack className="dataViewer">
            <h3 style={{marginTop: '30px'}}>Expression Data Heat Map</h3>
            <DataSearch applyFilters={props.applyFilters} genesFilter={genesFilter} diagnosisFilter={diagnosisFilter} />
            <DataHeatMap heatMapData={heatMapData} minValue={minValue} maxValue={maxValue} diagnosisHeaders={diagnosisHeaders}/>
        </Stack>
    );
}

export default DataInit;