<template>
  <ClientOnly>
    <CommonCard
      :id="id"
      :title="title"
      :subtitle="subtitle"
      :card-class="sectionCardClass"
      :card-style="cardStyle"
      :container-class="sectionContainerClass"
      :container-style="containerStyle"
      :heading-row-class="headingRowClass"
      :heading-row-style="headingRowStyle"
      :heading-col-class="`mb-8 ${headingColClass}`"
      :heading-col-style="headingColStyle"
      :heading-title-class="`text-center text-h4 text-sm-h3 text-xl-h2 ${headingTitleClass}`"
      :heading-subtitle-class="`text-center text-h5 text-sm-h4 text-xl-h3 ${headingSubtitleClass}`"
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
          :class="`pa-0 ${cardContentContainerClass}`"
          :style="cardContentContainerClass"
        >
          <v-row :class="cardContentRowClass" :style="cardContentRowStyle">
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
      headingSubtitleClass: { type: String, required: false },
      contentRowClass: { type: String, required: false },
      contentRowStyle: { type: String, required: false },
      contentColClass: { type: String, required: false },
      contentColStyle: { type: String, required: false },
      contentClass: { type: String, required: false },
      contentStyle: { type: String, required: false },
      cardBackgroundColour: { type: String, required: false },
      cardContentContainerClass: { type: String, required: false },
      cardContentRowClass: { type: String, required: false },
      cardContentRowStyle: { type: String, required: false },
    },
    computed: {
      /* CSS */
      sectionCardClass(): string {
        let retVal: string = `${this.cardBackgroundColour}`;
        return retVal;
      },
      sectionContainerClass(): string {
        let retVal: string = '';
        if (this.containerClass) {
          retVal = this.containerClass;
        }
        if (this.isMobile) {
          retVal += ' pa-4';
        } else {
          retVal += ' pa-8';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>
