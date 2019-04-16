<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>

    <!-- Toggleable content within slot: -->
    <slot v-if="open">
      <!-- If no content is passed in this shows: -->
      <!-- <div>Default content</div> -->
    </slot>

  </div>
</template>


<script>
  export default {
    name: 'CollapsibleSection',
    data() {
      return { open: true };
    },
  };
</script>

<style scoped>
  .header {
    background-color: grey;
    padding: 3px;
    cursor: pointer;
  }
</style>
