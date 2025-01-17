<template>
  <ClientOnly>
    <CommonCard
      :id="id"
      :title="title"
      :subtitle="subtitle"
      :card-class="`${isMobile ? 'pa-2' : 'pa-4'} ${cardBackgroundColour}`"
      :card-style="cardStyle"
      :container-class="containerClass"
      :container-style="containerStyle"
      :heading-row-class="headingRowClass"
      :heading-row-style="headingRowStyle"
      :heading-col-class="`mb-8 ${headingColClass}`"
      :heading-col-style="headingColStyle"
      :heading-class="headingClass"
      :heading-style="headingStyle"
      :heading-title-class="`text-center text-h4 text-sm-h3 text-xl-h2 ${headingTitleClass}`"
      :heading-title-style="headingTitleStyle"
      :heading-title-tag="headingTitleTag"
      :heading-subtitle-class="`text-center text-h5 text-sm-h4 text-xl-h3 ${headingSubtitleClass}`"
      :heading-subtitle-style="`${isMobile ? 'width: 100%;' : 'width: 75%; justify-self: center;'} ${headingSubtitleStyle}`"
      :heading-subtitle-tag="headingSubtitleTag"
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
          :class="`pa-0 ${sectionContentContainerClass}`"
          :style="sectionContentContainerStyle"
        >
          <v-row
            dense
            :class="sectionContentRowClass"
            :style="sectionContentRowStyle"
          >
            <slot name="section-content"></slot>
          </v-row>
        </v-container>
      </template>
    </CommonCard>
  </ClientOnly>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-section-main',
    props: {
      /* Default attributes */
      id: { type: String, required: false },
      elevation: { type: String, required: false },

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
    computed: {
      /* CSS */
      headingTitleTag(): string {
        let retVal: string[] = [];
        if (this.isMobile) {
          retVal.push('h4');
        } else if (this.$vuetify.display.smAndUp) {
          retVal.push('h3');
        } else if (this.$vuetify.display.lgAndUp) {
          retVal.push('h2');
        }
        return retVal.join(' ');
      },
      headingSubtitleTag(): string {
        let retVal: string[] = [];
        if (this.isMobile) {
          retVal.push('h5');
        } else if (this.$vuetify.display.smAndUp) {
          retVal.push('h4');
        } else if (this.$vuetify.display.lgAndUp) {
          retVal.push('h3');
        }
        return retVal.join(' ');
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>
