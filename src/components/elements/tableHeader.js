export const TableHeader = ({ name, columns }) => {
	// console.log(columns);
	return (
		<>
			<caption>{name}</caption>
			<thead>
				{columns.map((columnName, index) => (
					<th key={index}>{columnName}</th>
				))}
			</thead>
			{/* </table> */}
			{/* <tr col-span={2}>{name}</tr>
			{/* <h2>heade</h2> */}
			{/* <p>{name}</p> */}
		</>
	);
};
