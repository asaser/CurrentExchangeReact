import React from 'react';
import { Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand hfer="#home">
                <img 
                alt=""
                src="./testlogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                /> {' '}
                React
            </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;