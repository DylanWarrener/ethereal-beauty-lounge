<template>
  <ClientOnly>
    <v-parallax
      :class="[
        'd-flex justify-center align-center',
        isMobile ? 'mt-3 mx-3 pa-0' : 'mt-6 mx-6 pa-0',
      ]"
      :height="dynamicParallaxHeight"
      rounded="xl"
      :src="isMobile ? heroBackgroundMobile : heroBackgroundNonMobile"
    >
      <template #default>
        <v-container
          fluid
          :class="['h-100 pa-0', isMobile ? 'pa-3' : 'pa-6']"
          style="border: 4px solid black"
        >
          <v-row dense class="h-100 d-flex" style="border: 4px solid red">
            <v-col cols="12" :class="['d-flex pa-0', isMobile ? '' : 'pr-2']">
              <CommonCard
                width="100%"
                elevation="0"
                card-style="background-color: rgba(231, 245, 232, 0.8)"
                container-class="d-flex"
                container-style="border: 4px solid black"
                :heading-cols="headingCols"
                heading-row-class="d-flex align-center"
                heading-row-style="border: 4px solid red"
                heading-col-style="border: 4px solid orange"
                action-row-style="border: 4px solid blue"
                action-class="flex-wrap"
              >
                <template #card-title>
                  <div class="py-4 text-h4 text-sm-h3 text-xl-h2">
                    <b class="font-weight-bold text-primary-3">
                      Where
                      <span class="text-accent-darken-2">Beauty</span>
                      <br />
                      Radiates With Delicacy
                    </b>
                  </div>
                </template>
                <template #card-subtitle>
                  <p class="text-black text-h5 text-sm-h4 text-xl-h5">
                    One of our specialties is building Beauty Therapy websites,
                    please browse from the live website examples below to see
                    some recent website designs we have we have completed.
                  </p>
                </template>
                <template #card-hero-img>
                  <v-col
                    v-if="isLaptopOrDesktop"
                    cols="6"
                    class="pa-4 d-flex align-center"
                    style="border: 4px solid green"
                  >
                    <v-img
                      cover
                      class="rounded-xl"
                      max-height="600"
                      :src="isMobile ? heroImgMobile : heroImgNonMobile"
                    ></v-img>
                  </v-col>
                </template>
                <template #card-actions>
                  <CommonBtnOutlinedInternal
                    text="Our Story"
                    @clicked="ourStory_clickHandler"
                  />
                  <CommonBtnSolidCtaInternal
                    text="Book a Treatment"
                    to="/services"
                  />
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
        let retVal: string = '';
        if (this.$vuetify.display.mdAndUp) {
          retVal = '89dvh';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
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
      ourStory_clickHandler(): void {
        const targetElementID: HTMLDivElement = document.getElementById(
          'section-our-story'
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
