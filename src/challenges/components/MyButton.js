import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'MyButton',
  emit: ['custom-click'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    return () =>
      h(
        'button',
        {
          disabled: props.disabled,
          onClick: () => emit('custom-click'),
        },
        slots.default?.()
      );
  },
});
