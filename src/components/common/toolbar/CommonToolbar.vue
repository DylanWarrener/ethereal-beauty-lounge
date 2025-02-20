<template>
  <v-toolbar :class="[toolbarClass]" :color="cardColor">
    <slot name="toolbar-logo"></slot>
    <slot name="toolbar-prepend-items"></slot>

    <v-spacer></v-spacer>

    <slot name="toolbar-items"></slot>

    <v-spacer></v-spacer>

    <slot name="toolbar-append-items"></slot>
  </v-toolbar>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'common-toolbar',
    props: {
      toolbarClass: { type: String, required: false },
      title: { props: String, required: false },
      cardColor: { props: String, required: false, default: 'transparent' },
    },
  });
</script>
