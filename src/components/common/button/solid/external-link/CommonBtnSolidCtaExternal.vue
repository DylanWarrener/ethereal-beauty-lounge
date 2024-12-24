<!-- Navigates the user to another page, to a CTA section -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        class="bg-accent-2"
        variant="flat"
        rounded="xl"
        size="large"
        :to="to"
        v-bind="props"
      >
        <span class="pr-1">{{ text }}</span>
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
      to: { type: String, required: false },
    },
  });
</script>

<style lang="scss" scoped></style>
