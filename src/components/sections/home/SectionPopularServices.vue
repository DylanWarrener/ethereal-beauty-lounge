<template>
  <CommonSectionMain
    id="section-popular-services"
    title="Popular Services"
    subtitle="A subtitle to describe what is part of this section"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard title="Our Mission" heading-title-class=""></CommonCard>
      </v-col>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard title="Our Services"></CommonCard>
      </v-col>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard title="Our Team"></CommonCard>
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-popular-services',
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-4';
      },
      textTitleColour(): string {
        return 'text-section-4-title';
      },
      textSubtitleColour(): string {
        return 'text-section-4-subtitle';
      },
    },
  });
</script>
