import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from "../Assests/search.png";
import clear_icon from "../Assests/clear.png";
import cloud_icon from "../Assests/cloud.png";
import drizzle_icon from "../Assests/drizzle.png";
import humidity_icon from "../Assests/humidity.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import wind_icon from "../Assests/wind.png";




const WeatherApp = () => {

    let api_key = "f5e4e94748dcfd9d94e5dc6cb73db753"
    const [wicon, setWicon] = useState(cloud_icon);



    const search = async () => {
        const element = document.getElementsByClassName('cityinput');
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                const humidity = document.getElementsByClassName('humidity-percent');
                const wind = document.getElementsByClassName('wind-rate');
                const temperature = document.getElementsByClassName('weather-temp');
                const location = document.getElementsByClassName('weather-location');




                location[0].innerHTML = data.name;
                temperature[0].innerHTML = Math.round(data.main.temp) + " °C";
                wind[0].innerHTML = Math.round(data.wind.speed) + " km/h";
                humidity[0].innerHTML = data.main.humidity + " %";



                if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
                    setWicon(clear_icon);
                }
                else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
                    setWicon(cloud_icon);
                }
                else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
                    setWicon(drizzle_icon);
                }
                else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
                    setWicon(drizzle_icon);
                }
                else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
                    setWicon(rain_icon);
                }
                else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
                    setWicon(rain_icon);
                }
                else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
                    setWicon(snow_icon);
                }
                else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
                    setWicon(drizzle_icon);
                }
                else {
                    setWicon(clear_icon);
                }



            }
            )
            .catch((err) => {
                alert(`Sorry! We Don't have Data!`);

            })


    }



    return (

        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityinput' placeholder='search'></input>

                <div className='search-icon' onClick={() => { search() }}>
                    <img src={search_icon} alt=""></img>
                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} alt='' />

            </div>
            <div className="weather-temp">20 °C</div>
            <div className='weather-location'>Nepal</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity_icon} className='icon' alt=''></img>
                    <div className='data'>
                        <div className='humidity-percent'>60 %</div>
                        <div className='text'></div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} className='icon' alt=''></img>
                    <div className='data'>
                        <div className='wind-rate'>20 km/h</div>
                        <div className='text'></div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default WeatherApp
