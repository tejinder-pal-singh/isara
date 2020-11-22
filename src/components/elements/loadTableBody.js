import { useContext } from 'react';
import { dayLoadContext } from '../../context';

export const LoadTableBody = ({ columnsNo, rowHeaders }) => {
	const { loadForDay, total } = useContext(dayLoadContext);

	return (
		<tbody>
			{rowHeaders.map((rowName) => {
				let tableEle = [];
				loadForDay[rowName].map((ld, index) => {
					tableEle.push(<td key={`${ld}${index}`}>{ld}</td>);
				});
				return (
					<tr key={rowName}>
						<td style={{ fontWeight: 'bold' }}>{rowName}</td>
						{tableEle}
						<td>{total[rowName]}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

{
	/* {rowHeaders.map((rowName, index) => {
    let tableEle = [];
    for (let i = 0; i < columnsNo; i++) {
        tableEle.push({
            // map(load=><td>{load}</td>)
        });
    }

    console.log(tableEle);
    tableEle.push(<td>{total[index]}</td>);

    <tr key={rowName} style={{ border: '1px red solid' }}>
        <td style={{ fontWeight: 'bold' }}>{rowName}</td>
        {tableEle}
    </tr>; 
})}*/
}
