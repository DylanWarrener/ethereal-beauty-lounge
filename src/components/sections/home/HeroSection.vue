<template>
  <v-parallax
    class="w-100"
    style="border: 4px solid green"
    :src="heroImg"
  ></v-parallax>
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
