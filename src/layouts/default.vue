<template>
  <v-app theme="light">
    <ClientOnly>
      <CommonNavMobile />
    </ClientOnly>

    <CommonHeader />

    <v-main class="w-100 h-100 d-flex flex-column">
      <v-container class="pa-4" fluid>
        <v-row dense>
          <v-col class="pa-0">
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <CommonFooter />
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
