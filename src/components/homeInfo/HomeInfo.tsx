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
                    <Card.Text>
                        This website has been done as technical task requirement for Web Developer Role (EBI02032) on EMBL's European Bioinformatics Institute.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default HomeInfo;