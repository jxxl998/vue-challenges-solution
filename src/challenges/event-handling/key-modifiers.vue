<script setup>
const onClick1 = () => {
  console.log('A');
};

const onCtrlClick = () => {
  console.log('onCtrlClick');
};

const onClick2 = () => {
  console.log('onClick2');
};
</script>

<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
  <button @click.ctrl="onClick1">onClick1</button>

  <!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
  <button @click.shift.exact="onCtrlClick">onCtrlClick</button>

  <!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
  <button @click.exact="onClick2">onClick2</button>
</template>
