<template>
  <Header />
  <Form @submit="handleSubmit" />
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Form from '../../components/Form/Form.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Header,
    Form,
  },
  setup() {
    const router = useRouter();
    const addData = async (newData) => {
      await fetch('http://localhost:3000/laba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
    };
    
    const handleSubmit = async (formData) => {
      const newData = {
        fio: formData.get('fio'),
        group: formData.get('group'),
      };

      try {
        await addData(newData);
        router.push('/');
      } catch (error) {
        console.error('Ошибка при добавлении данных:', error);
      }
    };

    return {
      handleSubmit,
    };
  },
};
</script>
