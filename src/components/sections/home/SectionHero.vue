<template>
  <ClientOnly>
    <v-parallax
      :class="[
        'd-flex justify-center align-center',
        isMobile ? 'mt-3 mx-3 pa-0' : 'mt-6 mx-6 pa-0',
      ]"
      rounded="xl"
      :height="dynamicParallaxHeight"
      :src="isMobile ? heroBackgroundMobile : heroBackgroundNonMobile"
    >
      <template #default>
        <div class="overflow-hidden" :height="dynamicParallaxHeight">
          <v-container fluid :class="['pa-0', isMobile ? 'pa-3' : 'pa-6']">
            <v-row dense class="h-100 d-flex">
              <v-col
                cols="12"
                lg="6"
                :class="['d-flex pa-0', isMobile ? '' : 'pr-2']"
              >
                <CommonCard
                  width="100%"
                  elevation="0"
                  subtitle="Transform your look with our non-invasive treatments for the face & body."
                  container-class="d-flex flex-column justify-center"
                  card-style="background-color: rgba(255, 255, 255, 0.8)"
                  heading-row-class="flex-grow-0 d-flex align-center"
                  heading-subtitle-class="text-h5 text-sm-h4 text-xl-h3"
                  action-row-class="flex-grow-0"
                  action-class="flex-wrap"
                >
                  <template #card-title>
                    <div tag="" class="py-4 text-h3 text-sm-h2 text-xl-h1">
                      <b>
                        Where
                        <span class="text-accent-darken-2">Beauty</span>
                        Radiates
                        <br />
                        With
                        <i>Delicacy</i>
                      </b>
                    </div>
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

              <ClientOnly>
                <v-col
                  v-if="!isMobile"
                  cols="12"
                  lg="6"
                  class="pa-0 pl-2 d-flex"
                >
                  <CommonCard
                    width="100%"
                    elevation="0"
                    card-class="overflow-hidden"
                    card-style="background-color: rgba(255, 255, 255, 0.8)"
                    img-col-class="position-relative pa-4"
                    heading-row-class="d-flex align-center"
                    heading-subtitle-class="text-h5 text-sm-h4"
                  >
                    <template #card-img>
                      <v-img
                        cover
                        aspect-ratio="16/9"
                        class="rounded-xl"
                        height="100%"
                        :src="isMobile ? heroImgMobile : heroImgNonMobile"
                      ></v-img>
                    </template>
                  </CommonCard>
                </v-col>
              </ClientOnly>
            </v-row>
          </v-container>
        </div>
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
        if (this.$vuetify.display.smAndUp) {
          retVal = '600';
        }
        if (this.$vuetify.display.lgAndUp) {
          retVal = '';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
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
