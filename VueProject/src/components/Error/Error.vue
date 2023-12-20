<template>
  <div class="error">
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: String
  },
};
</script>

<style scoped>
.error {
  color: red;
  text-align: center;
}
</style>
