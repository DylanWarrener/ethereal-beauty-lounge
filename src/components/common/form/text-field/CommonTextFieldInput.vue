<template>
  <v-text-field clearable :label="label">
    <template #append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-text-field>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-text-field-input',
    props: {
      label: { type: String, required: true },
    },
    computed: {
      computed_validation_emailRules(): any {
        return [this.method_validation_isEmailFormatValid];
      },
    },
    methods: {
      method_validation_isEmailFormatValid(): any[] {
        return [];
      },
    },
  });
</script>
