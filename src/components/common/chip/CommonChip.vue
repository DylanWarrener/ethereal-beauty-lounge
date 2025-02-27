<template>
  <v-chip :color="color" :density="density"></v-chip>
</template>

<script lang="ts">
  import type { VSelect } from 'vuetify/components';

  type Density = VSelect['$props']['density'];

  export default defineComponent({
    name: 'common-select-input',
    props: {
      label: { type: String, required: true },
      color: { type: String, required: false, default: 'cta' },
      density: {
        type: String as PropType<Density>,
        required: false,
      },
    },
    computed: {
      /* Css */
      display(): string {
        return this.$vuetify.display.name;
      },
    },
  });
</script>
