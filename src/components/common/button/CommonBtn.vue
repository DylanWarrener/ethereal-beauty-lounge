<template>
  <v-btn rounded="xl" :class="['px-4', btnClass]" @click.stop="clicked">
    {{ text }}
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
      iconClass: { type: String, required: false },

      /* Icons */
      icon: { type: String, required: false },
    },
    emits: {
      clicked: null,
    },
    methods: {
      clicked(): void {
        this.$emit('clicked');
      },
    },
  });
</script>
