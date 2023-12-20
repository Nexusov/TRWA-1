<template>
  <Loader v-if="loading" />
  <div v-else class="tableWrapper">
    <table>
      <thead>
        <tr class="tableRow">
          <th class="tableTitle">ФИО</th>
          <th class="tableTitle">Группа</th>
          <th class="tableTitle">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id" class="tableRow">
          <td class="tableCell">{{ user.fio }}</td>
          <td class="tableCell">{{ user.group }}</td>
          <td class="tableCell">
            <Button @click="() => deleteData(user._id)">
              Удалить
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from '../Button/Button.vue';
import Loader from '../Loader/Loader.vue';

export default {
  components: {
    Button,
    Loader,
  },
  props: {
    users: Array,
    deleteData: Function,
    loading: Boolean,
  },
};
</script>

<style scoped>
table {
  width: 100%;
  position: relative;
  padding: 0 20px;

  th {
    max-width: 100px;
    text-align: center;
    word-wrap: break-word;
    word-break: keep-all;
    font-size: 25px;
  }

  td {
    text-align: center;
    word-wrap: break-word;
    word-break: keep-all;
    max-width: 100px;
    font-size: 20px;
  }

  @media (max-width: 600px) {

    th,
    td {
      max-width: none;
      font-size: 12px;
    }
  }
}


@media (max-width: 600px) {
  .tableRow {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
  }

  .tableTitle {
    width: 100%;
    font-size: 14px;
  }

  .tableCell {
    width: 100%;
  }

  table {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
}
</style>
