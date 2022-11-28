<script setup>
/**
 * Sometimes, we may want to set global CSS in the scoped component.
 */
</script>

<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>
p {
  font-size: 20px;
  color: red;
  text-align: center;
  line-height: 50px;
}

/* Make it work */
body {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
