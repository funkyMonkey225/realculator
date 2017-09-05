import React, { Component } from 'react';


class Numbers extends Component {
    constructor(props) {
        super(props);
    }

    _clearHandler = (e) => {
        console.log(e.target.innerText);
    }

    _numberHandler = (e) => {
        console.log(e.target.innerText);
        this.props.numberHandler(e.target.innerText);
    }

    _operationHandler = (e) => {
        console.log(e.target.innerText);
    }

  render() {
    return (
        <tbody>
            <tr>
                <td colSpan="3" onClick={this._clearHandler}>clear</td>
                <td onClick={this._operationHandler}>/</td>
            </tr>
            <tr>
                <td onClick={this._numberHandler}>7</td>
                <td onClick={this._numberHandler}>8</td>
                <td onClick={this._numberHandler}>9</td>
                <td onClick={this._operationHandler}>x</td>
            </tr>
            <tr>
                <td onClick={this._numberHandler}>4</td>
                <td onClick={this._numberHandler}>5</td>
                <td onClick={this._numberHandler}>6</td>
                <td onClick={this._operationHandler}>-</td>
            </tr>
            <tr>
                <td onClick={this._numberHandler}>1</td>
                <td onClick={this._numberHandler}>2</td>
                <td onClick={this._numberHandler}>3</td>
                <td onClick={this._operationHandler}>+</td>
            </tr>
            <tr>
                <td colSpan="2" onClick={this._numberHandler}>0</td>
                <td>.</td>
                <td>=</td>
            </tr>
        </tbody>
    );
  }
}

export default Numbers;