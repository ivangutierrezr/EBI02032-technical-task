import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Nav.css';

const NavEBI = () => {

    var currentView: string = window.location.pathname;
    console.log(currentView);

    const [activeKey, setActiveKey] = React.useState(currentView);

    // currentView = currentView.replace("")


    return (
        <>
            <Navbar bg="light" expand="md" className='EbiNavBar'>
                <Container fluid>
                    <Navbar.Brand onClick={() => setActiveKey("home")} href="/">EBI02032 Technical Task</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav variant="tabs" activeKey={activeKey}>
                            <Nav.Item>
                                <Nav.Link onClick={() => setActiveKey("home")} eventKey="/" href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => setActiveKey("data")} eventKey="/data" href="/data">Data Viewer</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavEBI;