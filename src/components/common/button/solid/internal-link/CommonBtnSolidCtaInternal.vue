<!-- Navigates the user within the same page, to a CTA section -->
<template>
  <CommonBtn
    variant="flat"
    btn-class="bg-accent-darken-2"
    :text="text"
    :to="to"
    :disabled="disabled"
    @clicked="$emit('clicked')"
  ></CommonBtn>
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
