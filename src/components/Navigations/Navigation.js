import React from 'react';
import { Navbar } from 'react-bootstrap';

function Navigation() {

    const day = "Current Exchange Value";

    return (
        <Navbar fixed="top" bg="transparent" variant="transparent">
            <Navbar.Brand hfer="#home">
                <img 
                alt=""
                src="./testlogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                /> {' '}
                <b>{day}</b>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;