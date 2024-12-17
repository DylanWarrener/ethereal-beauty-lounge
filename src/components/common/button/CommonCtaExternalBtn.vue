<!-- Used to navigate the user to another page, to a CTA section -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn variant="flat" class="bg-accent-2" v-bind="props">
        CTA Button external link
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
