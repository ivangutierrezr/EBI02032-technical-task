import React, { Component } from 'react';

import Stack from 'react-bootstrap/Stack'

import DataHeatMap from '../dataHeatMap/DataHeatMap';
import DataSearch from '../dataSearch/DataSearch';
import './DataInit.css'

import { DataObject, HeatMapItem } from '../../helpers/interfaces'

const DataInit = (props: { heatMapReady: Boolean, fullDataSet: Array<DataObject>, orderedDataSet: Array<DataObject>, genesFilter: Array<String>, diagnosisFilter: Array<String>, diagnosisHeaders: Array<DataObject>,  heatMapData: Array<HeatMapItem>, minValue: number, maxValue: number, applyFilters: Function }) => {
    return (
        <Stack className="dataInit">
            <h3 style={{marginTop: '20px'}}>Expression Data Heat Map</h3>
            <DataSearch applyFilters={props.applyFilters} genesFilter={props.genesFilter} diagnosisFilter={props.diagnosisFilter} />
            {
                props.heatMapReady && <DataHeatMap heatMapData={props.heatMapData} minValue={props.minValue} maxValue={props.maxValue} diagnosisHeaders={props.diagnosisHeaders} />
            }
        </Stack>
    );
}

export default DataInit;