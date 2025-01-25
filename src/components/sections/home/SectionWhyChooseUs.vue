<template>
  <CommonSectionMain
    id="section-why-choose-us"
    title="Why Choose Us?"
    subtitle="A subtitle to describe what is part of this section"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col style="border: 2px solid blue">Content</v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-why-choose-us',
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-2';
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
