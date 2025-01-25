<template>
  <Head>
    <Title>{{ txtPageMetaTitle }}</Title>
  </Head>

  <SectionHero />
  <v-container fluid style="border: 2px solid black">
    <v-row dense class="ga-2" style="border: 2px solid red">
      <!-- <v-col cols="12" class="pa-0">
        <SectionBriefAbout />
      </v-col> -->
      <!-- <v-col cols="12" class="pa-0">
        <SectionLogoList />
      </v-col> -->
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionWhyChooseUs />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionBenefits />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionPopularServices />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionPopularProducts />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionRecentPortfolio />
      </v-col>
      <!-- <v-col cols="12" class="pa-0">
        <SectionOurPackages />
      </v-col> -->
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionReviews />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
        <SectionBriefContact />
      </v-col>
      <v-col cols="12" class="pa-0" style="border: 2px solid blue">
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
