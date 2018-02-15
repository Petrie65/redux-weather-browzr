import React, { Component } from 'react';

import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			term: ""
		}
		
		// Make sure the input handles has the correct context
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	
	onSubmit(event) {
		event.preventDefault()
		
		// Fetch weather
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		});
	}
	
	render() {
		return (
			<div>
				<form 
					className="input-group"
					onSubmit={this.onSubmit}>
					<input 
						className="form-control" 
						placeholder="Get a five-day forecast in your favorite cities"
						value={this.state.term}
						onChange={this.onInputChange} />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
			</div>
		)
	}
	
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// null because this component is not listening for state change
// mapDispatchToProps always gets passed on as the 2nd argument
export default connect(null, mapDispatchToProps)(SearchBar);
