import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/Home';
import Calc from './pages/Calc';
import Quote from './pages/Quote';
import NavBar from './layouts/NavBar';

const App = () => (
  <div className="app">
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calc />} />
        <Route exact path="/Quotes" element={<Quote />} />
      </Routes>
    </Router>
  </div>
);

export default App;
