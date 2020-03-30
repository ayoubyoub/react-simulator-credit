import React, { Component } from "react";
import InputRange from "react-input-range";
import Show from "../show";

import "../../styles/main.css";
import "react-input-range/lib/css/index.css";

class Simulator extends Component {
  state = {
    amountValue: 5000,
    monthsValue: 6
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleMonthChange = value => {
    this.setState({ monthsValue: value });
  };

  render() {
    const { amountValue, monthsValue } = this.state;

    return (
      <div className="App">
        <h4>Montant (en DH) {amountValue}</h4>
        <InputRange
          step={100}
          maxValue={200000}
          minValue={1000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Durée (en mois) {monthsValue}
        </h4>
        <InputRange
          step={6}
          maxValue={84}
          minValue={6}
          value={monthsValue}
          onChange={this.handleMonthChange}
        />
        <Show months={monthsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Simulator;
