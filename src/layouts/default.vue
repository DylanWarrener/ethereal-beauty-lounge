<template>
  <v-app>
    <v-layout class="d-flex flex-column">
      <CommonMobileNav />
      <CommonHeader />
      <v-main>
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
      <CommonFooter />
    </v-layout>
  </v-app>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'layout-default',
  });
</script>

<style scoped></style>
