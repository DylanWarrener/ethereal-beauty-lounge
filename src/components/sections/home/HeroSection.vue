<template>
  <v-parallax height="500" :src="heroImg">
    <span>This is the content inside of the paralax</span>
  </v-parallax>
</template>

<script lang="ts">
  import { EPageSectionComponentNames } from '@/abstractions/enums/pages';
  import HeroImg from '@/assets/img/hero-section/background-image-1.webp';

  export default defineComponent({
    name: EPageSectionComponentNames.HERO,
    computed: {
      heroImg(): string {
        return HeroImg;
      },
    },
  });
</script>
