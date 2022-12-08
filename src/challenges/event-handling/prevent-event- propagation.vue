<script setup lang="ts">
/**
 * In this challenge,you should make the click event's propagation to be stopped
 *
 * event modifier
 *  .stop
 *  .prevent
 *  .self
 *  .capture
 *  .once
 *  .passive
 *
 * https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
 */
const click1 = () => {
  console.log('click1');
};

const click2 = () => {
  console.log('click2');
};
</script>

<template>
  <div @click="click1()">
    <div @click.stop="click2()">click me</div>
  </div>
</template>
