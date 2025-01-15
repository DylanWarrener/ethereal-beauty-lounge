<template>
  <v-text-field :label="label">
    <template #append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-text-field>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-text-field',
    props: {
      /* Text */
      label: { type: String, required: true },
    },
  });
</script>
