<!-- Navigates the user within the same page, to a CTA section -->
<template>
  <ClientOnly>
    <v-hover>
      <template #default="{ isHovering, props }">
        <CommonBtn
          variant="flat"
          :btn-class="isHovering ? 'bg-primary-1' : 'bg-accent-darken-2'"
          :text="text"
          :to="to"
          :disabled="disabled"
          v-bind="props"
          @clicked="$emit('clicked')"
        ></CommonBtn>
      </template>
    </v-hover>
  </ClientOnly>
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
