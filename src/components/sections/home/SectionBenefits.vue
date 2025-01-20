<template>
  <CommonSectionMain
    id="section-benefits"
    title="The Benefits"
    subtitle="Transform your beauty routine and discover services that enhance your health, confidence, and well-being."
    card-background-colour="bg-secondary-2"
    heading-title-class="text-primary-3"
    :section-content-row-class="`d-flex ${isMobile ? 'flex-column flex-wrap' : 'flex-nowrap'} ${isLaptopOrDesktop ? 'ga-3' : 'ga-1'}`"
  >
    <template #section-content>
      <v-col v-for="(card, index) in cards" :key="index">
        <CommonCard
          rounded="xl"
          card-class="w-100 h-100"
          container-class="pa-8"
          icon-col-class="d-flex justify-center align-center"
          icon-col-style="height: 100px"
          heading-row-style="height: 70px"
          heading-col-class="mb-4"
          heading-title-class="font-weight-bold text-accent-darken-2 text-center text-h6 text-sm-h5 text-xl-h4"
          content-col-class="d-flex justify-center text-center"
          :title="card.title"
          :card-style="cardStyle"
        >
          <template #card-icon>
            <v-icon
              color="accent-darken-2"
              size="64"
              :icon="card.icon"
            ></v-icon>
          </template>
          <template #card-content>
            <p class="text-body-1">{{ card.text }}</p>
          </template>
        </CommonCard>
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-benefits',
    data(): any {
      return {
        cards: [
          {
            icon: '$boostConfidence',
            title: 'Boost your Confidence',
            text: `
              Look good, feel great! Our beauty treatments are designed to
              enhance your natural features and help you feel your best,
              empowering you with the confidence to take on the world.
            `,
          },
          {
            icon: '$youthfulGlow',
            title: 'Achieve a Youthful Glow',
            text: `
              Reverse the signs of aging with our advanced treatments that
              address wrinkles, fine lines, and skin elasticity. Discover the
              secret to radiant, youthful-looking skin.
            `,
          },
          {
            icon: '$professionalImage',
            title: 'Enhance Professional Image',
            text: `
              From first impressions to lasting impact, your appearance matters.
              Whether for personal or professional success, our expert care
              helps you put your best face forward, unlocking new opportunities.
            `,
          },
        ],
      };
    },
    computed: {
      /* CSS */
      cardStyle(): string {
        let retVal: string[] = [];
        if (this.isMobile) {
          retVal.push('width: 100%;');
        }
        if (this.isSmallToMediumTablet) {
          retVal.push('width: 75%;');
        }
        if (this.$vuetify.display.mdAndUp) {
          retVal.push('width: 100%;');
        }
        return retVal.join('');
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
      isSmallToMediumTablet(): boolean {
        return this.$vuetify.display.smAndUp;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
  });
</script>
