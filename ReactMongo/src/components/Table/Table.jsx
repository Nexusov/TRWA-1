/* eslint-disable react/prop-types */

import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import styles from './Table.module.css';

const Table = ({ users, deleteData, loading }) => {
	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.tableWrapper}>
			<table>
				<thead>
					<tr className={styles.tableRow}>
						<th className={styles.tableTitle}>ФИО</th>
						<th className={styles.tableTitle}>Группа</th>
						<th className={styles.tableTitle}>Действие</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<>
							<tr key={user._id} className={styles.tableRow}>
								<td className={styles.tableCell}>{user.fio}</td>
								<td className={styles.tableCell}>
									{user.group}
								</td>
								<td className={styles.tableCell}>
									<Button onClick={() => deleteData(user._id)}>
										Удалить
									</Button>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
