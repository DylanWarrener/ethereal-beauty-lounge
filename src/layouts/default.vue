<template>
  <VLayout class="d-flex flex-column">
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
