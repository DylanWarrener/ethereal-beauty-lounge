<template>
  <v-form fast-fail validate-on="lazy" class="w-100 h-100">
    <v-container fluid class="pa-0 d-flex flex-column">
      <slot name="form-content"></slot>
    </v-container>
  </v-form>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-form',
    emits: {
      'submitting-form': null,
    },
    methods: {
      submit_clickHandler(): void {
        this.$emit('submitting-form');
      },
    },
  });
</script>
