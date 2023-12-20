<template>
  <div class="imgContainer">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
};
</script>

<style scoped>
.imgContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    margin: 0 20px 50px 20px;
  }

  img {

    border-radius: 10px;
    box-shadow: 20px 20px 60px #00000052,
      -20px -20px 60px #1a1a1a4f;
  }
}
</style>
