<template>
  <CommonSectionMain
    id="section-popular-products"
    elevation="0"
    title="Popular Products"
    subtitle="A subtitle to describe what is part of this section"
    card-background-colour="bg-white"
  >
    <template #section-content>Content</template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-popular-products',
  });
</script>
