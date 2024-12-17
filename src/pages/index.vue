<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <HeroSection />
  <BriefAboutSection />
  <PopularServicesSection />
  <PopularProductsSection />
  <RecentPortfolioSection />
  <RecentReviewsSection />
  <BriefContactSection />
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'page-home',
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
      this.rootStore.set_meta_title('Home');
    },
  });
</script>
