<template>
  <div className="notFoundContainer">
    <Image src="https://cdn.discordapp.com/attachments/561591566045544449/1103756352171544688/404.webp" alt="404 Not Found" />
  </div>
</template>

<script>
import Image from '../../components/Image/Image.vue';

export default {
  components: { Image }
};
</script>

<style scoped>
.notFoundContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)),
    linear-gradient(77.81deg, rgb(255, 0, 200), rgb(41, 13, 224));
  background-size: 200% 200%;
  animation: background-animation 3s linear infinite;

  @keyframes background-animation {
    0% {
      background-position: 10% 0%
    }

    50% {
      background-position: 91% 100%
    }

    100% {
      background-position: 10% 0%
    }
  }
}
</style>
