import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

const addData = async (newData) => {
	await fetch('http://localhost:3000/laba', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newData),
	});
};


const handleSubmit = async (event, onSuccess) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newData = {
    fio: formData.get('fio'),
    group: formData.get('group'),
  };

  try {
    await addData(newData);
    onSuccess(); 
  } catch (error) {
    console.error('Ошибка при добавлении данных:', error);
  }
};

const Add = () => {

	return (
		<>
			<Header />
			<Form handleSubmit={handleSubmit}/>
		</>
	);
};

export default Add;
