// Child.vue

<script setup>
/**
 * For this challenge, you'll use the Composition API: Lifecycle Hooks to complete the challenge.
 *
 * 组件卸载时清除计时器即可
 */
import { onMounted, inject, onUnmounted } from 'vue';

const timer = inject('timer');
const count = inject('count');

onMounted(() => {
  // The timer will work abnormally when the child component is toggled. Lets fix it.
  timer.value = window.setInterval(() => {
    count.value++;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div>
    <p>Child Component: {{ count }}</p>
  </div>
</template>
