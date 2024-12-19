<template>
  <v-app>
    <v-layout class="d-flex flex-column">
      <CommonMobileNav />
      <CommonHeader />
      <v-main>
        <v-container class="pa-0" fluid>
          <v-row>
            <v-col cols="12">
              <NuxtPage />
            </v-col>
          </v-row>
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
