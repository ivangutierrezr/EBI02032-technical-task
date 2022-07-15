import React, { Component } from 'react';

import { ResponsiveHeatMap } from "@nivo/heatmap";
import { BasicTooltip } from '@nivo/tooltip';

import './DataHeatMap.css'

import { HeatMapItem } from '../../helpers/interfaces'

const DataHeatMap = (props: { data: Array<HeatMapItem>, minValue: number, maxValue: number }) => {
    // const data = [
    //     {
    //         "id": "Japan",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": 54645
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 84991
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": 91957
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": -19692
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": -87098
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": -88765
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": -3758
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": -6793
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": 79648
    //             }
    //         ]
    //     },
    //     {
    //         "id": "France",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": 35482
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 13986
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": -64604
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": 54710
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": 36174
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": 21862
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 40584
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": -89813
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": 45008
    //             }
    //         ]
    //     },
    //     {
    //         "id": "US",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": -93305
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": -93527
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": -10878
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": 47861
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": 81014
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": 2721
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 92024
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": -83376
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": 83843
    //             }
    //         ]
    //     },
    //     {
    //         "id": "Germany",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": 64371
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 47981
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": 97445
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": -99697
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": -27906
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": 38285
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 45396
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": 91979
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": -3428
    //             }
    //         ]
    //     },
    //     {
    //         "id": "Norway",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": -34968
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 29251
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": -85462
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": -86337
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": 23988
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": -15134
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 61592
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": 72183
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": 19804
    //             }
    //         ]
    //     },
    //     {
    //         "id": "Iceland",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": -64299
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 63365
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": 90674
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": 40486
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": 49223
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": 63559
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 92291
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": 64799
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": -35827
    //             }
    //         ]
    //     },
    //     {
    //         "id": "UK",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": -87761
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": 51926
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": 4995
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": -30439
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": 6029
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": -45588
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": -55915
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": -78878
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": -31717
    //             }
    //         ]
    //     },
    //     {
    //         "id": "Vietnam",
    //         "data": [
    //             {
    //                 "x": "Train",
    //                 "y": 61341
    //             },
    //             {
    //                 "x": "Subway",
    //                 "y": -59185
    //             },
    //             {
    //                 "x": "Bus",
    //                 "y": 46434
    //             },
    //             {
    //                 "x": "Car",
    //                 "y": 39866
    //             },
    //             {
    //                 "x": "Boat",
    //                 "y": -26164
    //             },
    //             {
    //                 "x": "Moto",
    //                 "y": -36407
    //             },
    //             {
    //                 "x": "Moped",
    //                 "y": 69559
    //             },
    //             {
    //                 "x": "Bicycle",
    //                 "y": -61095
    //             },
    //             {
    //                 "x": "Others",
    //                 "y": 40600
    //             }
    //         ]
    //     }
    // ]

    const [data, setData] = React.useState(props.data);

    console.log(props.data)

    return (
        <div className='contentHeatMap'>
            <ResponsiveHeatMap
                data={data}
                margin={{ top: 60, right: 220, bottom: 60, left: 90 }}
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
                        translateY: 40,
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
                        <li>z_score_avg: {data.cell.data.z_score}</li>
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
