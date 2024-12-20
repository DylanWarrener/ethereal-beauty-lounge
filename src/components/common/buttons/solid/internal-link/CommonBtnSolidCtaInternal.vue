<!-- Navigates the user within the same page, to a CTA section -->
<template>
  <v-btn variant="flat" class="bg-accent-2" :text="text"></v-btn>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-btn-solid-cta-internal',
    props: {
      text: { type: String, required: false },
    },
  });
</script>
