<script setup>
// import dynamicCssValuesVue from './css-features/dynamic-css-values.vue';
// import globalCssVue from './css-features/global-css.vue';

// import functionalComponentVue from './components/functional-component.vue';
import renderFunctionVue from './components/render-function.vue';

import preventEventPropagation from './event-handling/prevent-event- propagation.vue';
import keyModifiers from './event-handling/key-modifiers.vue';
</script>

<template>
  <h3>keyModifiers</h3>
  <component :is="keyModifiers" />
</template>

<style scoped>
h3 {
  color: salmon;
}
</style>
