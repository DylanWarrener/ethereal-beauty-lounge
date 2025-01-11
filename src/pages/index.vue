<template>
  <Head>
    <Title>{{ txtPageMetaTitle }}</Title>
  </Head>

  <SectionHero />
  <ClientOnly>
    <v-container :fluid="isMobile" class="pa-4" style="border: 2px solid black">
      <v-row dense class="ga-4">
        <v-col cols="12" class="pa-0">
          <SectionBriefAbout />
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
        <v-col cols="12" class="pa-0">
          <SectionBriefContact />
        </v-col>
        <v-col cols="12" class="pa-0">
          <SectionNewsletter />
        </v-col>
      </v-row>
    </v-container>
  </ClientOnly>
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
