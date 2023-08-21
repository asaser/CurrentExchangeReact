import React, { useState, useEffect } from "react"; //add HOOKow
// import { Col, Container, Form, Row } from "react-bootstrap";
// import { Button } from "../../components/Buttons";
import "./Calculator.css";
// import logoCalculation from "../../images/logoNavbar.png";

function Calculator() {
  const [exchangeData, setExchangeData] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const apiUrl =
      "http://data.fixer.io/api/latest?access_key=3e24887ae623b287cf0cc98baa9a8118";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setExchangeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (exchangeData.rates) {
      const rate =
        exchangeData.rates[targetCurrency] / exchangeData.rates[baseCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [exchangeData, baseCurrency, targetCurrency, amount]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>Base Currency:</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          {exchangeData.rates &&
            Object.keys(exchangeData.rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Target Currency:</label>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          {exchangeData.rates &&
            Object.keys(exchangeData.rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <p>
          {amount} {baseCurrency} is equal to {convertedAmount} {targetCurrency}
        </p>
      </div>
    </div>
  );
}

// return (
// <form className="mainForm" onSubmit={handleSubmit}>
//   <Container>
//     <Row className="currencySelectionValue">
//       <Col className="chooseCountry">
//         <div>
//           <div>
//             <span>From: </span>
//           </div>
//           <Form.Select>
//             {Object.keys(firstCountry).map((allCountries) => {
//               return (
//                 <option
//                   key={`index-${allCountries}`}
//                   value={firstCountry[allCountries]}
//                 >
//                   {allCountries}
//                 </option>
//               );
//             })}
//           </Form.Select>
//         </div>
//       </Col>

// <Col md="auto">
//   <div>
//     <img src={logoCalculation} alt="" width="250px" height="250px" />
//   </div>
// </Col>

// <Col className="chooseCountry">
//   <div>
//     <div>
//       <span>To: </span>
//     </div>
//     <Form.Select>
//       {Object.keys(secondCountry).map((allCountries) => {
//         return (
//           <option
//             key={`index-${allCountries}`}
//             value={firstCountry[allCountries]}
//           >
//             {allCountries}
//           </option>
//         );
//       })}
//     </Form.Select>
//   </div>
// </Col>
//     </Row>
//   </Container>

//   <Form.Group>
//     <Form.Row className="formControl">
//       <Col lg={7}>
//         <Form.Control
//           className="formControlValue"
//           size="lg"
//           type="number"
//           placeholder="0"
//           value={amount}
//           onChange={(event) => {
//             setAmount(event.target.value);
//           }}
//         ></Form.Control>
//       </Col>
//     </Form.Row>
//   </Form.Group>

//   <Container>
//     <Row className="resultValue justify-content-lg-center">
//       <Col lg="auto">
//         <div>Result: {result}</div>
//       </Col>
//     </Row>
//   </Container>

// <Container>
//   <Row className="buttonValue">
//     <Col lg={8}>
//       <Button size="lg" variant="success" type="submit" block>
//         <b>Calculate the money</b>
//       </Button>
//     </Col>
//   </Row>
// </Container>
// </form>
// );
// }

export default Calculator;
