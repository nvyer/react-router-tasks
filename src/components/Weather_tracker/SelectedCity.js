import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SelectedCity() {
    let { city } = useParams();
    const [weather, setWeather] = useState({ temp: 0, humidity: 0, maxTemp: 0, minTemp: 0 });
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d93da1ec68ba5770af2db5ad738e157c`;

    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setWeather({
                    temp: res.main.temp,
                    humidity: res.main.humidity,
                    maxTemp: res.main.temp_max,
                    minTemp: res.main.temp_min
                });
            })
            .catch(e => console.log(e.message))
    }, [baseURL])


    return (
        <div className='weather-info-container'>
            <h1 className='city-name'>City : {city}</h1>
            {
                weather.temp ? <div >
                    <p className='weather-info'>Temp : {weather.temp} °F</p>
                    <p className='weather-info'>Humidity : {weather.humidity} %</p>
                    <p className='weather-info'>Maximun Temperature : {weather.maxTemp} °F</p>
                    <p className='weather-info'>Minimum Temperature : {weather.minTemp} °F</p>
                </div> : null
            }
        </div>
    )
}