import { useEffect, useState } from 'preact/hooks';

import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchData = () => {
    setLoading(true);
    setError(null); 
    fetch('http://localhost:3000/laba')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was failed');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError('Failed to load data', error); 
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    await fetch(`http://localhost:3000/laba/${id}`, {
      method: 'DELETE',
    });
    fetchData();
  };


  return (
    <>
      <Header />
      {loading && <Loader />}
      <Table users={users} deleteData={deleteData} loading={loading} />
      {error && <Error error={error}/>}
    </>
  );
};

export default Index;
