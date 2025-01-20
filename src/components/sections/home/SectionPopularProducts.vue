<template>
  <CommonSectionMain
    id="section-popular-products"
    elevation="0"
    title="Popular Products"
    subtitle="A subtitle to describe what is part of this section"
    card-background-colour="bg-white"
    container-class="pa-2"
    section-content-container-class="pa-0"
    section-content-container-style="border: 4px solid black"
    section-content-row-style="border: 4px solid red"
  >
    <template #section-content>
      <v-col class="pa-0" style="border: 4px solid blue">Col</v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-popular-products',
  });
</script>
