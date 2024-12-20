<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        variant="outlined"
        :class="[isHovering ? 'text-accent-2' : '']"
        v-bind="props"
      >
        <span class="pr-2">{{ text }}</span>
        <v-icon :icon="icon"></v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-account',
    props: {
      text: { type: String, required: true },
      icon: { type: String, required: true },
    },
  });
</script>
