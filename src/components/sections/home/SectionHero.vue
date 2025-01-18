<template>
  <ClientOnly>
    <v-parallax
      :class="[
        'rounded pa-0 d-flex justify-center align-center',
        isLaptopOrDesktop ? 'mt-6 mx-7' : 'mt-3 mx-3',
      ]"
      :height="dynamicParallaxHeight"
      :src="isMobile ? heroBackgroundMobile : heroBackgroundNonMobile"
    >
      <template #default>
        <v-container fluid :class="['h-100 pa-0', isMobile ? 'pa-3' : 'pa-6']">
          <v-row dense class="h-100 d-flex">
            <v-col cols="12" lg="6" class="pa-0">
              <CommonCard
                card-class="h-100"
                card-style="border-radius: 16px 0 0 16px; background-color: rgba(238, 238, 218, 0.95)"
                heading-class="h-100"
                :container-class="`${isMobile ? 'ga-2 pa-4' : 'ga-4 pa-8'}`"
                :heading-row-class="`flex-grow-1 ${isLaptopOrDesktop ? 'pr-16' : ''}`"
                :action-class="`${isLaptopOrDesktop ? 'ga-4' : 'ga-2'}`"
              >
                <template #card-title>
                  <div
                    :class="[
                      'd-flex py-4 text-h4 text-sm-h3 text-xl-h2',
                      `${isLaptopOrDesktop ? '' : 'justify-center text-center'}`,
                    ]"
                  >
                    <b class="text-primary-3">
                      Where
                      <span class="text-accent-darken-2">Beauty</span>
                      <br v-if="isLaptopOrDesktop" />
                      Radiates With Delicacy
                    </b>
                  </div>
                </template>
                <template #card-subtitle>
                  <p
                    :class="[
                      'text-black text-h5 text-sm-h4 text-xl-h5',
                      `${isLaptopOrDesktop ? 'justify-start text-start' : 'justify-center text-center'}`,
                    ]"
                  >
                    One of our specialties is building Beauty Therapy websites,
                    please browse from the live website examples below to see
                    some recent website designs we have we have completed.
                  </p>
                </template>
                <template #card-actions>
                  <v-spacer v-if="!isLaptopOrDesktop"></v-spacer>
                  <CommonBtnOutlinedInternal
                    text="Our Recent Work"
                    @clicked="ourRecentWork_clickHandler"
                  />
                  <CommonBtnSolidCtaInternal
                    text="Book a Treatment"
                    to="/services"
                  />
                  <v-spacer></v-spacer>
                </template>
              </CommonCard>
            </v-col>

            <v-col v-if="isLaptopOrDesktop" cols="12" lg="6" class="pa-0">
              <CommonCard
                card-class="h-100"
                card-style="border-radius: 0 16px 16px 0; background-color: rgba(238, 238, 218, 0.95)"
              >
                <template #card-img>
                  <div
                    id="card-img"
                    class="rounded pa-4 d-flex justify-end align-end"
                    style="height: 600px"
                  >
                    <CommonCard
                      title="Rated Excellence"
                      card-class="rounded-xl"
                      container-class="pa-8"
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
      cardClass(): string {
        let retVal: string[] = ['h-100'];
        if (this.isMobile) {
          retVal.push('pa-2');
        }
        if (this.$vuetify.display.lgAndUp) {
          retVal.push('pa-4');
        }
        return retVal.join(' ');
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
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
      ourRecentWork_clickHandler(): void {
        const targetElementID: HTMLDivElement = document.getElementById(
          'section-recent-portfolio'
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
