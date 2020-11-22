const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const STAFF_MEMBERS = ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7'];

const SHIFTS = [
	'Morning UpStairs',
	'Morning Down Stairs',
	'Morning Parking Lot',
	'Lunch A',
	'Lunch B',
	'Lunch C',
	'Lunch D',
	'Afternoon Up Stairs',
	'Afternoon Down Stairs',
	'Afternoon Parking Lot',
];

const SCHEDULE_TABLE_HEADER = ['', ...DAYS];
const LOAD_TABLE_HEADER = ['Staff Member', ...DAYS, 'Totals'];

let record = {
	X1: [0, 0, 0, 0, 0],
	X2: [0, 0, 0, 0, 0],
	X3: [0, 0, 0, 0, 0],
	X4: [0, 0, 0, 0, 0],
	X5: [0, 0, 0, 0, 0],
	X6: [0, 0, 0, 0, 0],
	X7: [0, 0, 0, 0, 0],
};

let totalTime = {
	X1: 0,
	X2: 0,
	X3: 0,
	X4: 0,
	X5: 0,
	X6: 0,
	X7: 0,
};

// let totalTime = {
// 	X1: [0, 0],
// 	X2: [0, 0],
// 	X3: [0, 0],
// 	X4: [0, 0],
// 	X5: [0, 0],
// 	X6: [0, 0],
// 	X7: [0, 0],
// };
export {
	SCHEDULE_TABLE_HEADER,
	LOAD_TABLE_HEADER,
	STAFF_MEMBERS,
	SHIFTS,
	record,
	totalTime,
};
