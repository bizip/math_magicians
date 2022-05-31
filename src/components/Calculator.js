import React from 'react';
import classes from './Calculator.module.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className={classes.calc__grid}>
        <div className={`${classes.calc__btn} ${classes.btn__1} ${classes.gray}`}><h1 id="output">0</h1></div>
        <div className={classes.calc__btn}><h1>AC</h1></div>

        <div className={classes.calc__btn}><h1>+/-</h1></div>

        <div className={classes.calc__btn}><h1>%</h1></div>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}><h1>%</h1></div>
        <div className={classes.calc__btn}><h1 id="7">7</h1></div>
        <div className={classes.calc__btn}><h1 id="8">8</h1></div>
        <div className={classes.calc__btn}><h1 id="9">9</h1></div>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}><h1>*</h1></div>
        <div className={classes.calc__btn}><h1 id="4">4</h1></div>
        <div className={classes.calc__btn}><h1 id="5">5</h1></div>
        <div className={classes.calc__btn}><h1 id="6">6</h1></div>

        <div className={`${classes.calc__btn} ${classes.chockolate}`}><h1>-</h1></div>
        <div className={classes.calc__btn}><h1 id="1">1</h1></div>
        <div className={classes.calc__btn}><h1 id="2">2</h1></div>
        <div className={classes.calc__btn}><h1 id="3">3</h1></div>
        <div className={`${classes.calc__btn} ${classes.chockolate}`}><h1>+</h1></div>
        <div className={`${classes.calc__btn} ${classes.zero}`}><h1>0</h1></div>

        <div className={classes.calc__btn}><h1>.</h1></div>

        <div className={`${classes.calc__btn} ${classes.chockolate}`}><h1>=</h1></div>

      </div>
    );
  }
}

export default Calculator;
