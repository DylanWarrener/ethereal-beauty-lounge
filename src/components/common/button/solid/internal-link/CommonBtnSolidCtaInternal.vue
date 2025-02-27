<!-- Navigates the user within the same page, to a CTA section -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <CommonBtn
        :is-icon="false"
        :variant="`${isHovering ? 'outlined' : 'flat'}`"
        :btn-class="`${isHovering ? 'bg-cta-hover text-cta' : ''}`"
        :btn-text-class="`${isHovering ? 'text-cta' : ''}`"
        :text="text"
        :to="to"
        :disabled="disabled"
        v-bind="props"
        @clicked="$emit('clicked')"
      ></CommonBtn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-solid-cta-internal',
    props: {
      /* Text */
      text: { type: String, required: true },

      /* Component props */
      to: { type: String, required: false },
      disabled: { type: Boolean, required: false, default: false },
    },
    emits: {
      clicked: null,
    },
  });
</script>
