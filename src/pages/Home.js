import React from 'react';
import NavBar from '../layouts/NavBar';
import './Basic.css';

const Home = () => (
  <div>
    <NavBar />
    <section className="home">
      <h1>Welcome to ourPage</h1>
      <p>
        Bacon ipsum dolor amet venison spare ribs biltong, turducken kevin shank tenderloin.
        Leberkas beef ribs pork, meatloaf shank drumstick pork loin. Filet mignon spare ribs
        corned beef beef chicken bresaola strip steak pig turducken venison shoulder t-bone
        biltong. Pig chislic strip steak, andouille spare ribs ham drumstick venison pork
        belly buffalo t-bone brisket. Pancetta andouille pork ribeye turducken.
      </p>

      <p>
        Leberkas beef ribs pork, meatloaf shank drumstick pork loin. Filet mignon spare
        ribs corned beef beef chicke bresaola strip steak pig turducken venison shoulder
        t-bone biltong. Pig chislic strip steak, andouille spare ribs
        ham drumstick venison pork belly buffalo t-bone brisket. Pancetta andouille pork
        ribeye turducken.
      </p>
    </section>
  </div>
);

export default Home;
