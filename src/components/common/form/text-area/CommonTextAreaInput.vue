<template>
  <v-textarea clearable :label="label"></v-textarea>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-text-area-input',
    props: {
      label: { type: String, required: true },
    },
  });
</script>
