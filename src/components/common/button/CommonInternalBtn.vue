<!-- Used to navigate the user within the same page, to a non-CTA section (no icon) -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        variant="outlined"
        :class="[isHovering ? 'bg-accent-2' : '']"
        v-bind="props"
      >
        Non-CTA Button internal link
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({});
</script>

<style lang="scss" scoped></style>
