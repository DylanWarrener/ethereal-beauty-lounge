<template>
  <v-select clearable :label="label"></v-select>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-select-input',
    props: {
      label: { type: String, required: true },
    },
  });
</script>
