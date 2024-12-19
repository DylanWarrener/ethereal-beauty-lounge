<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>

  <HeroSection />
  <v-container :fluid="isMobile" style="border: 2px solid black">
    <v-row>
      <v-col cols="12">
        <BriefAboutSection />
      </v-col>
      <v-col cols="12">
        <PopularServicesSection />
      </v-col>
      <v-col cols="12">
        <PopularProductsSection />
      </v-col>
      <v-col cols="12">
        <RecentPortfolioSection />
      </v-col>
      <v-col cols="12">
        <BriefContactSection />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import {
    EPageComponentNames,
    EPageMetaTitles,
  } from '@/abstractions/enums/pages';

  export default defineComponent({
    name: EPageComponentNames.HOME,
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      /* Text */
      title(): string {
        return this.rootStore.get_meta_title;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
    created(): void {
      this.rootStore.set_meta_title(EPageMetaTitles.HOME);
    },
  });
</script>
