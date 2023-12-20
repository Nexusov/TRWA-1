<template>
  <input
    class="input"
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :required="required"
    autocomplete="off"
  />
</template>

<script>
export default {
  props: {
    name: String,
    placeholder: String,
    type: String,
    required: Boolean
  },
};
</script>

<style scoped>
.input {
  height: 70px;
  width: 75%;
  border-radius: 11px;
  border: 1px solid gray;

  &:focus {
    transform: scaleX(1.01);
    transition: all 0.25s;
  }
}
</style>
