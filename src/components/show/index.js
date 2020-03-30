import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./item";

class Show extends Component {
  state = {
    APR: 0.05
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (1000 < amount && amount < 30000) {
      this.setState({ APR: 0.03 });
    }
    if (30000 < amount && amount < 50000) {
      this.setState({ APR: 0.05 });
    }
    if (50000 < amount && amount < 100000) {
      this.setState({ APR: 0.07 });
    }
    if (100000 < amount && amount < 200000) {
      this.setState({ APR: 0.1 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, months } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount;
    const monthlyRepayment = totalOwed / months;

    return <p>{Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{Math.round(this.state.APR * 100)}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <Item 
          func={this.percentageAPR()} 
          text="TAUX" 
        />
        <Item
          func={this.calculateMonthlyRepayment()}
          text="Mensualités (en DH)"
        />
      </div>
    );
  }
}

Show.propTypes = {
  months: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Show;
