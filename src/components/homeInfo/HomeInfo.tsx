import React, { Component } from 'react';

import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';

//Styles
import './HomeInfo.css'

const HomeInfo = () => {

    return (
        <Stack className="homeInfo">
            <Card border="light" style={{ width: '80%' }}>
                <Card.Header>Nelson Ivan Gutierrez Rendon</Card.Header>
                <Card.Body>
                    <Card.Title>EBI02032 Technical task</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                        This website has been made as the technical task requirement for the Web Developer Role (EBI02032) at EMBL's European Bioinformatics Institute.
                        <br />
                        <br />
                        The first approach was focused on getting the data from the provided Github repo while preserving its full structure as an array of objects (fullDataSet). The next step was focused on ordering the data into a new array of objects (orderedDataSet); where every object belongs to a unique gene that has all model_id grouped by diagnoses into an array of diagnoses and this has an array of models. The idea in this last step was to sort the data to make the heatmap building easier. Also, orderedDataSet allows you to create the heatmap header component data, to get the max and min value for heatmap labels and apply the filters easier.
                        <br />
                        <br />
                        Finally, for the filters and the range selector, the approach was: if either, the genes or diagnosis filter has data selected, the range selector will be disabled. This is because it makes no sense to show the highests z-score averages with just a few elements displayed, hence, when a gene or diagnosis is selected in their filters, the range selector will be automatically disabled and set to the 100 percenti
                        {/* This website has been done as technical task requirement for Web Developer Role (EBI02032) on EMBL's European Bioinformatics Institute.
                        <br />
                        <br />
                        The first approach was focused to get the data from Github repo and preserve its full structure as array of objects (fullDataSet). Next step was focused to order the data into a new array of objects (orderedDataSet); every object belongs to an unique gene that has all model_id grouped by diagnoses into an array of diagnoses and this has an array of models. The idea in this last step was to have an sorted data to make the heatmap data build easier. Also, orderedDataSet allows to create the heatmap header component data, to get the max and min value for heatmap legends and apply the filters easier.
                        <br />
                        <br />
                        Finally, for filters and range selector, the approach was: if genes filter or diagnosis filter has data selected, the range selector will be disabled, this is because has no logic to show the highests z-score averages with just a few elements displayed. When a gene or diagnosis is selected in their filters, range select will become at perceptile 100 automatically. */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default HomeInfo;