import React, { Component } from 'react';


class Numbers extends Component {
    constructor(props) {
        super(props);
    }

    _resultHandler = (e) => {
        this.props.resultHandler(e.target.innerText);
    }

    _clearHandler = (e) => {
        this.props.clearHandler(e.target.innerText);
    }

    _numberOperationHandler = (e) => {
        console.log(e.target.innerText);
        this.props.numberHandler(e.target.innerText);
    }

  render() {
    return (
        <tbody>
            <tr>
                <td colSpan="3" onClick={this._clearHandler}>clear</td>
                <td onClick={this._operationHandler}>/</td>
            </tr>
            <tr>
                <td onClick={this._numberOperationHandler}>7</td>
                <td onClick={this._numberOperationHandler}>8</td>
                <td onClick={this._numberOperationHandler}>9</td>
                <td onClick={this._numberOperationHandler}>x</td>
            </tr>
            <tr>
                <td onClick={this._numberOperationHandler}>4</td>
                <td onClick={this._numberOperationHandler}>5</td>
                <td onClick={this._numberOperationHandler}>6</td>
                <td onClick={this._numberOperationHandler}>-</td>
            </tr>
            <tr>
                <td onClick={this._numberOperationHandler}>1</td>
                <td onClick={this._numberOperationHandler}>2</td>
                <td onClick={this._numberOperationHandler}>3</td>
                <td onClick={this._numberOperationHandler}>+</td>
            </tr>
            <tr>
                <td colSpan="2" onClick={this._numberOperationHandler}>0</td>
                <td>.</td>
                <td onClick={this._resultHandler}>=</td>
            </tr>
        </tbody>
    );
  }
}

export default Numbers;