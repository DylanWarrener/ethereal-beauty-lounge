<template>
  <CommonSectionMain
    id="section-get-in-touch"
    title="Get In Touch"
    subtitle="Call us or complete the form. We endeavour to answer all enquiries within 24 hours on business days."
    card-class="pa-0"
    container-class="pa-0"
    section-content-container-style="border: 2px solid black"
    section-content-row-style="border: 2px solid red"
    section-content-row-class="ga-8"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col cols="12">
        <v-row dense>
          <!-- Email -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$email" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="contact@etherealbeautylounge.co.uk" />
              </v-col>
            </v-row>
          </v-col>

          <!-- Phone -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$phone" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="+44 (0)7778 564553" />
              </v-col>
            </v-row>
          </v-col>

          <!-- Office -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$office" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="PE4 5BH" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-row
        dense
        cols="12"
        class="pa-0 ma-0 d-flex"
        style="border: 2px solid red"
      >
        <!-- Form -->
        <v-col cols="12" class="" style="border: 2px solid blue">Form</v-col>

        <!-- Picture -->
        <v-col
          cols="12"
          class="d-none d-lg-flex"
          style="border: 2px solid blue"
        >
          Picture
        </v-col>
      </v-row>

      <!-- <v-col cols="12" md="6" class="flex-shrink-1 flex-grow-1">
        <CommonCard elevation="0" card-class="h-100" content-class="h-100">
          <template #card-content>
            <v-container fluid class="pa-0 h-100 d-flex">
              <v-row dense>
                <v-col class="pa-0" cols="12">
                  <v-text-field
                    rounded="xl"
                    variant="outlined"
                    label="Name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="12" lg="6" class="pa-0">
                  <v-text-field
                    rounded="xl"
                    variant="outlined"
                    label="Email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="12" lg="6" class="pa-0">
                  <v-text-field
                    rounded="xl"
                    variant="outlined"
                    label="Phone"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <v-textarea
                    rounded="xl"
                    variant="outlined"
                    label="Message"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </template>

          <template #card-actions>
            <v-hover>
              <template #default="{ isHovering, props }">
                <CommonBtn
                  variant="flat"
                  text="Submit"
                  :class="isHovering ? 'bg-primary-1' : 'bg-accent-darken-2'"
                  v-bind="props"
                ></CommonBtn>
              </template>
            </v-hover>
          </template>
        </CommonCard>
      </v-col>

      <v-col cols="6" class="d-none d-md-flex flex-shrink-1 flex-grow-1">
        <CommonCard
          id="get-in-touch-image"
          rounded="xl"
          elevation="0"
          width="100%"
          height="600"
        ></CommonCard>
      </v-col> -->
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  /* Assets */
  import HeroBackgroundMobile from '@/assets/img/webp/hero-section/hero-background-mobile.webp';
  import HeroBackgroundNonMobile from '@/assets/img/webp/hero-section/hero-background-non-mobile.webp';
  import HeroImgMobile from '@/assets/img/webp/hero-section/hero-image.webp';
  import HeroImgNonMobile from '@/assets/img/webp/hero-section/hero-image.webp';

  export default defineComponent({
    name: 'section-get-in-touch',
    data(): any {
      return {};
    },
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-8';
      },
      textTitleColour(): string {
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },

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
        return this.$vuetify.display.smAndDown;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
  });
</script>

<style lang="scss" scoped>
  #get-in-touch-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~/assets/img/webp/hero-section/hero-image.webp');
    background-position: center center;
  }
</style>
