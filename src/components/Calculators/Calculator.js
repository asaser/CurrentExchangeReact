import React, { useState } from 'react';  //dodanie HOOKow
    
function Calculator() {

    const [amount, setAmount] = useState(0);

    return (
    <form>
        <div>
            <input type="number" placeholder="Wartosc" onChange = {(event) => { amount = event.target.value} }></input>
        </div>

        <div>
            <span>From: </span>
            <select onChange = {(event) => console.log(event.target.value)}>
                <option value="NOK">NOK</option>
                <option value="PLN">PLN</option>
            </select>
        </div>

        <div>
            <span>To: </span>
            <select onChange = {(event) => console.log(event.target.value)}>
                <option value="NOK">NOK</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
        <div>Result: </div>
    </form>
    );
}


export default Calculator;