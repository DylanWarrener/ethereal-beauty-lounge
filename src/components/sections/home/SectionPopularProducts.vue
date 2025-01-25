<template>
  <CommonSectionMain
    id="section-popular-products"
    title="Popular Products"
    subtitle="A subtitle to describe what is part of this section"
    container-class="pa-2"
    section-content-container-class="pa-0"
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
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },
    },
  });
</script>
