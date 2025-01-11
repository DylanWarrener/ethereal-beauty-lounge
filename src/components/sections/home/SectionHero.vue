<template>
  <v-parallax class="ma-4 d-flex" rounded="xl">
    <v-img
      width="100%"
      height="400"
      class="pa-4"
      :src="heroImg"
      alt="Hero image of a Beauty Therapist professional giving someone a facial massage"
    ></v-img>
    <!-- <v-img
      width="100%"
      height="100%"
      class="pa-4"
      :src="heroImg"
      alt="Hero image of a Beauty Therapist professional giving someone a facial massage"
    >
      <v-container fluid class="pa-0" style="border: 4px solid black">
        <v-row dense style="border: 4px solid red">
          <v-col cols="12" md="6" class="pa-0" style="border: 4px solid blue">
            <div class="h-100 d-flex flex-wrap align-center overflow-y-auto">
              <ClientOnly>
                <CommonCard
                  width="100%"
                  elevation="0"
                  subtitle="Transform your look with our non-invasive treatments for the face & body."
                  card-class="bg-primary"
                  heading-subtitle-class="text-h5 text-sm-h4"
                >
                  <template #card-title>
                    <h1 class="text-h2 text-sm-h1">
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
                </CommonCard>
              </ClientOnly>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-0"
            style="border: 4px solid blue"
          ></v-col>
        </v-row>
      </v-container>
    </v-img> -->
  </v-parallax>
  <!-- <v-container fluid class="pa-4" style="height: 50%">
    <v-row dense class="h-100">
      <v-parallax class="pa-0 d-flex" rounded="xl" :src="heroImg">
        <v-col
          cols="12"
          md="6"
          class="pa-0 d-flex"
          style="border: 4px solid blue"
        >
          <div class="h-100 d-flex flex-wrap align-center overflow-y-auto">
            <ClientOnly>
              <CommonCard
                width="100%"
                elevation="0"
                subtitle="Transform your look with our non-invasive treatments for the face & body."
                card-class="bg-primary"
                heading-subtitle-class="text-h5 text-sm-h4"
              >
                <template #card-title>
                  <h1 class="text-h2 text-sm-h1">
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
              </CommonCard>
            </ClientOnly>
          </div>
        </v-col>
      </v-parallax>

      <v-col cols="12" md="6" class="pa-0" style="border: 4px solid blue">
        content
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script lang="ts">
  import { EPageSectionComponentNames } from '@/abstractions/enums/pages';
  import HeroImg from '@/assets/img/webp/hero-section/hero-image.webp';

  export default defineComponent({
    name: EPageSectionComponentNames.HERO,
    computed: {
      /* Images */
      heroImg(): string {
        return HeroImg;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>
