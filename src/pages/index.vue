<template>
  <Head>
    <Title>{{ txtPageMetaTitle }}</Title>
  </Head>

  <SectionHero />
  <v-container class="px-5 py-4">
    <v-row dense class="ga-3">
      <!-- <v-col cols="12" class="pa-0">
        <SectionBriefAbout />
      </v-col> -->
      <!-- <v-col cols="12" class="pa-0">
        <SectionLogoList />
      </v-col> -->
      <v-col cols="12" class="pa-0">
        <SectionWhyChooseUs />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionBenefits />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionPopularServices />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionPopularProducts />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionRecentPortfolio />
      </v-col>
      <!-- <v-col cols="12" class="pa-0">
        <SectionOurPackages />
      </v-col> -->
      <v-col cols="12" class="pa-0">
        <SectionReviews />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionBriefContact />
      </v-col>
      <v-col cols="12" class="pa-0">
        <SectionNewsletter />
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
      txtPageMetaTitle(): string {
        return this.rootStore.get_meta_title;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
    created(): void {
      this.rootStore.set_meta_title(EPageMetaTitles.HOME);
    },
  });
</script>
