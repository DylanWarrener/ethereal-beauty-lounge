<template>
  <CommonSectionMain
    id="section-recent-reviews"
    title="Reviews"
    subtitle="A subtitle for the reviews section"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content></template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-recent-reviews',
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-7';
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
