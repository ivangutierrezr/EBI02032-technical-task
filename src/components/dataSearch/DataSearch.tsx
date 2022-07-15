import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import RangeSlider from 'react-bootstrap-range-slider';

import './DataSearch.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';

const DataSearch = (props: { applyFilters: Function, genesFilter: Array<String>, diagnosisFilter: Array<String> }) => {
    const [optionGenes, setOptionGenes] = React.useState([]);
    const [optionDiagnosis, setOptionDiagnosis] = React.useState([]);
    const [optionGenesArray, setOptionGenesArray] = React.useState(props.genesFilter);
    const [optionDiagnosisArray, setOptionDiagnosisArray] = React.useState(props.diagnosisFilter);
    const [rangeFilterValue, setRangeFilterValue] = React.useState(100);

    let showDataGenes = (val: any) => {
        setOptionGenes(val);
        if (val.length > 0) {
            setRangeFilterValue(100);
        }
        props.applyFilters(rangeFilterValue, val, optionDiagnosis)
    }

    let showDataDiagnosis = (val: any) => {
        setOptionDiagnosis(val);
        if (val.length > 0) {
          setRangeFilterValue(100);  
        }
        props.applyFilters(rangeFilterValue, optionGenes, val)
    }

    let showPercentile = (val: any) => {
        setRangeFilterValue(parseInt(val));
        props.applyFilters(parseInt(val), optionGenes, optionDiagnosis)
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
                    <Form.Group style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Form.Label>Filter top {rangeFilterValue}% of the genes that have the highest expression</Form.Label>
                        <RangeSlider
                            value={rangeFilterValue}
                            step={10}
                            onChange={e => showPercentile(e.target.value)}
                            variant='info'
                            tooltipLabel={currentValue => `${currentValue}%`}
                            tooltip='on'
                            disabled={(optionGenes.length > 0 || optionDiagnosis.length > 0) ? true : false}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default DataSearch;