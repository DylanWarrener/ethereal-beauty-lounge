<template>
  <v-btn rounded="xl" :size="size" :class="['px-4', btnClass]" @click="clicked">
    <span v-if="text" :class="btnTextClass">{{ text }}</span>
    <v-icon v-if="icon" :icon="icon" :class="[iconClass]"></v-icon>
  </v-btn>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn',
    props: {
      /* Text */
      text: { type: String, required: true },

      /* CSS */
      btnClass: { type: String, required: false, default: 'bg-accent-2' },
      btnTextClass: { type: String, required: false },
      iconClass: { type: String, required: false },

      /* Icons */
      icon: { type: String, required: false },
    },
    emits: {
      clicked: null,
    },
    computed: {
      size(): string | undefined {
        let retVal: string | undefined = undefined;
        if (this.$vuetify.display.lgAndUp) {
          retVal = 'large';
        }
        if (this.$vuetify.display.xlAndUp) {
          retVal = 'x-large';
        }
        return retVal;
      },
    },
    methods: {
      clicked(): void {
        this.$emit('clicked');
      },
    },
  });
</script>
