import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		
		// const lat = cityData.city.coord.lat;
		// const lon = cityData.city.coord.lon;
		// ES6:
		const { lat, lon } = cityData.city.coord;
		
		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td><Chart data={temps}	color='red' units="K" /></td>
				<td><Chart data={pressure} color='blue' units="hPa" /></td>
				<td><Chart data={humidities} color='lime' units="%" /></td>
			</tr>
		)
	}
	
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}) {
	return {weather}; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
