<template>
  <CommonSectionMain
    id="section-get-in-touch"
    elevation="0"
    title="Get In Touch"
    subtitle="Call us or complete the form. We endeavour to answer all enquiries within 24 hours on business days."
    card-background-colour="bg-white"
    container-class="pa-2"
    section-content-container-class="pa-0"
    section-content-container-style="border: 4px solid black"
    section-content-row-style="border: 4px solid red"
  >
    <template #section-content>
      <v-col cols="12" lg="6" class="pa-0" style="border: 4px solid blue">
        <CommonCard card-class="bg-accent-darken-2">
          <template #card-content>Card</template>
        </CommonCard>
      </v-col>

      <v-col
        v-if="isLaptopOrDesktop"
        cols="6"
        style="border: 4px solid blue"
      ></v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-get-in-touch',
    computed: {
      /* Data */
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
  });
</script>
