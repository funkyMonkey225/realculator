import React, { Component } from 'react';
import Display from "./Display.js";
import Numbers from "./Numbers.js";
import utils from './utils.js';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            current: "0",
            display: "0"
        }
    }

    _backHandler = (value) => {
        var {display, current, total} = this.state;
        if (display[display.length -1] === " ") {
            display = display.slice(0, -3);
            current = current.slice(0, -3);
        } else {
            display = display.slice(0, -1);
            current = current.slice(0, -1);
            let arr = current.split(" ");
            if (arr.length === 1) {
                total = Number(display);
            }
        }

        if (display === "") {
            total = 0;
            display = "0";
            current = "0"
        }

        console.log(total);

        this.setState ({
            display: display,
            current: current,
            total: total
        })
    }

    _resultHandler = (value) => {
        var {display, total, current} = this.state;
        total = utils.operation(current, total);
        current = String(total);
        display = String(total);
        this.setState ({
            total: total,
            current: current,
            display: display
        })
    }

    _clearHandler = (value) => {
        this.setState({
            display: "0",
            current: "",
            total: 0
        })
    }

    _numberOperationHandler = (val) => {
        var {display, current, total} = this.state;
        if (display === "0" && val !== "x" && val !== "-" && val !== "/" && val !== "+") {
            current = val;
            total = Number(val);
            display = val;
        } else if (val === "x" || val === "-" || val === "/" || val === "+") {
            total = utils.operation(current, total);
            current = String(total);
            current = current + " " + val + " ";
            display = display + " " + val + " "; 
        } else {
            current = current + val;
            display = display + val;
        }

        this.setState({
            current: current,
            display: display,
            total: total
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
            backHandler={this._backHandler}
        />
    </table>
    );
  }
}

export default Calculator;