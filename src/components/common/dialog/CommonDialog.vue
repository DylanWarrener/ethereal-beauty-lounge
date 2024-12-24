<template>
  <Teleport to="body">
    <v-dialog v-model="drawer">
      <slot name="dialog-content"></slot>
    </v-dialog>
  </Teleport>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-dialog',
    props: {
      drawer: { type: Boolean, required: true },
    },
  });
</script>
