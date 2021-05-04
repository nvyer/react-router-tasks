import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectedCity from './SelectedCity';
import CitiesForm from './CitiesForm';
import './weather_tracker.css';

const WeatherTracker = () => (
    <Router>
        <Switch>
            <Route path="/weatherTracker/" exact children={<CitiesForm />} />
            <Route path="/:city" children={<SelectedCity />} />
        </Switch>
    </Router>
);

export default WeatherTracker;