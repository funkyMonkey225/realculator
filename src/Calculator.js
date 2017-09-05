import React, { Component } from 'react';
import Display from "./Display.js";
import Numbers from "./Numbers.js";
import utils from './utils.js';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            display: "0"
        }
    }

    _resultHandler = (value) => {
        console.log(value);
    }

    _clearHandler = (value) => {
        this.setState({
            display: "0",
            total: 0
        })
    }

    _numberOperationHandler = (val) => {
        var {display: newDisplay, num: newNum} = this.state;
        if (newDisplay === "0" && val !== "x" && val !== "-" && val !== "/" && val !== "+") {
            newDisplay = val;
        } else {
            newDisplay = newDisplay + val;
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
            numberHandler={this._numberOperationHandler}
            clearHandler={this._clearHandler}
            resultHandler={this._resultHandler}
        />
    </table>
    );
  }
}

export default Calculator;