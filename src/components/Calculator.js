import React from 'react';
import classes from './Calculator.module.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((curentSate) => calculate({
      total: curentSate.total,
      next: curentSate.next,
      operation: curentSate.operation,
    }, e.target.value));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={classes.calc__grid}>
        <div className={`${classes.calc__btn} ${classes.btn__1} ${classes.gray}`}>
          <h1 id="output" className={classes.white}>
            {total || ''}
            {operation || ''}
            {next || ''}
          </h1>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            value="AC"
            onClick={this.handleClick}
          >
            AC
          </button>
        </div>

        <div className={classes.calc__btn}>
          <button type="button" onClick={this.handleClick} value="+/-">+/-</button>
        </div>

        <button type="button" onClick={this.handleClick} value="%">%</button>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="/"
          >
            /
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="7"
          >
            7
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="8"
          >
            8
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="9"
          >
            9
          </button>
        </div>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="x"
          >
            *
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="4"
          >
            4
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="5"
          >
            5
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="6"
          >
            6
          </button>
        </div>

        <div className={`${classes.calc__btn} ${classes.chockolate}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="-"
          >
            -
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="1"
          >
            1
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="2"
          >
            2
          </button>
        </div>
        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="3"
          >
            3
          </button>
        </div>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="+"
          >
            +
          </button>
        </div>
        <div className={`${classes.calc__btn} ${classes.zero}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="0"
          >
            0
          </button>
        </div>

        <div className={classes.calc__btn}>
          <button
            type="button"
            onClick={this.handleClick}
            value="."
          >
            .
          </button>
        </div>

        <div className={`${classes.calc__btn} ${classes.chockolate}`}>
          <button
            type="button"
            onClick={this.handleClick}
            value="="
          >
            =
          </button>
        </div>

      </div>
    );
  }
}

export default Calculator;
