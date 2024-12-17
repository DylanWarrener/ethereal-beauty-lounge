<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <CommonHeroSection />
  <ProductsSection />
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'page-products',
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
      this.rootStore.set_meta_title('Products');
    },
  });
</script>
