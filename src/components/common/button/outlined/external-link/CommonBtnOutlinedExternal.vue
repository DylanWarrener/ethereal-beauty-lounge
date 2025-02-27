<!-- Navigates the user to another page, to a non-CTA section (icon) -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <CommonBtn
        v-bind="props"
        variant="outlined"
        icon="$arrowRight"
        btn-text-class="pr-2"
        :class="[isHovering ? 'text-accent-2' : '', btnClass]"
        :is-icon="false"
        :icon-class="`ml-2 icon-transition ${isHovering ? 'icon-transform' : ''}`"
        :text="text"
        :to="to"
        :disabled="disabled"
        @clicked="$emit('clicked')"
      ></CommonBtn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-outlined-cta-external',
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
