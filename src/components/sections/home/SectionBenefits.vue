<template>
  <CommonSectionMain
    id="section-benefits"
    title="The benefits"
    subtitle="Transform your beauty routine and discover services that enhance your health, confidence, and well-being."
    card-background-colour="bg-secondary-2"
    heading-title-class="text-primary-3"
  >
    <template #section-content>
      <v-col cols="12" lg="4">
        <CommonCard
          title="Comprehensive & Personalized Services"
          card-class="h-100"
          icon-col-class="text-center"
          icon-col-style="border: 4px solid blue"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="text-center"
        >
          <template #card-icon>
            <v-icon
              icon="$customisedService"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p>Text</p>
          </template>
        </CommonCard>
      </v-col>
      <v-col cols="12" lg="4">
        <CommonCard
          title="Experienced & Skilled Professionals"
          card-class="h-100"
          icon-col-class="text-center"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="text-center"
        >
          <template #card-icon>
            <v-icon
              icon="$customisedService"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p>Text</p>
          </template>
        </CommonCard>
      </v-col>
      <v-col cols="12" lg="4">
        <CommonCard
          title="Authentic & Welcoming Environment"
          card-class="h-100"
          icon-col-class="text-center"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="text-center"
        >
          <template #card-icon>
            <v-icon
              icon="$customisedService"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p>Text</p>
          </template>
        </CommonCard>
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-benefits',
  });
</script>
