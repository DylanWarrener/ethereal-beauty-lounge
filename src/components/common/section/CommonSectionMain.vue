<template>
  <v-container style="border: 2px solid black">
    <!-- Section title + subtitle +/ info -->
    <v-row v-if="title && subtitle" style="border: 2px solid red">
      <!-- Section title -->
      <v-col v-if="title" cols="12" style="border: 2px solid blue">
        <h2 class="text-center">{{ title }}</h2>
      </v-col>

      <!-- Section subtitle and/or info -->
      <v-col v-if="subtitle" cols="12" style="border: 2px solid blue">
        <h3 class="text-center">{{ subtitle }}</h3>
      </v-col>
    </v-row>

    <v-row style="border: 2px solid red">
      <v-col cols="12" style="border: 2px solid blue">
        <slot name="section-content"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-section-main',
    props: {
      title: { type: String, required: true },
      subtitle: { type: String, required: false },
    },
  });
</script>
