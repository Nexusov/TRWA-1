<template>
  <form ref="form" class="form" @submit.prevent="handleFormSubmit">
    <Input name="fio" placeholder="ФИО" type="text" required />
    <Input name="group" placeholder="Группа" type="text" required />
    <Button type="submit">Добавить</Button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from '../Input/Input.vue'
import Button from '../Button/Button.vue';

export default {
  components: {
    Input,
    Button
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const form = ref(null);

    const handleFormSubmit = () => {
      if (form.value) {
        const formData = new FormData(form.value);
        emit('submit', formData);
      }
    };

    return {
      form,
      handleFormSubmit,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 600px) {
    margin: 0;
  }
}

</style>
