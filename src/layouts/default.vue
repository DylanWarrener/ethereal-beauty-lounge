<template>
  <VLayout>
    <!-- <MobileSideBarNav /> -->
    <!-- <Header /> -->
    <VMain>
      <NuxtPage />
    </VMain>
    <!-- <Footer /> -->
  </VLayout>
</template>

<script lang="ts">
  //import MobileSideBarNav from '@/components/common/navigation/mobileSideBar.vue';
  //import Header from '@/components/common/header/Header.vue';
  //import Footer from '@/components/common/footer/Footer.vue';

  export default {
    name: 'layout-default',
    components: {
      //MobileSideBarNav,
      //Header,
      //Footer,
    },
  };
</script>

<style scoped></style>
