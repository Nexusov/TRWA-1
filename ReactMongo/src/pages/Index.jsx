import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

const Index = () => {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [groups, setGroups] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null) 

  const fetchStudents = () => {
    setLoading(true)
    setError(null)
    fetch('http://localhost:3000/laba') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was failed')
        }
        return response.json()
      })
      .then((data) => {
        setStudents(data)
      })
      .catch((error) => {
        setError('Failed to load data', error)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const fetchTeachers = () => {
    setLoading(true);
    setError(null); 
    fetch('http://localhost:3001/teachers') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was failed');
        }
        return response.json();
      })
      .then((data) => {
        setTeachers(data); 
      })
      .catch((error) => {
        setError('Failed to load data', error); 
      })
      .finally(() => {
        setLoading(false); 
      })
  };

  const fetchGroups = () => {
    setLoading(true);
    setError(null); 
    fetch('http://localhost:3002/groups') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was failed');
        }
        return response.json();
      })
      .then((data) => {
        setGroups(data); 
      })
      .catch((error) => {
        setError('Failed to load data', error); 
      })
      .finally(() => {
        setLoading(false); 
      })
  }

  useEffect(() => {
    fetchStudents()
    fetchTeachers()
    fetchGroups()
  }, [])

  const deleteData = async (port, db, id) => {
    await fetch(`http://localhost:${port}/${db}/${id}`, {
      method: 'DELETE',
    });
    fetchStudents()
    fetchTeachers()
    fetchGroups()
  }

  return (
    <>
      <Header />
      {loading && <Loader />}
      <Table students={students} teachers={teachers} groups={groups} deleteData={deleteData} loading={loading} />
      {error && <Error error={error}/>}
    </>
  );
};

export default Index;
