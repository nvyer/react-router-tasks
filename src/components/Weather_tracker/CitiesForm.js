import React from "react";
import { Link } from "react-router-dom";

import { cities } from '../../service/data';

const CitiesForm = () => (
    <div className='city-form-container'>
        <h1 className='title'>Cities</h1>
        <p className='instructions'>Click to know the weather in </p>
        <div>
            {cities.map((el, i) => {
                return (
                    <span key={i}>
                        <Link className='city' to={el}>{el}</Link>
                    </span>
                )
            })}
        </div>
    </div>
);

export default CitiesForm;