<template>
  <VLayout>
    <MobileSideBar />
    <Header />
    <VMain>
      <NuxtPage />
    </VMain>
    <Footer />
  </VLayout>
</template>

<script lang="ts">
  export default {
    name: 'layout-default',
  };
</script>

<style scoped></style>
