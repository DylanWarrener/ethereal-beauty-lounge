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

        let retVal: string = '';
        if (this.isMobile) {
          retVal = '32';
        } else {
          retVal = '64';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
    },
  });
</script>
