<!-- Used to navigate the user to another page, to a non-CTA section (icon) -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        variant="outlined"
        :class="[isHovering ? 'bg-accent-2' : '']"
        v-bind="props"
      >
        Non-CTA Button external link
        <v-icon
          icon="$arrowRight"
          :class="['icon-transition', isHovering ? 'ml-4' : 'ml-2']"
        ></v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({});
</script>

<style lang="scss" scoped></style>
