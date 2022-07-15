import React, { Component } from 'react';

import Stack from 'react-bootstrap/Stack'

import DataHeatMap from '../dataHeatMap/DataHeatMap';
import DataSearch from '../dataSearch/DataSearch';
import './DataInit.css'

import { DataObject, HeatMapItem, HeatMapGeneItem } from '../../helpers/interfaces'
import { buildHeatMapData, getMaxValue, getMinValue } from '../../helpers/helpers'

const DataInit = (props: { fullDataSet: Array<DataObject>, orderedDataSet: Array<DataObject>, genesFilter: Array<String>, diagnosisFilter: Array<String>, heatMapData: Array<HeatMapItem>, minValue: number, maxValue: number, applyFilters: Function }) => {
    
    const [fullDataSet, setFullDataSet] = React.useState(props.fullDataSet);
    const [orderedDataSet, setOrderedDataSet] = React.useState(props.orderedDataSet);
    const [genesFilter, setGenesFilter] = React.useState(props.genesFilter);
    const [diagnosisFilter, setDiagnosisFilter] = React.useState(props.diagnosisFilter);
    const [heatMapData, setHeatMapData] = React.useState(props.heatMapData);
    const [minValue, setMinValue] = React.useState(props.minValue);
    const [maxValue, setMaxValue] = React.useState(props.maxValue);

    return (
        <Stack className="dataViewer">
            <h3 style={{marginTop: '30px'}}>Expression Data Heat Map</h3>
            <DataSearch applyFilters={props.applyFilters} genesFilter={genesFilter} diagnosisFilter={diagnosisFilter} />
            <DataHeatMap data={heatMapData} minValue={minValue} maxValue={maxValue}/>
        </Stack>
    );
}

export default DataInit;