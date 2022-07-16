import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DataHeatMapHeader.css'

import { DataObject } from '../../helpers/interfaces'

const DataHeatMapHeader = (props: {diagnosisHeaders: Array<DataObject>}) => {
    const [gridFragments, setGridFragments] = React.useState(() => {
        let rowFragments: String = "";
        for (let i = 0; i < props.diagnosisHeaders.length; i++) {
            const header = props.diagnosisHeaders[i];
            rowFragments += (String(header["numberModels"]) + "fr ")
        }
        return rowFragments;
    });
    const [headerColors, setRowColors] = React.useState([
        "#FE834F",
        "#935BFC",
        "#4798E6",
        "#6DFFC7"
    ])

    const rowStyle:Object = {
        display: 'grid',
        gridTemplateColumns: gridFragments, 
        width: '100%'
    }

    return (
        <div className='dataHeatMapHeaders'>
            <Row style={rowStyle} >
                {
                    props.diagnosisHeaders.map((diagnosis: DataObject, d:number) => {
                        return (
                            <Col key={d} style={{ backgroundColor: headerColors[d] }}>
                                <div className='diagnosisContent'>
                                    {diagnosis["diagnosis"]}
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default DataHeatMapHeader;
