import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { DataObject, HeatMapItem } from './helpers/interfaces';
import { buildHeatMapData, buildDiagnosisHeaders, getMaxValue, getMinValue } from './helpers/helpers';

const orderedDataSetTest: Array<DataObject> = [
    {
        "gene_symbol": "ACVR1B",
        "diagnoses": [
            {
                "diagnosis": "colon carcinoma",
                "models": [
                    {
                        "model_id": "T9",
                        "z_score": 0.622692,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T15",
                        "z_score": 0.72126,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "squamous cell carcinoma",
                "models": [
                    {
                        "model_id": "T1",
                        "z_score": 0.459555,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T2",
                        "z_score": -0.615815,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T4",
                        "z_score": 0.487709,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T11",
                        "z_score": -0.137295,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "adenocarcinoma",
                "models": [
                    {
                        "model_id": "T0",
                        "z_score": -0.0748797,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T3",
                        "z_score": 0.317667,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T5",
                        "z_score": 1.49504,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T7",
                        "z_score": 1.01855,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T10",
                        "z_score": 0.9914499999999999,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 2
                    },
                    {
                        "model_id": "T12",
                        "z_score": 1.68729,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "lung adenocarcinoma",
                "models": [
                    {
                        "model_id": "T6",
                        "z_score": 0.471895,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T8",
                        "z_score": -0.181006,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T13",
                        "z_score": 2.7940430000000003,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 3
                    },
                    {
                        "model_id": "T14",
                        "z_score": -0.226699,
                        "chromosome": "12",
                        "seq_start_position": "51951667",
                        "seq_end_position": "51997078",
                        "gene_id_ensembl": "ENSG00000135503",
                        "total_scores": 1
                    }
                ]
            }
        ]
    },
    {
        "gene_symbol": "MSH2",
        "diagnoses": [
            {
                "diagnosis": "colon carcinoma",
                "models": [
                    {
                        "model_id": "T9",
                        "z_score": 0.230767,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T15",
                        "z_score": -0.766062,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "squamous cell carcinoma",
                "models": [
                    {
                        "model_id": "T1",
                        "z_score": 0.609538,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T2",
                        "z_score": 1.21149,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T4",
                        "z_score": -1.06819,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T11",
                        "z_score": -0.513941,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "adenocarcinoma",
                "models": [
                    {
                        "model_id": "T0",
                        "z_score": -0.602528,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T3",
                        "z_score": -0.123158,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T5",
                        "z_score": 0.517816,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T7",
                        "z_score": 0.0500227,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T10",
                        "z_score": -9.96932,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 2
                    },
                    {
                        "model_id": "T12",
                        "z_score": 0.0993758,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "lung adenocarcinoma",
                "models": [
                    {
                        "model_id": "T6",
                        "z_score": 0.630656,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T8",
                        "z_score": -0.555163,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T13",
                        "z_score": -3.76652,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 3
                    },
                    {
                        "model_id": "T14",
                        "z_score": 0.0389888,
                        "chromosome": "2",
                        "seq_start_position": "47402969",
                        "seq_end_position": "47562311",
                        "gene_id_ensembl": "ENSG00000095002",
                        "total_scores": 1
                    }
                ]
            }
        ]
    },
    {
        "gene_symbol": "MUC4",
        "diagnoses": [
            {
                "diagnosis": "colon carcinoma",
                "models": [
                    {
                        "model_id": "T9",
                        "z_score": -0.733843,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T15",
                        "z_score": -0.156053,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "squamous cell carcinoma",
                "models": [
                    {
                        "model_id": "T1",
                        "z_score": 1.14792,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T2",
                        "z_score": -0.733843,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T4",
                        "z_score": -0.677058,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T11",
                        "z_score": 0.198434,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "adenocarcinoma",
                "models": [
                    {
                        "model_id": "T0",
                        "z_score": 0.898494,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T3",
                        "z_score": 3.6227,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T5",
                        "z_score": 0.53414,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T7",
                        "z_score": 1.00339,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T10",
                        "z_score": -1.793735,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 2
                    },
                    {
                        "model_id": "T12",
                        "z_score": -0.0209013,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "lung adenocarcinoma",
                "models": [
                    {
                        "model_id": "T6",
                        "z_score": -0.06477,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T8",
                        "z_score": 2.45368,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T13",
                        "z_score": 5.54931,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 3
                    },
                    {
                        "model_id": "T14",
                        "z_score": -0.584081,
                        "chromosome": "3",
                        "seq_start_position": "195746765",
                        "seq_end_position": "195812277",
                        "gene_id_ensembl": "ENSG00000145113",
                        "total_scores": 1
                    }
                ]
            }
        ]
    },
    {
        "gene_symbol": "XRCC3",
        "diagnoses": [
            {
                "diagnosis": "colon carcinoma",
                "models": [
                    {
                        "model_id": "T9",
                        "z_score": -0.458757,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T15",
                        "z_score": -0.245802,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "squamous cell carcinoma",
                "models": [
                    {
                        "model_id": "T1",
                        "z_score": 0.877043,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T2",
                        "z_score": 1.21999,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T4",
                        "z_score": -0.0360649,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T11",
                        "z_score": 0.154441,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "adenocarcinoma",
                "models": [
                    {
                        "model_id": "T0",
                        "z_score": 1.04202,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T3",
                        "z_score": -0.913327,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T5",
                        "z_score": 0.942599,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T7",
                        "z_score": -1.2122,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T10",
                        "z_score": -0.313379,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 2
                    },
                    {
                        "model_id": "T12",
                        "z_score": -0.243699,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    }
                ]
            },
            {
                "diagnosis": "lung adenocarcinoma",
                "models": [
                    {
                        "model_id": "T6",
                        "z_score": -0.0207011,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T8",
                        "z_score": -0.822967,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    },
                    {
                        "model_id": "T13",
                        "z_score": -1.415147,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 3
                    },
                    {
                        "model_id": "T14",
                        "z_score": -0.340652,
                        "chromosome": "14",
                        "seq_start_position": "103697609",
                        "seq_end_position": "103715504",
                        "gene_id_ensembl": "ENSG00000126215",
                        "total_scores": 1
                    }
                ]
            }
        ]
    }
]

const heatMapDataTest: Array<HeatMapItem> = [
    {
        "id": "ACVR1B",
        "data": [
            {
                "x": "T9",
                "y": 0.623,
                "gene_symbol": "ACVR1B",
                "diagnosis": "colon carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T15",
                "y": 0.721,
                "gene_symbol": "ACVR1B",
                "diagnosis": "colon carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T1",
                "y": 0.46,
                "gene_symbol": "ACVR1B",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T2",
                "y": -0.616,
                "gene_symbol": "ACVR1B",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T4",
                "y": 0.488,
                "gene_symbol": "ACVR1B",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T11",
                "y": -0.137,
                "gene_symbol": "ACVR1B",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T0",
                "y": -0.075,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T3",
                "y": 0.318,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T5",
                "y": 1.495,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T7",
                "y": 1.019,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T10",
                "y": 0.496,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T12",
                "y": 1.687,
                "gene_symbol": "ACVR1B",
                "diagnosis": "adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T6",
                "y": 0.472,
                "gene_symbol": "ACVR1B",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T8",
                "y": -0.181,
                "gene_symbol": "ACVR1B",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T13",
                "y": 0.931,
                "gene_symbol": "ACVR1B",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            },
            {
                "x": "T14",
                "y": -0.227,
                "gene_symbol": "ACVR1B",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "12",
                "seq_start_position": "51951667",
                "seq_end_position": "51997078",
                "gene_id_ensembl": "ENSG00000135503"
            }
        ]
    },
    {
        "id": "MSH2",
        "data": [
            {
                "x": "T9",
                "y": 0.231,
                "gene_symbol": "MSH2",
                "diagnosis": "colon carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T15",
                "y": -0.766,
                "gene_symbol": "MSH2",
                "diagnosis": "colon carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T1",
                "y": 0.61,
                "gene_symbol": "MSH2",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T2",
                "y": 1.211,
                "gene_symbol": "MSH2",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T4",
                "y": -1.068,
                "gene_symbol": "MSH2",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T11",
                "y": -0.514,
                "gene_symbol": "MSH2",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T0",
                "y": -0.603,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T3",
                "y": -0.123,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T5",
                "y": 0.518,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T7",
                "y": 0.05,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T10",
                "y": -4.985,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T12",
                "y": 0.099,
                "gene_symbol": "MSH2",
                "diagnosis": "adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T6",
                "y": 0.631,
                "gene_symbol": "MSH2",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T8",
                "y": -0.555,
                "gene_symbol": "MSH2",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T13",
                "y": -1.256,
                "gene_symbol": "MSH2",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            },
            {
                "x": "T14",
                "y": 0.039,
                "gene_symbol": "MSH2",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "2",
                "seq_start_position": "47402969",
                "seq_end_position": "47562311",
                "gene_id_ensembl": "ENSG00000095002"
            }
        ]
    },
    {
        "id": "MUC4",
        "data": [
            {
                "x": "T9",
                "y": -0.734,
                "gene_symbol": "MUC4",
                "diagnosis": "colon carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T15",
                "y": -0.156,
                "gene_symbol": "MUC4",
                "diagnosis": "colon carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T1",
                "y": 1.148,
                "gene_symbol": "MUC4",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T2",
                "y": -0.734,
                "gene_symbol": "MUC4",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T4",
                "y": -0.677,
                "gene_symbol": "MUC4",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T11",
                "y": 0.198,
                "gene_symbol": "MUC4",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T0",
                "y": 0.898,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T3",
                "y": 3.623,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T5",
                "y": 0.534,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T7",
                "y": 1.003,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T10",
                "y": -0.897,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T12",
                "y": -0.021,
                "gene_symbol": "MUC4",
                "diagnosis": "adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T6",
                "y": -0.065,
                "gene_symbol": "MUC4",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T8",
                "y": 2.454,
                "gene_symbol": "MUC4",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T13",
                "y": 1.85,
                "gene_symbol": "MUC4",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            },
            {
                "x": "T14",
                "y": -0.584,
                "gene_symbol": "MUC4",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "3",
                "seq_start_position": "195746765",
                "seq_end_position": "195812277",
                "gene_id_ensembl": "ENSG00000145113"
            }
        ]
    },
    {
        "id": "XRCC3",
        "data": [
            {
                "x": "T9",
                "y": -0.459,
                "gene_symbol": "XRCC3",
                "diagnosis": "colon carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T15",
                "y": -0.246,
                "gene_symbol": "XRCC3",
                "diagnosis": "colon carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T1",
                "y": 0.877,
                "gene_symbol": "XRCC3",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T2",
                "y": 1.22,
                "gene_symbol": "XRCC3",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T4",
                "y": -0.036,
                "gene_symbol": "XRCC3",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T11",
                "y": 0.154,
                "gene_symbol": "XRCC3",
                "diagnosis": "squamous cell carcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T0",
                "y": 1.042,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T3",
                "y": -0.913,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T5",
                "y": 0.943,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T7",
                "y": -1.212,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T10",
                "y": -0.157,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T12",
                "y": -0.244,
                "gene_symbol": "XRCC3",
                "diagnosis": "adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T6",
                "y": -0.021,
                "gene_symbol": "XRCC3",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T8",
                "y": -0.823,
                "gene_symbol": "XRCC3",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T13",
                "y": -0.472,
                "gene_symbol": "XRCC3",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            },
            {
                "x": "T14",
                "y": -0.341,
                "gene_symbol": "XRCC3",
                "diagnosis": "lung adenocarcinoma",
                "chromosome": "14",
                "seq_start_position": "103697609",
                "seq_end_position": "103715504",
                "gene_id_ensembl": "ENSG00000126215"
            }
        ]
    }
]

const optionGenesTest: any = ["ACVR1B", "MSH2", "XRCC3"]

test('renders EBI02032 Technical task title', () => {
  render(<App />);
  const homeTitle = screen.getByText("EBI02032 Technical task");
  expect(homeTitle).toBeInTheDocument();
});

describe('GetMaxValue', () => {
  it('expect return the max z-score value of heat map data', () => {
    const maxValue: number = getMaxValue(heatMapDataTest);
    console.log(maxValue)
    expect(maxValue).toEqual(4)
  })
})

describe('GetMinValue', () => {
  it('expect return the min z-score value of heat map data', () => {
    const minValue: number = getMinValue(heatMapDataTest);
    console.log(minValue)
    expect(minValue).toEqual(-5)
  })
})

describe('Get40PercentileData', () => {
  it('expect return the number of genes that are in percentile 40', () => {
    let heatMapData: Array<HeatMapItem> = buildHeatMapData(orderedDataSetTest, 40, [], []);
    console.log(heatMapData.length)
    expect(heatMapData.length).toEqual(2)
  })
})

describe('GetHeatMapDataFilteredByGenes', () => {
  it('expect return the number of genes filtered by gene filter', () => {
    let heatMapData: Array<HeatMapItem> = buildHeatMapData(orderedDataSetTest, 100, optionGenesTest, []);
    console.log(heatMapData.length)
    expect(heatMapData.length).toEqual(3)
  })
})

