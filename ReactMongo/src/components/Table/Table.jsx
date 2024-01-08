/* eslint-disable react/prop-types */

import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import styles from './Table.module.css';

const Table = ({ students, teachers, groups, deleteData, loading }) => {
	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.tableWrapper}>
			<h1 className={styles.title}>Список студентов</h1>
			<table>
				<thead>
					<tr className={styles.tableRow}>
						<th className={styles.tableTitle}>ФИО</th>
						<th className={styles.tableTitle}>Группа</th>
						<th className={styles.tableTitle}>Действие</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<>
							<tr key={student._id} className={styles.tableRow}>
								<td className={styles.tableCell}>{student.fio}</td>
								<td className={styles.tableCell}>
									{student.group}
								</td>
								<td className={styles.tableCell}>
									<Button
										onClick={() => deleteData(3000, 'laba', student._id)}
									>
										Удалить
									</Button>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
			<h1 className={styles.title}>Список преподавателей</h1>
			<table>
				<thead>
					<tr className={styles.tableRow}>
						<th className={styles.tableTitle}>ФИО</th>
						<th className={styles.tableTitle}>Действие</th>
					</tr>
				</thead>
				<tbody>
					{teachers.map((teacher) => (
						<>
							<tr key={teacher.id} className={styles.tableRow}>
								<td className={styles.tableCell}>{teacher.name}</td>
								<td className={styles.tableCell}>
									<Button
										onClick={() => deleteData(3001, 'teachers', teacher.id)}
									>
										Удалить
									</Button>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
			<h1 className={styles.title}>Список групп</h1>
			<table>
				<thead>
					<tr className={styles.tableRow}>
						<th className={styles.tableTitle}>Группа</th>
						<th className={styles.tableTitle}>Действие</th>
					</tr>
				</thead>
				<tbody>
					{groups.map((group) => (
						<>
							<tr key={group.id} className={styles.tableRow}>
								<td className={styles.tableCell}>{group.groupName}</td>
								<td className={styles.tableCell}>
									<Button
										onClick={() => deleteData(3002, 'groups', group._id)}
									>
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
