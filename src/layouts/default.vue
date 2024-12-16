<template>
  <VLayout>
    <CommonMobileNav />
    <CommonHeader />
    <VMain>
      <NuxtPage />
    </VMain>
    <CommonFooter />
  </VLayout>
</template>

<script lang="ts">
  export default {
    name: 'layout-default',
  };
</script>

<style scoped></style>
