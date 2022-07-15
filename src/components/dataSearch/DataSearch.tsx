import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Typeahead, } from 'react-bootstrap-typeahead';

import './DataSearch.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';

const DataSearch = (props: { applyFilters: Function, genesFilter: Array<String>, diagnosisFilter: Array<String> }) => {
    
    // interface Option = new Array(String);

    const [optionGenes, setOptionGenes] = React.useState([]);
    const [optionDiagnosis, setOptionDiagnosis] = React.useState([]);
    const [optionGenesArray, setOptionGenesArray] = React.useState(props.genesFilter);
    const [optionDiagnosisArray, setOptionDiagnosisArray] = React.useState(props.diagnosisFilter);

    let showDataGenes = (val: any) => {
        console.log(val)
        setOptionGenes(val)
    }

    let showDataDiagnosis = (val: any) => {
        console.log(val)
        setOptionDiagnosis(val)
    }

    let showPercentile = (val: any) => {
        console.log(val);
    }

    return (
        <Container className='dataSearchContainer'>
            <Row>
                <Col>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Filter by genes</Form.Label>
                        <Typeahead
                            labelKey='genesFilter'
                            id='genesFilter'
                            multiple
                            options={optionGenesArray}
                            onChange={e => showDataGenes(e)}
                            placeholder="Select list of genes"
                            selected={optionGenes}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Filter by diagnosis</Form.Label>
                        <Typeahead
                            labelKey='diagnosisFilter'
                            id='diagnosisFilter'
                            multiple
                            options={optionDiagnosisArray}
                            onChange={e => showDataDiagnosis(e)}
                            placeholder="Select list of diagnosis"
                            selected={optionDiagnosis}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Range</Form.Label>
                        <Form.Range 
                            onChange={e => showPercentile(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default DataSearch;