import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

/* GOALS
	1. We're gonna rely on Redux to fetch the data for us. React components will only be used to disply data
		and to indicate that we should fetch data
	2. We will use a 3rd party library to draw charts
	3. We will have a Redux application where the state will change significantly over time. (We will be gathering
		state over time)
*/

export default class App extends Component {
  render() {
    return (
		<div>
			<SearchBar />
			<WeatherList />
		</div>
    );
  }
}
