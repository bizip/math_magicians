import React, { useState } from 'react';
import classes from './Calculator.module.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [calcData, setcalcData] = useState({
    inputData: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (InPutValue) => {
    setcalcData(({ inputData }) => ({ inputData: calculate(inputData, InPutValue.target.value) }));
  };
  return (
    <div className={classes.calc__grid}>
      <div className={`${classes.calc__btn} ${classes.btn__1} ${classes.gray}`}>
        <h1 id="output" className={classes.white}>
          {calcData.inputData.total || ''}
          {calcData.inputData.operation || ''}
          {calcData.inputData.next || ''}
        </h1>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          value="AC"
          onClick={handleClick}
        >
          AC
        </button>
      </div>

      <div className={classes.calc__btn}>
        <button type="button" onClick={handleClick} value="+/-">+/-</button>
      </div>

      <button type="button" onClick={handleClick} value="%">%</button>
      <div className={`${classes.calc__btn} ${classes.chockolate}`}>
        <button
          type="button"
          onClick={handleClick}
          value="/"
        >
          /
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="7"
        >
          7
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="8"
        >
          8
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="9"
        >
          9
        </button>
      </div>
      <div className={`${classes.calc__btn} ${classes.chockolate}`}>
        <button
          type="button"
          onClick={handleClick}
          value="x"
        >
          *
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="4"
        >
          4
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="5"
        >
          5
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="6"
        >
          6
        </button>
      </div>

      <div className={`${classes.calc__btn} ${classes.chockolate}`}>
        <button
          type="button"
          onClick={handleClick}
          value="-"
        >
          -
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="1"
        >
          1
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="2"
        >
          2
        </button>
      </div>
      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="3"
        >
          3
        </button>
      </div>
      <div className={`${classes.calc__btn} ${classes.chockolate}`}>
        <button
          type="button"
          onClick={handleClick}
          value="+"
        >
          +
        </button>
      </div>
      <div className={`${classes.calc__btn} ${classes.zero}`}>
        <button
          type="button"
          onClick={handleClick}
          value="0"
        >
          0
        </button>
      </div>

      <div className={classes.calc__btn}>
        <button
          type="button"
          onClick={handleClick}
          value="."
        >
          .
        </button>
      </div>

      <div className={`${classes.calc__btn} ${classes.chockolate}`}>
        <button
          type="button"
          onClick={handleClick}
          value="="
        >
          =
        </button>
      </div>

    </div>
  );
};

export default Calculator;
