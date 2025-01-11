<template>
  <v-parallax
    class="ma-3 pa-4"
    rounded="xl"
    min-height="500"
    max-height="700"
    :src="isMobile ? heroBackgroundMobile : heroBackgroundNonMobile"
  >
    <template #default>
      <div class="h-100 overflow-hidden" style="border: 4px solid green">
        <v-container fluid class="h-100 pa-4" style="border: 4px solid black">
          <v-row dense class="h-100" style="border: 4px solid red">
            <v-col
              cols="12"
              md="6"
              class="h-100 d-flex pa-0"
              style="border: 4px solid blue"
            >
              <CommonCard
                width="100%"
                elevation="0"
                subtitle="Transform your look with our non-invasive treatments for the face & body."
                card-style="background-color: rgba(255, 255, 255, 0.8) !important"
                heading-row-class="d-flex align-center"
                heading-subtitle-class="text-h5 text-sm-h4"
                action-row-class="flex-grow-1 justify-start"
              >
                <template #card-title>
                  <h1 class="py-4 text-h3 text-sm-h2">
                    <b>
                      Where
                      <span class="text-accent-darken-2">Beauty</span>
                      Radiates
                      <br />
                      With
                      <i>Delicacy</i>
                    </b>
                  </h1>
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

            <v-col
              cols="12"
              md="6"
              class="h-100 pa-0 d-flex"
              style="border: 4px solid blue"
            >
              <CommonCard
                width="100%"
                elevation="0"
                img-col-class="pa-2"
                heading-row-class="d-flex align-center"
                heading-subtitle-class="text-h5 text-sm-h4"
              >
                <template #card-img>
                  <v-img
                    cover
                    aspect-ratio="4/3"
                    class="rounded-xl"
                    height="100%"
                    :src="isMobile ? heroImgMobile : heroImgNonMobile"
                  ></v-img>
                </template>
              </CommonCard>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
  </v-parallax>
</template>

<script lang="ts">
  import { EPageSectionComponentNames } from '@/abstractions/enums/pages';
  import HeroBackgroundMobile from '@/assets/img/webp/hero-section/hero-background-mobile.webp';
  import HeroBackgroundNonMobile from '@/assets/img/webp/hero-section/hero-background-non-mobile.webp';
  import { scrollToElement } from '@/utils/functions/functions';
  import HeroImgMobile from '@/assets/img/webp/hero-section/hero-image.webp';
  import HeroImgNonMobile from '@/assets/img/webp/hero-section/hero-image.webp';

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
