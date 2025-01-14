<template>
  <ClientOnly>
    <CommonCard
      :id="id"
      heading-title-class="text-center text-h4 text-sm-h3 text-xl-h2"
      heading-subtitle-class="text-center text-h5 text-sm-h4 text-xl-h3"
      :title="title"
      :subtitle="subtitle"
      :card-class="cardClass"
      :container-class="containerClass"
    >
      <template #card-content>
        <v-container fluid class="pa-0">
          <v-row dense style="border: 4px solid red">
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
      containerClass(): string {
        let retVal: string = '';
        if (this.isMobile) {
          retVal = 'pa-2';
        } else {
          retVal = 'pa-4';
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
