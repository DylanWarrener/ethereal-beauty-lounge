<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <CommonHeroSection />
  <BasketSection />
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import {
    EPageComponentNames,
    EPageMetaTitles,
  } from '@/abstractions/enums/pages';

  export default defineComponent({
    name: EPageComponentNames.BASKET,
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
      this.rootStore.set_meta_title(EPageMetaTitles.BASKET);
    },
  });
</script>
