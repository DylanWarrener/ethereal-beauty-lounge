<template>
  <CommonSectionMain
    id="section-benefits"
    title="The benefits"
    subtitle="Transform your beauty routine and discover services that enhance your health, confidence, and well-being."
    card-background-colour="bg-secondary-2"
    heading-title-class="text-primary-3"
    content-class="ga-8 d-flex"
    :card-content-row-class="`d-flex ${isLaptopOrDesktop ? 'ga-2' : 'ga-1'}`"
  >
    <template #section-content>
      <v-col cols="12" md="4">
        <CommonCard
          rounded="xl"
          title="Boost Your Confidence"
          card-class="h-100"
          container-class="pa-8"
          icon-col-class="text-center"
          heading-col-class="mb-4"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="d-flex justify-center text-center"
          content-style="max-width: 75%"
        >
          <template #card-icon>
            <v-icon
              icon="$boostConfidence"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p class="text-body-1">
              Look good, feel great! Our beauty treatments are designed to
              enhance your natural features and help you feel your best,
              empowering you with the confidence to take on the world.
            </p>
          </template>
        </CommonCard>
      </v-col>
      <v-col cols="12" md="4">
        <CommonCard
          rounded="xl"
          title="Achieve a Youthful Glow"
          card-class="h-100"
          container-class="pa-8"
          icon-col-class="text-center"
          heading-col-class="mb-4"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="d-flex justify-center text-center"
          content-style="max-width: 75%"
        >
          <template #card-icon>
            <v-icon
              icon="$youthfulGlow"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p class="text-body-1">
              Reverse the signs of aging with our advanced treatments that
              address wrinkles, fine lines, and skin elasticity. Discover the
              secret to radiant, youthful-looking skin.
            </p>
          </template>
        </CommonCard>
      </v-col>
      <v-col cols="12" md="4">
        <CommonCard
          rounded="xl"
          title="Enhance Your Professional Image"
          card-class="h-100"
          container-class="pa-8"
          icon-col-class="text-center"
          heading-col-class="mb-4"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="d-flex justify-center text-center"
          content-style="max-width: 75%"
        >
          <template #card-icon>
            <v-icon
              icon="$professionalImage"
              color="accent-darken-2"
              size="64"
            ></v-icon>
          </template>
          <template #card-content>
            <p class="text-body-1">
              From first impressions to lasting impact, your appearance matters.
              Whether for personal or professional success, our expert care
              helps you put your best face forward, unlocking new opportunities.
            </p>
          </template>
        </CommonCard>
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-benefits',
    computed: {
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
  });
</script>
