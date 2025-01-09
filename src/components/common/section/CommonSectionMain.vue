<template>
  <v-container fluid :class="[containerClass]" :style="containerStyle">
    <!-- Section headings -->
    <v-row dense :class="[headingRowClass]" style="headingRowStyle">
      <!-- Title -->
      <v-col cols="12" :class="[titleColClass]" :style="titleColStyle">
        <h2 class="text-h2 text-center">{{ title }}</h2>
      </v-col>

      <!-- Subtitle and/or info -->
      <v-col
        v-if="subtitle"
        cols="12"
        :class="[subtitleColClass]"
        :style="subtitleColStyle"
      >
        <h3 class="text-h3 text-center">{{ subtitle }}</h3>
      </v-col>
    </v-row>

    <!-- Section content -->
    <v-row dense :class="[contentRowClass]" :style="contentRowStyle">
      <v-col cols="12" :class="[contentColClass]" :style="contentColStyle">
        <slot name="section-content"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-section-main',
    props: {
      /* Text */
      title: { type: String, required: true },
      subtitle: { type: String, required: false },

      /* CSS */
      // v-container
      containerClass: { type: String, required: false },
      containerStyle: { type: String, required: false },

      // v-row
      headingRowClass: { type: String, required: false },
      headingRowStyle: { type: String, required: false },
      contentRowClass: { type: String, required: false },
      contentRowStyle: { type: String, required: false },

      // v-col
      titleColClass: { type: String, required: false },
      titleColStyle: { type: String, required: false },
      subtitleColClass: { type: String, required: false },
      subtitleColStyle: { type: String, required: false },
      contentColClass: { type: String, required: false },
      contentColStyle: { type: String, required: false },
    },
  });
</script>
