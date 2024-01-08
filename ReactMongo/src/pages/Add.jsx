import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

const addStudent = async (studentData) => {
	await fetch('http://localhost:3000/laba', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(studentData),
	});
};

const addTeacher = async (teacherData) => {
	await fetch('http://localhost:3001/teachers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(teacherData),
	});
};

const addGroup = async (groupData) => {
	await fetch('http://localhost:3002/groups', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(groupData),
	});
};

const handleStudentSubmit = async (event, onSuccess) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const newStudent = {
		fio: formData.get('fio'),
		group: formData.get('group'),
	};

	try {
		await addStudent(newStudent);
		onSuccess();
	} catch (error) {
		console.error('Ошибка при добавлении студента:', error);
	}
};

const handleTeacherSubmit = async (event, onSuccess) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const newTeacher = {
		name: formData.get('name'),
	};

	try {
		await addTeacher(newTeacher);
		onSuccess();
	} catch (error) {
		console.error('Ошибка при добавлении преподавателя:', error);
	}
};

const handleGroupSubmit = async (event, onSuccess) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const newGroup = {
		groupName: formData.get('groupName'),
	};

	try {
		await addGroup(newGroup);
		onSuccess();
	} catch (error) {
		console.error('Ошибка при добавлении группы:', error);
	}
};

const Add = () => {
	return (
		<>
			<Header />
			<Form
				handleStudentSubmit={handleStudentSubmit}
				handleTeacherSubmit={handleTeacherSubmit}
				handleGroupSubmit={handleGroupSubmit}
			/>
		</>
	);
};

export default Add;
