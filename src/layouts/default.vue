<template>
  <v-app theme="light">
    <CommonNavMobile />

    <CommonHeader />

    <v-main class="d-flex flex-column">
      <v-container fluid class="pa-0">
        <v-row dense>
          <v-col class="pa-3">
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
