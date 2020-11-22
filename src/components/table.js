import { TableHeader } from './elements/tableHeader';
import { ScheduleTableBody } from './elements/scheduleTableBody';
import { LoadTableBody } from './elements/loadTableBody';
import {
	SCHEDULE_TABLE_HEADER,
	SHIFTS,
	STAFF_MEMBERS,
	LOAD_TABLE_HEADER,
} from '../constants';

export const Table = () => {
	return (
		<>
			<table>
				<TableHeader name='Schedule Table' columns={SCHEDULE_TABLE_HEADER} />
				<ScheduleTableBody
					rowHeaders={SHIFTS}
					columnsNo={SCHEDULE_TABLE_HEADER.length}
					metaInfo={STAFF_MEMBERS}
				/>
			</table>

			<table>
				<TableHeader name='Load Table' columns={LOAD_TABLE_HEADER} />

				<LoadTableBody
					rowHeaders={STAFF_MEMBERS}
					columnsNo={LOAD_TABLE_HEADER.length}
				/>
			</table>
		</>
	);
};
