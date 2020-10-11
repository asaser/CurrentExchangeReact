import React from 'react';
    
function Calculator() {

    return (
    <form>
        <div>
            <input type="number" placeholder="Wartosc"></input>
        </div>

        <div>
            <span>From: </span>
            <select>
                <option value="NOK">NOK</option>
                <option value="PLN">PLN</option>
            </select>
        </div>

        <div>
            <span>To: </span>
            <select>
                <option value="NOK">NOK</option>
                <option value="PLN">PLN</option>
            </select>
        </div>
    </form>
    );
}


export default Calculator;