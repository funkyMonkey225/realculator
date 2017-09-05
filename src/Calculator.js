import React, { Component } from 'react';
import Display from "./Display.js";
import Numbers from "./Numbers.js";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "0"
        }
    }

    _numberHandler = (num) => {
        var newDisplay = this.state.display + num;
        this.setState({
            display: newDisplay
        })
    }

  render() {
    return (
    <table>
        <Display display={this.state.display}/>
        <Numbers numberHandler={this._numberHandler}/>
    </table>
    );
  }
}

export default Calculator;