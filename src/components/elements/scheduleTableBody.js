import { useContext } from 'react';
import { dayLoadContext } from '../../context';

export const ScheduleTableBody = ({ columnsNo, rowHeaders, metaInfo }) => {
	const change = useContext(dayLoadContext).handleChangeLoad;

	return (
		<>
			<tbody>
				{rowHeaders.map((rowName, index) => {
					let tableEle = [];
					for (let i = 0; i < columnsNo - 1; i++) {
						let prev;
						tableEle.push(
							<td key={i}>
								<select
									onClick={(e) => {
										prev = e.target.value;
									}}
									onChange={(e) => {
										let splits = e.target.value.split(',');
										let prevSplits = prev.split(',');
										if (
											splits[0] == prevSplits[0] &&
											splits[1] == prevSplits[1]
										) {
											change(`${prev},-1`);
											change(`${e.target.value},1`);
										} else if (e.target.value == '-1') change(`${prev},-1`);
										else change(`${e.target.value},1`);
									}}
								>
									<option style={{ padding: '20' }} key={`${i}0`} value={-1}>
										Unassigned
									</option>
									{metaInfo.map((person) => (
										<option
											style={{ padding: '20' }}
											key={`${i}${person}`}
											value={`${i},${index},${person}`}
										>
											{person}
										</option>
									))}
								</select>
							</td>
						);
					}

					return (
						<tr key={rowName} style={{ border: '1px red solid' }}>
							<td style={{ fontWeight: 'bold' }}>{rowName}</td>
							{tableEle}
						</tr>
					);
				})}
			</tbody>
		</>
	);
};
