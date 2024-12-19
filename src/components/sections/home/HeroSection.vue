<template>
  <v-parallax class="pa-4 d-flex align-center" height="100vh" :src="heroImg">
    <v-card class="pa-4" variant="outlined" color="secondary" height="300">
      non-mobile
    </v-card>
  </v-parallax>
</template>

<script lang="ts">
  import { EPageSectionComponentNames } from '@/abstractions/enums/pages';
  import HeroImgMobile from '@/assets/img/hero-section/mobile/background-image-1.webp';
  import HeroImgNonMobile from '@/assets/img/hero-section/non-mobile/background-image-1.webp';

  export default defineComponent({
    name: EPageSectionComponentNames.HERO,
    computed: {
      /* Images */
      heroImg(): string {
        return this.isMobile ? HeroImgMobile : HeroImgNonMobile;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>
