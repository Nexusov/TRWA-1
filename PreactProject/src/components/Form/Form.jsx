/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Form.module.css'

const Form = ({ handleSubmit }) => {
	const navigate = useNavigate();

	const handleFormSubmit = async (event) => {
		handleSubmit(event, () => navigate('/')); 
	};
	

	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<Input name='fio' placeholder='ФИО' type='text' required />
			<Input name='group' placeholder='Группа' required type='text' />
			<Button type='submit'>
        Добавить
      </Button>
		</form>
	);
};

export default Form;
