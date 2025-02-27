<template>
  <v-carousel
    hide-delimiters
    :progress="progress"
    :width="carouselWidth"
    :height="carouselHeight"
  >
    <template #prev="{ props: prevProps }">
      <slot name="carousel-btn-prev">
        <CommonBtn
          v-if="!isMobile"
          is-icon
          v-bind="{ ...prevProps, icon: '$arrowLeft' }"
          @clicked="prevProps.onClick"
        />
      </slot>
    </template>

    <slot name="carousel-items"></slot>

    <template #next="{ props: nextProps }">
      <slot name="carousel-btn-next">
        <CommonBtn
          v-if="!isMobile"
          is-icon
          v-bind="{ ...nextProps, icon: '$arrowRight' }"
          @clicked="nextProps.onClick"
        />
      </slot>
    </template>
  </v-carousel>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'common-carousel',
    props: {
      progress: { type: String, required: false, default: 'cta' },
      width: { type: String, required: false },
      height: { type: String, required: false },
    },
    computed: {
      /* Properties */
      carouselWidth(): string {
        if (this.width) return this.width;

        let retVal: string = '100%';
        return retVal;
      },
      carouselHeight(): string {
        if (this.height) return this.height;

        let retVal: string = '';
        if (this.isMobile) {
          retVal = '300';
        } else {
          retVal = '400';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
    },
  });
</script>
