<template>
  <v-layout>
    <CommonMobileNav />
    <CommonHeader />
    <VMain>
      <NuxtPage />
    </VMain>
    <CommonFooter />
  </v-layout>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'layout-default',
  });
</script>

<style scoped></style>
