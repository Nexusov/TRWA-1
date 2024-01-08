import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.css';

const Form = ({ handleStudentSubmit, handleTeacherSubmit, handleGroupSubmit }) => {
	const navigate = useNavigate();

	return (
		<>
			<h1 className={styles.title}>Добавить студента</h1>
			<form
				className={styles.form}
				onSubmit={(e) => handleStudentSubmit(e, () => navigate('/'))}
			>
				<Input name='fio' placeholder='ФИО' type='text' required />
				<Input name='group' placeholder='Группа' type='text' required />
				<Button type='submit'>Добавить</Button>
			</form>
			<h1 className={styles.title}>Добавить преподавателя</h1>
			<form
				className={styles.form}
				onSubmit={(e) => handleTeacherSubmit(e, () => navigate('/'))}
			>
				<Input name='name' placeholder='Имя' type='text' required />
				<Button type='submit'>Добавить</Button>
			</form>
			<h1 className={styles.title}>Добавить группу</h1>
			<form
				className={styles.form}
				onSubmit={(e) => handleGroupSubmit(e, () => navigate('/'))}
			>
				<Input name='groupName' placeholder='Группа' type='text' required />
				<Button type='submit'>Добавить</Button>
			</form>
		</>
	);
};

export default Form;
