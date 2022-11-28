<script setup lang="ts">
import { h, ref } from 'vue';

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 *
 * solution: https://vuejs.org/guide/extras/render-function.html#functional-components
 */
const ListComponent = (props, { slots, emit, attrs }) => {
  console.log('props', props);

  const { list, activeIndex } = props;

  const listVNodes = list.map((item, index) => {
    return h(
      'li',
      {
        key: index,
        style: {
          color: index === activeIndex ? 'red' : null,
        },
        onClick: () => emit('toggle', index),
      },
      item.name
    );
  });

  return h(
    'ul',
    {
      style: {
        listStyleType: 'none',
      },
    },
    listVNodes
  );
};

// key point!!
// If the props option is not specified, then the props object passed to the function will contain all attributes, the same as attrs.
// The prop names will not be normalized to camelCase unless the props option is specified.

// before
/**
 * {
    "list": [
        {
            "name": "John"
        },
        {
            "name": "Doe"
        },
        {
            "name": "Smith"
        }
    ],
    "active-index": 0
}
 */

ListComponent.props = ['list', 'activeIndex'];

// after
/**
 * {
    "list": [
        {
            "name": "John"
        },
        {
            "name": "Doe"
        },
        {
            "name": "Smith"
        }
    ],
    "activeIndex": 0
}
 */

const list = [
  {
    name: 'John',
  },
  {
    name: 'Doe',
  },
  {
    name: 'Smith',
  },
];

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
