<template>
  <Head>
    <Title>{{ txtPageMetaTitle }}</Title>
  </Head>

  <SectionHero />
  <v-container :fluid="isMobile" style="border: 2px solid black">
    <v-row>
      <v-col cols="12">
        <CommonBtnLogIn />
      </v-col>
      <v-col cols="12">
        <CommonBtnLogOut />
      </v-col>

      <v-col cols="12">
        <SectionBriefAbout />
      </v-col>
      <v-col cols="12">
        <SectionPopularServices />
      </v-col>
      <v-col cols="12">
        <SectionPopularProducts />
      </v-col>
      <v-col cols="12">
        <SectionRecentPortfolio />
      </v-col>
      <v-col cols="12">
        <SectionBriefContact />
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
    },
    created(): void {
      this.rootStore.set_meta_title(EPageMetaTitles.HOME);
    },
  });
</script>
