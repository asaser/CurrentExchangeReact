import React, { useState } from 'react';  //dodanie HOOKow
import { Button } from '../Buttons';

// state = {
//     amount: 0,
//     currencyFrom: 'NOK',
//     currencyTo: 'PLN'
// }

// this.useState({ currencyFrom: event.target.value}, () => {
//     aktualny stan aplikacji
// })

function Select({ value, setCurrency }) {
    return (
    <select value = {value} onChange = {(event) => { setCurrency(event.target.value); }}>
        <option value="NOK">NOK</option>
        <option value="PLN">PLN</option>
    </select>
    );
}

function Calculator() {

    const [amount, setAmount] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('NOK');
    const [currencyTo, setCurrencyTo] = useState('PLN');
    const handleSubmit = (event) => { 
        
        event.preventDefault(); 
        fetch('https://api.ratesapi.io/api/latest?base=PLN');
    }

    return (
    <form onSubmit = {handleSubmit}>
        <div>
            <input type="number" placeholder="Wartosc" onChange = {(event) => { setAmount(event.target.value); }}></input>
        </div>

        <div>
            <span>From: </span>
            <Select value = {currencyFrom} setCurrency = {setCurrencyFrom}></Select>
        </div>

        <div>
            <span>To: </span>
            <Select value = {currencyTo} setCurrency = {setCurrencyTo}></Select>
        </div>
        <div>Result: {amount}</div>
        <Button type="submit">Click</Button>
    </form>
    );
}


export default Calculator;