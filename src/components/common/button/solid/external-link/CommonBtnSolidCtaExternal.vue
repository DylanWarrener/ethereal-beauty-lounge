<!-- Navigates the user to another page, to a CTA section -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn variant="flat" class="bg-accent-2" v-bind="props">
        <span class="pr-2">{{ text }}</span>
        <v-icon
          icon="$arrowRight"
          :class="['icon-transition', { 'icon-transform': isHovering }]"
          style="transform: translateX(100deg)"
        ></v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-solid-cta-external',
    props: {
      text: { type: String, required: true },
    },
  });
</script>

<style lang="scss" scoped></style>
