<template>
  <v-btn rounded="xl" variant="flat" class="bg-accent-2" @click.stop="clicked">
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn',
    props: {
      text: { type: String, required: true },
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
