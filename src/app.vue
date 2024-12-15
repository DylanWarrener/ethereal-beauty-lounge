<template>
  <NuxtLayout>
    <VLayout>
      <MobileSideBarNav />
      <Header />
      <VMain>
        <NuxtPage />
      </VMain>
      <Footer />
    </VLayout>
  </NuxtLayout>
</template>

<script lang="ts">
  export default {
    name: 'app',
  };
</script>

<style scoped></style>
