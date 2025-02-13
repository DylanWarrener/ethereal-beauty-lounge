<template>
  <CommonSectionMain
    id="section-benefits"
    title="The Benefits"
    subtitle="Transform your beauty routine and discover services that enhance your health, confidence, and well-being."
    section-content-container-class="ga-4"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
    :section-content-row-class="`ga-4 d-flex flex-nowrap`"
  >
    <template #section-content>
      <v-col cols="12" class="pa-0 d-flex d-lg-none">
        <v-carousel
          hide-delimiters
          progress="cta"
          class="rounded-0 rounded-b-lg"
          show-arrows="hover"
          :height="carouselHeight"
        >
          <template #prev="{ props: prevProps }">
            <v-hover>
              <template
                #default="{ isHovering: isHoverPrev, props: prevHoverProps }"
              >
                <CommonBtn
                  is-icon
                  :icon="prevProps.icon"
                  :class="`${isHoverPrev ? 'bg-cta-hover text-black' : 'bg-cta text-white'} ${prevProps.class}`"
                  :aria-label="prevProps['aria-label']"
                  v-bind="prevHoverProps"
                  @click="prevProps.onClick"
                ></CommonBtn>
              </template>
            </v-hover>
          </template>

          <v-carousel-item v-for="(card, index) in cards" :key="index">
            <CommonCard
              :title="card.title"
              card-class="w-100 h-100 rounded-0 rounded-b-lg"
              container-class="justify-center align-center"
              icon-col-class="text-center"
              heading-title-class="font-weight-bold text-cta text-center text-h6 text-sm-h5 text-xl-h4"
              content-col-class="d-flex flex-column align-center"
              content-class="h-100 d-flex justify-center align-center"
              :content-style="`${isSmallToMediumTablet ? 'width: 75%;' : 'width: 100%;'}`"
            >
              <template #card-icon>
                <v-icon color="cta" size="64" :icon="card.icon"></v-icon>
              </template>
              <template #card-content>
                <p class="text-body-1 text-center">{{ card.text }}</p>
              </template>
            </CommonCard>
          </v-carousel-item>

          <template #next="{ props: nextProps }">
            <v-hover>
              <template
                #default="{ isHovering: isHoverNext, props: nextHoverProps }"
              >
                <CommonBtn
                  is-icon
                  elevation="0"
                  :icon="nextProps.icon"
                  :class="`${isHoverNext ? 'bg-cta-hover text-black' : 'bg-cta text-white'} ${nextProps.class}`"
                  :aria-label="nextProps['aria-label']"
                  v-bind="nextHoverProps"
                  @click="nextProps.onClick"
                ></CommonBtn>
              </template>
            </v-hover>
          </template>
        </v-carousel>
      </v-col>

      <v-col
        v-for="(card, index) in cards"
        v-if="isLaptopOrDesktop"
        :key="index"
        cols="4"
        class="pa-0 d-flex flex-column flex-shrink-1 flex-grow-1"
      >
        <CommonCard
          rounded="xl"
          card-class="w-100 h-100"
          container-class="pa-8"
          icon-col-class="d-flex justify-center align-center"
          icon-col-style="height: 100px"
          heading-row-style="height: 70px"
          heading-col-class="mb-4"
          heading-title-class="font-weight-bold text-cta text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="d-flex justify-center text-center"
          :title="card.title"
        >
          <template #card-icon>
            <v-icon color="cta" size="64" :icon="card.icon"></v-icon>
          </template>
          <template #card-content>
            <p class="text-body-1">{{ card.text }}</p>
          </template>
        </CommonCard>
      </v-col>
    </template>

    <template #section-actions>
      <v-col cols="12" class="ga-4 pa-0 d-flex justify-center align-center">
        <CommonBtnOutlinedInternal
          text="Popular services"
          @clicked="startTransformation_clickHandler"
        />
        <CommonBtnSolidCtaExternal text="All services" to="/services" />
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  /* Utils */
  import { scrollToElement } from '@/utils/functions/functions';

  export default defineComponent({
    name: 'section-benefits',
    data(): any {
      return {
        cards: [
          {
            icon: '$boostConfidence',
            title: 'Boost your Confidence',
            text: `
              Look good, feel great! Our beauty treatments are designed to
              enhance your natural features and help you feel your best,
              empowering you with the confidence to take on the world.
            `,
          },
          {
            icon: '$youthfulGlow',
            title: 'Achieve a Youthful Glow',
            text: `
              Reverse the signs of aging with our advanced treatments that
              address wrinkles, fine lines, and skin elasticity. Discover the
              secret to radiant, youthful-looking skin.
            `,
          },
          {
            icon: '$professionalImage',
            title: 'Enhance Professional Image',
            text: `
              From first impressions to lasting impact, your appearance matters.
              Whether for personal or professional success, our expert care
              helps you put your best face forward, unlocking new opportunities.
            `,
          },
        ],
      };
    },
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-3';
      },
      textTitleColour(): string {
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },
      carouselHeight(): string {
        return this.isMobile ? '400' : '300';
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
      isSmallToMediumTablet(): boolean {
        return this.$vuetify.display.smAndUp;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
    methods: {
      /* Events */
      startTransformation_clickHandler(): void {
        const targetElementID: HTMLDivElement = document.getElementById(
          'section-popular-services'
        ) as HTMLDivElement;
        if (targetElementID) {
          scrollToElement(targetElementID);
        } else {
          //* Error handling missing
        }
      },
    },
  });
</script>
