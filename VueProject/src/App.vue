<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <Loader />
      </template>
    </suspense>
  </router-view>
</template>

<script>
import Loader from './components/Loader/Loader.vue';

export default {

};
</script>
