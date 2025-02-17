<!-- Navigates the user to another page, to a CTA section -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <CommonBtn
        :variant="`${isHovering ? 'outlined' : 'flat'}`"
        :btn-class="`${isHovering ? 'bg-cta-hover text-cta' : ''}`"
        :btn-text-class="`${isHovering ? 'text-cta' : ''}`"
        :icon-class="`ml-2 icon-transition ${isHovering ? 'icon-transform' : ''}`"
        :text="text"
        :icon="icon"
        :to="to"
        :disabled="disabled"
        v-bind="props"
      ></CommonBtn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-solid-cta-external',
    props: {
      text: { type: String, required: true },
      icon: { type: String, required: false, default: '$arrowRight' },
      to: { type: String, required: false },
      disabled: { type: Boolean, required: false, default: false },
    },
  });
</script>
