<template>
  <v-app style="border: 4px solid black">
    <v-layout class="d-flex flex-column" style="border: 4px solid red">
      <CommonMobileNav />
      <CommonHeader />
      <v-main class="pa-0 ma-0" style="border: 4px solid blue">
        <v-container :fluid="isMobile" style="border: 4px solid black">
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
    computed: {
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
    },
  });
</script>

<style scoped></style>
