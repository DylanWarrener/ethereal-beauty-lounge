<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <CommonHeroSection />
  <AboutSection />
</template>

<script lang="ts">
  import {
    EPageComponentNames,
    EPageMetaTitles,
  } from '@/abstractions/enums/pages';

  export default defineComponent({
    name: EPageComponentNames.ABOUT,
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      title(): string {
        return this.rootStore.get_meta_title;
      },
    },
    created(): void {
      this.rootStore.set_meta_title(EPageMetaTitles.ABOUT);
    },
  });
</script>
