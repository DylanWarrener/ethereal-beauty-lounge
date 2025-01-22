<template>
  <CommonSectionMain
    id="section-popular-products"
    elevation="0"
    title="Popular Products"
    subtitle="A subtitle to describe what is part of this section"
    container-class="pa-2"
    section-content-container-class="pa-0"
    section-content-container-style="border: 4px solid black"
    section-content-row-style="border: 4px solid red"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col class="pa-0" style="border: 4px solid blue">Col</v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-popular-products',
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-5';
      },
      textTitleColour(): string {
        return 'text-section-5-title';
      },
      textSubtitleColour(): string {
        return 'text-section-5-subtitle';
      },
    },
  });
</script>
