import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navigation.css';


function Navigation() {

    const navbarText = "Current Exchange Value";

    return (
        <Navbar className="mainNav" fixed="top" bg="transparent" variant="transparent">
            <Navbar.Brand>
                <img
                    src="./logoNavbar.png"
                    alt=""
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top mainLogoNav"
                />
             <b>{navbarText}</b>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;