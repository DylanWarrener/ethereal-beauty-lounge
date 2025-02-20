<template>
  <CommonSectionMain
    id="section-how-it-works"
    title="How it Works"
    subtitle="A simple, hassle-free way to book your beauty treatments."
    container-class="pa-0"
    section-content-row-class="ga-2"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <template v-for="(item, index) in steps" :key="index">
        <v-col cols="12" class="pa-0">
          <CommonCard
            variant="outlined"
            card-class="text-primary-shade-1"
            container-class="pa-2"
          >
            <template #card-toolbar>
              <CommonToolbar class="rounded-lg pr-2">
                <template #toolbar-prepend-items>
                  <CommonIcon
                    class="d-flex align-self-start"
                    :icon="item.stepIcon"
                  />
                  <div
                    class="text-h6 text-black-tint-1 d-flex align-self-center"
                  >
                    {{ item.title }}
                  </div>
                </template>
                <template #toolbar-append-items>
                  <v-spacer></v-spacer>
                  <CommonIcon
                    class="d-flex align-self-center"
                    :icon="item.icon"
                  ></CommonIcon>
                </template>
              </CommonToolbar>
            </template>
            <template #card-content>
              <v-container class="pa-4">
                <v-row dense>
                  <v-col>
                    <CommonSelectInput
                      v-if="item.inputType === 'select'"
                      v-model="item.value"
                      label="Service Type"
                      variant="underlined"
                      base-color="inverted"
                      :items="item.items"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </CommonCard>
        </v-col>
      </template>

      <v-col class="ga-2 d-flex justify-center align-center">
        <CommonBtnOutlinedInternal
          text="The benefits"
          @clicked="theBenefits_clickHandler"
        />
        <CommonBtnSolidCtaExternal text="Book treatment" to="/services" />
      </v-col>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  /* Utils */
  import { scrollToElement } from '@/utils/functions/functions';

  export default defineComponent({
    name: 'section-how-it-works',
    data(): any {
      return {
        steps: [
          {
            title: 'Explore Services',
            icon: '$search',
            stepIcon: '$stepOne',
            inputType: 'select',
            items: ['Face', 'Body'],
            value: 'Face',
          },
          {
            title: 'Book Appointment',
            icon: '$calendar',
            stepIcon: '$stepTwo',
          },
          {
            title: 'Relax & Enjoy',
            icon: '$relax',
            stepIcon: '$stepThree',
          },
          {
            title: 'Maintain',
            icon: '$maintain',
            stepIcon: '$stepFour',
          },
        ],
      };
    },
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-2';
      },
      textTitleColour(): string {
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },
    },
    methods: {
      theBenefits_clickHandler(): void {
        const targetElementID: HTMLDivElement = document.getElementById(
          'section-benefits'
        ) as HTMLDivElement;
        if (targetElementID) {
          scrollToElement(targetElementID);
        } else {
          //* Error handling missing
        }
      },
    },
  });
</script>
