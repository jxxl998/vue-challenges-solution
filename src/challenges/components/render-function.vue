<script setup>
/**
 * For this challenge, you need use h render function to implement a component.
 *
 * Note:
 * You should make sure that the props are passed correctly,
 * event is triggered correctly and the slot content is rendered correctly.
 */
import MyButton from './MyButton.js';

const onClick = () => {
  console.log('onClick');
};
</script>

<template>
  <MyButton :disabled="false" @custom-click="onClick"> my button </MyButton>
</template>
