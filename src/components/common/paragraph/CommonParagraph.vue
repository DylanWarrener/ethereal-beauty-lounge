<template>
  <p class="text-body-1 text-sm-h6 text-lg-h5">{{ text }}</p>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-paragraph',
    props: {
      text: { type: String, required: true },
    },
  });
</script>
