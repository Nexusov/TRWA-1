<template>
  <div class="loader"></div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%; 
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #474bff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner 1s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(1turn);
  }
}
</style>
