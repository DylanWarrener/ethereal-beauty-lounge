<template>
  <ClientOnly>
    <v-parallax
      class="rounded mx-1 mt-1 mx-sm-4 mt-sm-4 d-flex justify-center align-center"
      :height="dynamicParallaxHeight"
      :src="isMobile ? heroBackgroundMobile : heroBackgroundNonMobile"
    >
      <template #default>
        <v-container class="h-100 pa-4 pa-sm-7">
          <v-row dense class="h-100 d-flex">
            <v-col cols="12" lg="6" class="pa-0">
              <CommonCard
                elevation="6"
                card-class="h-100 rounded-0 rounded-s-lg"
                card-style="background-color: rgba(206, 219, 210, 0.95)"
                container-class="pa-4 pa-sm-7"
                heading-row-class="flex-grow-1 pr-lg-16"
                heading-class="h-100"
                action-class="ga-3 ga-sm-5 d-flex flex-wrap justify-center justify-lg-start"
              >
                <template #card-title>
                  <div
                    class="d-flex justify-center justify-lg-start text-center text-lg-start py-4 text-h4 text-sm-h3 text-xl-h2"
                  >
                    <b :class="textTitleColour">
                      Where
                      <span class="text-section-1-cta">Beauty</span>
                      <br class="d-none d-lg-block" />
                      Radiates With Delicacy
                    </b>
                  </div>
                </template>
                <template #card-subtitle>
                  <p
                    :class="`d-flex justify-center justify-lg-start text-center text-lg-start text-h5 text-sm-h4 text-xl-h5 ${textSubtitleColour}`"
                  >
                    One of our specialties is building Beauty Therapy websites,
                    please browse from the live website examples below to see
                    some recent website designs we have we have completed.
                  </p>
                </template>
                <template #card-actions>
                  <CommonBtnOutlinedInternal
                    text="Learn More"
                    @clicked="learnMore_clickHandler"
                  />
                  <CommonBtnSolidCtaInternal
                    text="Book a Treatment"
                    to="/services"
                  />
                </template>
              </CommonCard>
            </v-col>

            <v-col cols="12" lg="6" class="pa-0 d-none d-lg-block">
              <CommonCard
                card-class="h-100 rounded-0 rounded-e-lg"
                card-style="background-color: rgba(206, 219, 210, 0.95)"
                container-class="pa-3"
              >
                <template #card-img>
                  <div
                    id="card-img"
                    class="rounded pa-3 d-flex justify-end align-end"
                    style="height: 600px"
                  >
                    <CommonCard
                      title="Rated Excellence"
                      card-class="rounded"
                      container-class="pa-3"
                      heading-title-class="text-h6"
                    >
                      <template #card-content>
                        <CommonRating
                          class="w-100 d-flex justify-center align-center"
                          color="black"
                          active-color="accent-darken-2"
                          density="compact"
                          :rating="4.5"
                        ></CommonRating>
                      </template>
                    </CommonCard>
                  </div>
                </template>
              </CommonCard>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-parallax>
  </ClientOnly>
</template>

<script lang="ts">
  /* Abstractions */
  import { EPageSectionComponentNames } from '@/abstractions/enums/pages';

  /* Assets */
  import HeroBackgroundMobile from '@/assets/img/webp/hero-section/hero-background-mobile.webp';
  import HeroBackgroundNonMobile from '@/assets/img/webp/hero-section/hero-background-non-mobile.webp';
  import HeroImgMobile from '@/assets/img/webp/hero-section/hero-image.webp';
  import HeroImgNonMobile from '@/assets/img/webp/hero-section/hero-image.webp';

  /* Utils */
  import { scrollToElement } from '@/utils/functions/functions';

  export default defineComponent({
    name: EPageSectionComponentNames.HERO,
    computed: {
      /* Images */
      heroBackgroundMobile(): string {
        return HeroBackgroundMobile;
      },
      heroBackgroundNonMobile(): string {
        return HeroBackgroundNonMobile;
      },
      heroImgMobile(): string {
        return HeroImgMobile;
      },
      heroImgNonMobile(): string {
        return HeroImgNonMobile;
      },

      /* CSS */
      dynamicParallaxHeight(): string {
        let retVal: string = '93dvh';
        if (this.$vuetify.display.lgAndUp) {
          retVal = '89dvh';
        }
        return retVal;
      },
      backgroundColour(): string {
        return 'bg-section-1';
      },
      textTitleColour(): string {
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
      headingCols(): string {
        let retVal: string = '12';
        if (this.$vuetify.display.lgAndUp) {
          retVal = '6';
        }
        return retVal;
      },
    },
    methods: {
      /* Events */
      learnMore_clickHandler(): void {
        const targetElementID: HTMLDivElement = document.getElementById(
          'section-why-choose-us'
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

<style lang="scss" scoped>
  #card-img {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~/assets/img/webp/hero-section/hero-image.webp');
    background-position: center top;
  }
</style>
