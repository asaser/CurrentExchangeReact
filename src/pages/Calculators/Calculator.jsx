import React, { useState, useEffect } from "react";
import { Grid, TextField, Select, MenuItem } from "@mui/material";
import {
  HeaderText,
  ParagraphHeaderText,
  Item,
  SpanPaperText,
  StyledPaperContainer,
  ParagraphAmountBaseCurrency,
  ParagraphResult,
} from "../../styles/CalculatorStyles";

function Calculator() {
  const [exchangeData, setExchangeData] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
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
    <>
      <Grid container>
        <Grid item xs>
          <HeaderText>Exchange Currency</HeaderText>
          <ParagraphHeaderText>
            Currency Converter & Choice of 170 countries
          </ParagraphHeaderText>
        </Grid>
      </Grid>
      <StyledPaperContainer>
        <Grid container spacing={5}>
          <Grid item sm={12} md={4}>
            <Item>
              <SpanPaperText>Amount</SpanPaperText>
              <TextField
                id="outlined-number"
                type="number"
                placeholder="0"
                data-testid="amountTextField"
                style={{ width: "100%" }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onFocus={() => {
                  if (amount === 0) {
                    setAmount("");
                  }
                }}
              />
            </Item>
          </Grid>
          <Grid item sm={6} md={4}>
            <Item>
              <SpanPaperText>From</SpanPaperText>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "100%" }}
                label="From"
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
              >
                {exchangeData.rates &&
                  Object.keys(exchangeData.rates).map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
              </Select>
            </Item>
          </Grid>
          <Grid item sm={6} md={4}>
            <Item>
              <SpanPaperText>To</SpanPaperText>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ width: "100%" }}
                label="To"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
              >
                {exchangeData.rates &&
                  Object.keys(exchangeData.rates).map((currency) => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
              </Select>
            </Item>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <div>
              <ParagraphAmountBaseCurrency>
                {amount} {baseCurrency} =
              </ParagraphAmountBaseCurrency>
              <ParagraphResult>
                Result: {convertedAmount} {targetCurrency}
              </ParagraphResult>
            </div>
          </Grid>
        </Grid>
      </StyledPaperContainer>
    </>
  );
}

export default Calculator;
