<template>
  <v-btn
    rounded="xl"
    variant="flat"
    :class="['px-4', btnClass]"
    @click.stop="clicked"
  >
    {{ text }}
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
