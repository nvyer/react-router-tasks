import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import MemoryGame from './components/memory_game/MemoryGame';
import WeatherTracker from './components/Weather_tracker/Weather_tracker';
import Tags from './components/Tags/Tags';
import ColorPicker from './components/Color_picker/ColorPicker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <h1>Homework</h1>
        <ol>
          <li>
            <Link className='link' to='/memoryGame'>Memory game</Link>
          </li>
          <li>
            <Link className='link' to='/weatherTracker'>Weather Tracker</Link>
          </li>
          <li>
            <Link className='link' to='/tags'>Tags</Link>
          </li><li>
            <Link className='link' to='/colorPicker'>Color Picker</Link>
          </li>
        </ol>
        <hr></hr>
      </div>

      <Switch>
        <Route exact path='/memoryGame'>
          <MemoryGame />
        </Route>
        <Route exact path='/weatherTracker'>
          <WeatherTracker />
        </Route>
        <Route exact path='/tags'>
          <Tags />
        </Route>
        <Route exact path='/colorPicker'>
          <ColorPicker />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
