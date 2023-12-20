<template>
  <Header />
  <Loader v-if="loading" />
  <Table :users="users" :deleteData="deleteData" :loading="loading" />
  <Error v-if="error" :error="error" />
</template>

<script>
import { ref, onMounted } from 'vue';
import Table from '../../components/Table/Table.vue';
import Loader from '../../components/Loader/Loader.vue';
import Error from '../../components/Error/Error.vue';
import Header from '../../components/Header/Header.vue'

export default {
  components: {
    Header,
    Table,
    Loader,
    Error,
  },
  
  setup() {
    const users = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await fetch('http://localhost:3000/laba');
        if (!response.ok) {
          throw new Error('Network response was failed');
        }
        users.value = await response.json();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const deleteData = async (id) => {
      await fetch(`http://localhost:3000/laba/${id}`, {
        method: 'DELETE',
      });
      await fetchData();
    };

    onMounted(() => {
      fetchData();
    });

    return {
      users,
      loading,
      error,
      deleteData,
    };
  },
};
</script>
