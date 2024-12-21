<!-- Used to navigate the user within the same page, to a non-CTA section (no icon) -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        variant="outlined"
        :class="[isHovering ? 'text-accent-2' : '']"
        v-bind="props"
        :text="text"
      ></v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-outlined-cta-internal',
    props: {
      text: { type: String, required: true },
    },
  });
</script>
