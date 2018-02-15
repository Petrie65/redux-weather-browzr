import axios from 'axios';

// This is a public key... not very reliable
const weather_API = 'bf1210455c4549380c43122b3b1e4dcc';
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${weather_API}`; // ES6 syntax

/*
api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22
*/

// Define action types as constants
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
	const url = `${rootURL}&q=${cityName},us`; // We're making the country code static US
	const request = axios.get(url); // This is async. The action only gets created on promise resolve
	// axios - Promise based HTTP client for the browser and node.js

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
