import { useState } from 'react';
import { dayLoadContext } from './context';
import { validators } from './validators';
import { Table } from './components/table';
import { record, totalTime } from './constants';
import './App.css';

function App() {
	let [loadForDay, setLoadForDay] = useState(record);

	// total is used to keep track for total number of loads over per person
	let [total, setTotal] = useState(totalTime);

	const handleChangeLoad = (payload) => {
		// payload would be in the form of "day,slot,person,value",
		// so, splitting it to have different values acc to parameters respectively
		let changeFactors = payload.split(',');

		//validation
		let error = validators(changeFactors, loadForDay, total);
		if (error) {
			console.log('Invalid Entry');
			return;
		}
		// changing the load for that particular person accordingly
		// incrementing the load for that particular person
		setLoadForDay(
			{ ...loadForDay },
			(loadForDay[changeFactors[2]][changeFactors[0]] += parseInt(
				changeFactors[3]
			))
		);

		// updating value of total according to the payload
		//supports unassignment also
		{
			total[changeFactors[2]] = loadForDay[changeFactors[2]].reduce(
				(accumulator, currentValue) => accumulator + currentValue
			);
		}
		setTotal(
			{ ...total },
			(total[changeFactors[2]] = loadForDay[changeFactors[2]].reduce(
				(accumulator, currentValue) => accumulator + currentValue
			))
		);
	};

	return (
		//rendering element with context to centralize the handleChangeLoad, loadForDay, total through out the app
		<div className='App'>
			<dayLoadContext.Provider value={{ handleChangeLoad, loadForDay, total }}>
				<Table name='Schedule' />
			</dayLoadContext.Provider>
		</div>
	);
}

export default App;
