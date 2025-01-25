<template>
  <CommonCard
    :id="id"
    :title="title"
    :subtitle="subtitle"
    :card-class="`${cardClass} ${cardBackgroundColour}`"
    :card-style="cardStyle"
    :container-class="`pa-3 ${containerClass}`"
    :container-style="containerStyle"
    :heading-row-class="headingRowClass"
    :heading-row-style="headingRowStyle"
    :heading-col-class="`mb-4 ${headingColClass}`"
    :heading-col-style="headingColStyle"
    :heading-class="`justify-center align-center ${headingClass}`"
    :heading-style="headingStyle"
    :heading-title-class="`text-center text-h4 text-sm-h3 text-xl-h2 ${headingTitleClass}`"
    :heading-title-style="headingTitleStyle"
    :heading-subtitle-class="`w-100 text-center text-h5 text-sm-h4 text-xl-h3 ${headingSubtitleClass}`"
    :heading-subtitle-style="headingSubtitleStyle"
    :content-row-class="contentRowClass"
    :content-row-style="contentRowStyle"
    :content-col-class="contentColClass"
    :content-col-style="contentColStyle"
    :content-class="contentClass"
    :content-style="contentStyle"
    :elevation="elevation"
  >
    <template #card-content>
      <v-container
        fluid
        :class="[`${sectionContentContainerClass}`]"
        :style="`border: 2px solid black; ${sectionContentContainerStyle}`"
      >
        <v-row
          dense
          :class="sectionContentRowClass"
          :style="`border: 2px solid red; ${sectionContentRowStyle}`"
        >
          <slot name="section-content"></slot>
        </v-row>
      </v-container>
    </template>
  </CommonCard>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-section-main',
    props: {
      /* Default attributes */
      id: { type: String, required: false },
      elevation: { type: String, required: false, default: '0' },

      /* Text */
      title: { type: String, required: true },
      subtitle: { type: String, required: false },

      /* CSS */
      cardClass: { type: String, required: false },
      cardStyle: { type: String, required: false },
      containerClass: { type: String, required: false },
      containerStyle: { type: String, required: false },
      headingRowClass: { type: String, required: false },
      headingRowStyle: { type: String, required: false },
      headingColClass: { type: String, required: false },
      headingColStyle: { type: String, required: false },
      headingTitleClass: { type: String, required: false },
      headingTitleStyle: { type: String, required: false },
      headingSubtitleClass: { type: String, required: false },
      headingSubtitleStyle: { type: String, required: false },
      headingClass: { type: String, required: false },
      headingStyle: { type: String, required: false },
      contentRowClass: { type: String, required: false },
      contentRowStyle: { type: String, required: false },
      contentColClass: { type: String, required: false },
      contentColStyle: { type: String, required: false },
      contentClass: { type: String, required: false },
      contentStyle: { type: String, required: false },
      cardBackgroundColour: { type: String, required: false },
      sectionContentContainerClass: { type: String, required: false },
      sectionContentContainerStyle: { type: String, required: false },
      sectionContentRowClass: { type: String, required: false },
      sectionContentRowStyle: { type: String, required: false },
    },
  });
</script>
