import React from 'react';
import Calculator from '../components/Calculator';

const Calc = () => (
  <div>
    <section className="calc">
      <div className="welcome">
        {' '}
        <h1>Lets do some math</h1>
      </div>
      <div className="calculator">
        <Calculator />
        {' '}
      </div>

    </section>
  </div>
);

export default Calc;
