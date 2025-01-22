<!-- Used to navigate the user within the same page, to a non-CTA section (no icon) -->
<template>
  <ClientOnly>
    <v-hover>
      <template #default="{ isHovering, props }">
        <CommonBtn
          v-bind="props"
          variant="outlined"
          :btn-class="`${isHovering ? 'bg-cta-hover text-cta-hover' : 'text-cta'} ${btnClass}`"
          btn-text-class="text-black"
          icon-class="ml-2 icon-transition text-black"
          :text="text"
          :to="to"
          :disabled="disabled"
          @clicked="$emit('clicked')"
        ></CommonBtn>
      </template>
    </v-hover>
  </ClientOnly>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-outlined-cta-internal',
    props: {
      /* Text */
      text: { type: String, required: true },

      /* CSS */
      btnClass: { type: String, required: false },

      /* Component props */
      to: { type: String, required: false },
      disabled: { type: Boolean, required: false, default: false },
    },
    emits: {
      clicked: null,
    },
  });
</script>
