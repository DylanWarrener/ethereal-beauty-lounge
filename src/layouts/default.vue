<template>
  <v-app theme="light">
    <CommonNavMobile />

    <CommonHeader />

    <v-main class="d-flex flex-column">
      <v-container fluid>
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
  });
</script>

<style scoped></style>
