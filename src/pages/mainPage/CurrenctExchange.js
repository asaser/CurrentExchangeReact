import React, { useState, useEffect } from 'react';  //dodanie HOOKow
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Button } from '../../components/Buttons';


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
            // removeEventListener
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

    const [result, setResault] = useState("0");
    const [amount, setAmount] = useState();
    const [currencyFrom, setCurrencyFrom] = useState('NOK');
    const [currencyTo, setCurrencyTo] = useState('PLN');
    const handleSubmit = (event) => {

        event.preventDefault();
        fetch(`${shortAPI}${currencyFrom}`)
        .then(response => response.json())
        .then(data => {
            setResault(amount * data.rates[currencyTo]);
        });
    }

    return (
    <form onSubmit = {handleSubmit}>

    <Container>
        <Row>
            <Col xs={5}>
        <div>
            <div><span>From: </span></div>
            <Select value = {currencyFrom} setCurrency = {setCurrencyFrom}></Select>
        </div>
            </Col>

            <Col xs={2}>
            <div>
                <img src="./logoNavbar.png" />
            </div>
            </Col>

            <Col xs={5}>
        <div>
            <div><span>To: </span></div>
            <Select value = {currencyTo} setCurrency = {setCurrencyTo}></Select>
        </div>
            </Col>
        </Row>
    </Container>

    <Form.Group>
        <Form.Control size="lg" type="number" placeholder="0"
        value = {amount} onChange = {(event) => { setAmount(event.target.value); }}>
        </Form.Control>
    </Form.Group>

    <Container>
        <Row className="justify-content-lg-center">
            <Col lg="auto">
                <div>Result: {result}</div>
            </Col>
        </Row>
    </Container>

    <Button variant="success" block type="submit">Calculate the money</Button>

    </form>
    );
}

export default Calculator;