import React, { useState, useEffect } from 'react';  //add HOOKow
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../components/Buttons';
import './Calculator.css';


const shortAPI = "https://api.ratesapi.io/api/latest?base=";

function Select({ value, setCurrency }) {

    const [currencies, setCurrencies] = useState( [] );

    useEffect (() => {
        fetch(`${shortAPI}PLN`)
        .then(response => response.json())
        .then (data => {
            setCurrencies (Object.keys(data.rates))
        });

        return () => {
            // clearInterval
        }
    }, []);

    return (
        <select value={value} onChange = {(event) => setCurrency(event.target.value)}>
            {currencies.map((elem) => {
            return <option key = {`index-${elem}`} value = {elem}>{elem}</option>
            })}
        </select>
    );
}

function Calculator() {

    const [result, setResoult] = useState("0");
    const [amount, setAmount] = useState();
    const [currencyFrom, setCurrencyFrom] = useState('NOK');
    const [currencyTo, setCurrencyTo] = useState('PLN');
    const handleSubmit = (event) => {

        event.preventDefault();
        fetch(`${shortAPI}${currencyFrom}`)
        .then(response => response.json())
        .then(data => {
            setResoult(amount * data.rates[currencyTo]);
        });
    }

    return (
    <form className="mainForm" onSubmit = {handleSubmit}>

    <Container>
        <Row className="currencySelectionValue">
            <Col className="chooseCountry">
        <div>
            <div><span>From: </span></div>
            <Select value = {currencyFrom} setCurrency = {setCurrencyFrom}></Select>
        </div>
            </Col>

            <Col md="auto">
        <div>
                <img
                src="./logoNavbar.png"
                alt=""
                width="250px"
                height="250px"
                />
        </div>
            </Col>

            <Col className="chooseCountry">
        <div>
            <div><span>To: </span></div>
            <Select value = {currencyTo} setCurrency = {setCurrencyTo}></Select>
        </div>
            </Col>
        </Row>
    </Container>

    <Form.Group>
        <Form.Row className="formControl">
            <Col lg={7}>
                <Form.Control className="formControlValue" size="lg" type="number" placeholder="0"
                value = {amount} onChange = {(event) => { setAmount(event.target.value); }}>
                </Form.Control>
            </Col>
        </Form.Row>
    </Form.Group>

    <Container>
        <Row className="resultValue justify-content-lg-center">
            <Col lg="auto">
                <div>Result: {result}</div>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row className="buttonValue">
            <Col lg={8}>
                <Button size="lg" variant="success" type="submit" block>
                    <b>Calculate the money</b>
                </Button>
            </Col>
        </Row>
    </Container>

    </form>
    );
}

export default Calculator;