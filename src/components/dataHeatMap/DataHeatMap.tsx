import React, { Component } from 'react';

import { ResponsiveHeatMapCanvas  } from "@nivo/heatmap";

import './DataHeatMap.css'

import { DataObject, HeatMapItem } from '../../helpers/interfaces'
import DataHeatMapHeader from '../dataHeatMapHeader/DataHeatMapHeader';

const DataHeatMap = (props: { heatMapData: Array<HeatMapItem>, diagnosisHeaders: Array<DataObject>, minValue: number, maxValue: number }) => {
    return (
        <div className='contentHeatMap' style={{ height: `${((props.heatMapData.length * 25) < 500 ? 500 : (props.heatMapData.length * 25))}px` }}>
            <DataHeatMapHeader diagnosisHeaders={props.diagnosisHeaders} />
            <ResponsiveHeatMapCanvas 
                data={props.heatMapData}
                margin={{ top: 30, right: 220, bottom: 60, left: 90 }}
                valueFormat=' ^-.3~r'
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: -70,
                    legendPosition: 'middle',
                }}
                axisRight={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Gene',
                    legendPosition: 'middle',
                    legendOffset: 70
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Gene',
                    legendPosition: 'middle',
                    legendOffset: -72
                }}
                colors={{
                    type: 'sequential',
                    scheme: 'red_yellow_blue',
                    minValue: props.minValue,
                    maxValue: props.maxValue,
                }}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                emptyColor="#555555"
                legends={[
                    {
                        anchor: 'right',
                        translateX: 120,
                        translateY: 0,
                        length: 400,
                        thickness: 20,
                        direction: 'column',
                        tickPosition: 'after',
                        tickSize: 5,
                        tickSpacing: 5,
                        tickOverlap: false,
                        tickFormat: ' ^-.3~r',
                        title: 'Z-score→',
                        titleAlign: 'start',
                        titleOffset: 5
                    }
                ]}
                tooltip={(data) => <div className='customTooltipHM'>
                    <h4>Gene Metadata</h4>
                    <ul>
                        <li>gene_symbol: {data.cell.data.gene_symbol}</li>
                        <li>model_id: {data.cell.data.x}</li>
                        <li>model_z_score_avg: {data.cell.data.y}</li>
                        <li>gene_z_score_avg: {data.cell.data.gene_z_score_avg}</li>
                        <li>diagnosis: {data.cell.data.diagnosis}</li>
                        <li>chromosome: {data.cell.data.chromosome}</li>
                        <li>seq_start_position: {data.cell.data.seq_start_position}</li>
                        <li>seq_end_position: {data.cell.data.seq_end_position}</li>
                        <li>gene_id_ensembl: {data.cell.data.gene_id_ensembl}</li>
                    </ul>
                </div>
                }
                hoverTarget="cell"
                theme={{
                    "background": "#ffffff",
                    "textColor": "#333333",
                    "fontSize": 12,
                    "axis": {
                        "domain": {
                            "line": {
                                "stroke": "#777777",
                                "strokeWidth": 1
                            }
                        },
                        "legend": {
                            "text": {
                                "fontSize": 12,
                                "fill": "#333333"
                            }
                        },
                        "ticks": {
                            "line": {
                                "stroke": "#777777",
                                "strokeWidth": 1
                            },
                            "text": {
                                "fontSize": 12,
                                "fill": "#333333"
                            }
                        }
                    },
                    "grid": {
                        "line": {
                            "stroke": "#dddddd",
                            "strokeWidth": 1
                        }
                    },
                    "legends": {
                        "title": {
                            "text": {
                                "fontSize": 12,
                                "fill": "#333333"
                            }
                        },
                        "text": {
                            "fontSize": 12,
                            "fill": "#333333"
                        },
                        "ticks": {
                            "line": {},
                            "text": {
                                "fontSize": 10,
                                "fill": "#333333"
                            }
                        }
                    },
                    "annotations": {
                        "text": {
                            "fontSize": 13,
                            "fill": "#333333",
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "link": {
                            "stroke": "#000000",
                            "strokeWidth": 1,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "outline": {
                            "stroke": "#000000",
                            "strokeWidth": 2,
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        },
                        "symbol": {
                            "fill": "#000000",
                            "outlineWidth": 2,
                            "outlineColor": "#ffffff",
                            "outlineOpacity": 1
                        }
                    },
                    "tooltip": {
                        "container": {
                            "background": "#ffffff",
                            "color": "#333333",
                            "fontSize": 12
                        },
                        "basic": {},
                        "chip": {},
                        "table": {},
                        "tableCell": {},
                        "tableCellValue": {}
                    }
                }}
            />
        </div>
    );
}

export default DataHeatMap;
