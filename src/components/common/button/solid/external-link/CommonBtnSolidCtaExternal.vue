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
        :disabled="disabled"
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
      disabled: { type: Boolean, required: false, default: false },
    },
  });
</script>

<style lang="scss" scoped></style>
