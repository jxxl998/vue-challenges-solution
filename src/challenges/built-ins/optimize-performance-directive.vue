<script setup>
import { ref } from 'vue';

const count = ref(0);

setInterval(() => {
  count.value++;
}, 1000);
</script>

<template>
  <span>Make it not to change: {{ count }}</span>
</template>
