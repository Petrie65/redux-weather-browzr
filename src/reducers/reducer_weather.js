import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.push(action.payload.data); = dont do this!!! Never set state equals something
			// return state.concat([action.payload.data]); creates a new array that contains the old stuff AND the new stuff
			return [ action.payload.data, ...state ] // same as concat above. The payload data goes to the front of the array
	}
	
	return state;
}
