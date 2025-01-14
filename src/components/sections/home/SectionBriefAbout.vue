<template>
  <CommonSectionMain
    id="section-our-story"
    title="Our Story"
    subtitle="A subtitle to describe what is part of the about section"
  >
    <template #section-content>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard></CommonCard>
      </v-col>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard></CommonCard>
      </v-col>
      <v-col cols="12" lg="4" style="border: 4px solid blue">
        <CommonCard></CommonCard>
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-brief-about',
  });
</script>
