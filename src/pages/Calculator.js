import React, { useState, useEffect } from 'react';  //dodanie HOOKow
import { Button } from '../components/Buttons';


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

    const [result, setResault] = useState(0);
    const [amount, setAmount] = useState(0);
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
        <div>
            <input value = {amount} type="number" placeholder="Wartosc" onChange = {(event) => { setAmount(event.target.value); }}></input>
        </div>

        <div>
            <span>From: </span>
            <Select value = {currencyFrom} setCurrency = {setCurrencyFrom}></Select>
        </div>

        <div>
            <span>To: </span>
            <Select value = {currencyTo} setCurrency = {setCurrencyTo}></Select>
        </div>
        <div>Result: {result}</div>
        <Button type="submit">Click</Button>
    </form>
    );
}


export default Calculator;