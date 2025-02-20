<template>
  <v-icon :icon="icon" :size="iconSize"></v-icon>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-icon',
    props: {
      icon: { type: String, required: true },
      size: { type: String, required: false },
    },
    computed: {
      /* Properties */
      iconSize(): string {
        if (this.size) return this.size;
        switch (this.$vuetify.display.name) {
          case 'xs':
            return '32';
          default:
            return '64';
        }
      },
    },
  });
</script>
