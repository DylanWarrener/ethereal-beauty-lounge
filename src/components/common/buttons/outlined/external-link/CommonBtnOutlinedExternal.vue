<!-- Navigates the user to another page, to a non-CTA section (icon) -->
<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        variant="outlined"
        :class="[isHovering ? 'text-accent-2' : '']"
        v-bind="props"
      >
        <span class="pr-2">{{ text }}</span>
        <v-icon
          icon="$arrowRight"
          :class="['icon-transition', { 'icon-transform': isHovering }]"
        ></v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-outlined-cta-external',
    props: {
      text: { type: String, required: true },
    },
  });
</script>
