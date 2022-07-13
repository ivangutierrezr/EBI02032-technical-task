import React, { Component } from 'react';

import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card';

//Styles
import './HomeInfo.css'

const HomeInfo = () => {

    return (
        <Stack 
            className="homeInfo">
            <Card border="light" style={{ width: '80%' }}>
                <Card.Header>Nelson Ivan Gutierrez Rendon</Card.Header>
                <Card.Body>
                    <Card.Title>EBI02032 Technical task</Card.Title>
                    <Card.Text>
                        This website has been done as technical task requirement for Web Developer Role (EBI02032) on EMBL's European Bioinformatics Institute.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <div className="bg-light border infoContent">
                <Card>
                    <Card.Img variant="top" src="./assets/img/EMBL_EBI-logo.png" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> */}
            {/* <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div> */}
        </Stack>
    );
}

export default HomeInfo;