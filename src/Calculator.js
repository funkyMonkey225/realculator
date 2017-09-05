import React, { Component } from 'react';
import Display from "./Display.js";
import Numbers from "./Numbers.js";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            display: "0"
        }
    }

    _clearHandler = (value) => {
        this.setState({
            display: "0"
        })
    }

    _numberHandler = (num) => {
        var newDisplay = this.state.display;
        if (this.state.display === "0") {
            newDisplay = num;
        } else {
            newDisplay = newDisplay + num;
        }
        this.setState({
            display: newDisplay
        })
    }

  render() {
    return (
    <table>
        <Display display={this.state.display}/>
        <Numbers 
            numberHandler={this._numberHandler}
            clearHandler={this._clearHandler}
        />
    </table>
    );
  }
}

export default Calculator;