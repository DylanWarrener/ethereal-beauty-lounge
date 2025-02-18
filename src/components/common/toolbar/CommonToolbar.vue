<template>
  <v-toolbar
    class="px-2 px-sm-4"
    :color="`${cardColor ? cardColor : 'transparent'}`"
  >
    <slot name="toolbar-logo"></slot>

    <slot name="toolbar-title">
      <div class="text-body-1">
        {{ title }}
      </div>
    </slot>

    <slot name="toolbar-items"></slot>

    <slot name="toolbar-options"></slot>
  </v-toolbar>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'common-toolbar',
    props: {
      title: { props: String, required: false },
      cardColor: { props: String, required: false },
    },
  });
</script>
