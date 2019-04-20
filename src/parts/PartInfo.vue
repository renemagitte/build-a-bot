<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>


<script>

import parts from '../data/parts';

export default {
  name: 'PartInfo',
  computed: {
    part() {
      // Get variables out of the route (defined in router/index.js)
      const { partType, id } = this.$route.params;
      // +id makes the string to a number so we can compare the two:
      return parts[partType].find(part => part.id === +id);
    }
  },
};
</script>
