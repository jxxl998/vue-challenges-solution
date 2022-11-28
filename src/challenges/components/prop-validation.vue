<script setup>
/**
 * Please validate the type prop of the Button component.
 *
 * It's accept the following strings primary | ghost | dashed | link | text | default only and the default value is default.
 *
 * solution: https://cn.vuejs.org/guide/components/props.html#prop-validation
 */
defineProps({
  type: {
    type: String,
    // 自定义类型校验函数
    validator(value) {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(
        value
      );
    },
    default: 'default',
  },
});
</script>

<template>
  <button>Button</button>
</template>
