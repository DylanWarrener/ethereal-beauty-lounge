<template>
  <CommonSectionMain
    id="section-why-choose-us"
    elevation="0"
    title="Why Choose Us?"
    subtitle="A subtitle to describe what is part of this section"
    :card-background-colour="backgroundColour"
  >
    <template #section-content>Content</template>
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
        return 'text-section-2-title';
      },
      textSubtitleColour(): string {
        return 'text-section-2-subtitle';
      },
    },
  });
</script>
