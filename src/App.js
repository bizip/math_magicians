import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Calc from './pages/Calc';
import Quote from './pages/Quote';

const App = () => (
  <div className="app">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calculator" element={<Calc />} />
      <Route exact path="/Quotes" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
