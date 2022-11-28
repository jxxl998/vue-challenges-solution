<script setup>
/**
 * Sometimes, we may want to set global CSS in the scoped component.
 *
 * https://cn.vuejs.org/api/sfc-css-features.html#scoped-css
 *
 * 使用全局选择器
 *
 * :global 伪类
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
/* 1 */
/* 使用伪类 */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>

<style>
/* 2 */
/* 全局样式 */
body {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
