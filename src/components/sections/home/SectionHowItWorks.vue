<template>
  <CommonSectionMain
    id="section-how-it-works"
    title="How it Works"
    subtitle="A simple, hassle-free way to book your beauty treatments."
    container-class="pa-0"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col
        v-for="(item, index) in computedSteps"
        :key="index"
        :cols="item.col.default"
        :md="item.col.md ?? item.col.default"
        :class="`pa-0 ${item.col.class}`"
      >
        <CommonCard
          v-if="item.card"
          variant="outlined"
          card-class="h-100 text-primary-shade-1"
          container-class="pa-2"
        >
          <template #card-toolbar>
            <CommonToolbar class="rounded-lg pr-2">
              <template #toolbar-prepend-items>
                <CommonIcon
                  class="d-flex align-self-start"
                  :icon="item.card.numberIcon"
                />
                <div class="text-h6 text-black-tint-1 d-flex align-self-center">
                  {{ item.card.title }}
                </div>
              </template>
              <template #toolbar-append-items>
                <v-spacer></v-spacer>
                <CommonIcon
                  class="d-flex align-self-center"
                  :icon="item.card.icon"
                ></CommonIcon>
              </template>
            </CommonToolbar>
          </template>
          <template #card-content>
            <v-container class="pa-4">
              <v-row dense>
                <v-col>
                  <CommonSelectInput
                    v-if="item.card.input.type === 'select'"
                    v-model="item.card.input.select.value"
                    label="Service Type"
                    variant="underlined"
                    base-color="inverted"
                    :items="item.card.input.select.items"
                  />
                </v-col>
              </v-row>
            </v-container>
          </template>
        </CommonCard>

        <CommonIcon v-if="item.icon" :icon="item.icon.pointer" />
      </v-col>
    </template>

    <template #section-actions>
      <v-col
        cols="12"
        class="pa-0 pt-4 ga-4 d-flex justify-center align-center"
      >
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
            col: {
              class: 'pb-2',
              default: '12',
              md: '',
            },
            card: {
              numberIcon: '$stepOne',
              title: 'Explore Services',
              icon: '$search',
              input: {
                type: 'select',
                select: {
                  items: ['Face', 'Body'],
                  value: 'Face',
                },
              },
            },
          },
          {
            col: {
              class: 'pb-2 d-flex justify-center',
              default: '12',
            },
            icon: {
              class: '',
              pointer: '$arrowDown',
            },
          },
          {
            col: {
              class: 'pb-2',
              default: '12',
              md: '',
            },
            card: {
              numberIcon: '$stepTwo',
              title: 'Book Appointment',
              icon: '$calendar',
              input: {
                type: '',
              },
            },
          },
          {
            col: {
              class: 'pb-2 d-flex justify-center',
              default: '12',
            },
            icon: {
              class: '',
              pointer: '$arrowDown',
            },
          },
          {
            col: {
              class: 'pb-2',
              default: '12',
              md: '',
            },
            card: {
              numberIcon: '$stepThree',
              title: 'Relax & Enjoy',
              icon: '$relax',
              input: {
                type: '',
              },
            },
          },
          {
            col: {
              class: 'pb-2 d-flex justify-center',
              default: '12',
            },
            icon: {
              class: '',
              pointer: '$arrowDown',
            },
          },
          {
            col: {
              class: '',
              default: 'auto',
              md: '',
            },
            card: {
              numberIcon: '$stepFour',
              title: 'Maintain',
              icon: '$maintain',
              input: {
                type: '',
              },
            },
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

      /* Data */
      computedSteps(): any[] {
        return this.steps.map((step: any) => {
          const stepIsCard: boolean = !!step.card;
          const cardCol = {
            default: this.$vuetify.display.md ? 'fill' : '12',
          };
          const iconCol = {
            default: this.$vuetify.display.md ? 'auto' : '12',
          };
          return {
            ...step,
            col: stepIsCard ? cardCol : iconCol,
          };
        });
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
