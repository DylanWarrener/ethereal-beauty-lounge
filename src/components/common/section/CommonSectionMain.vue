<template>
  <ClientOnly>
    <CommonCard :id="id" :title="title" :card-class="cardClass"></CommonCard>
  </ClientOnly>
  <!-- <v-container fluid :class="[containerClass]" :style="containerStyle">
    <v-row dense :class="[headingRowClass]" style="headingRowStyle">
      <v-col cols="12" :class="[titleColClass]" :style="titleColStyle">
        <h2 class="text-h2 text-center">{{ title }}</h2>
      </v-col>
      <v-col
        v-if="subtitle"
        cols="12"
        :class="[subtitleColClass]"
        :style="subtitleColStyle"
      >
        <h3 class="text-h3 text-center">{{ subtitle }}</h3>
      </v-col>
    </v-row>

    <v-row dense :class="[contentRowClass]" :style="contentRowStyle">
      <v-col cols="12" :class="[contentColClass]" :style="contentColStyle">
        <slot name="section-content"></slot>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-section-main',
    props: {
      /* Text */
      title: { type: String, required: true },
      subtitle: { type: String, required: false },

      /* CSS */
      id: { type: String, required: true },
      cardBackgroundColour: {
        type: String,
        required: false,
        default: 'bg-secondary-2',
      },
    },
    computed: {
      /* CSS */
      cardClass(): string {
        let retVal: string = `${this.cardBackgroundColour}`;
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>
