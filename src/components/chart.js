import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function calcAverage(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	
	return(
			<Sparklines 
				data={props.data}
				width={200}
				height={120}>

				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />

				<div>{calcAverage(props.data)} ({props.units})</div>
			</Sparklines>
	);
}
