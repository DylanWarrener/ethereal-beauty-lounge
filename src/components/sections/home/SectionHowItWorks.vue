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
      <template v-for="(item, index) in computedSteps" :key="index">
        <v-col
          v-if="item.type === 'content'"
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
                  <div
                    class="text-h6 text-black-tint-1 d-flex align-self-center"
                  >
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
                      v-model="item.card.input.select!.value"
                      :items="item.card.input.select!.items"
                      :chip-label="item.card.input.select!.value"
                      select-label="Service Type"
                      variant="underlined"
                      base-color="inverted"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </CommonCard>

          <CommonIcon v-if="item.icon" :icon="item.icon.pointer" />
        </v-col>
      </template>
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
  /* ABSTRACTIONS */
  import type {
    IHowItWorksComponentData,
    IHowItWorksComponentStepsData,
  } from '@/abstractions/interfaces/components/home/sections/how-it-works';

  /* UTILS */
  import { scrollToElement } from '@/utils/functions/functions';

  export default defineComponent({
    name: 'section-how-it-works',
    data(): IHowItWorksComponentData {
      return {
        steps: [
          {
            type: 'content',
            col: {
              class: '',
              default: '12',
              md: '5',
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
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              md: '2',
            },
            icon: {
              class: '',
              pointer: '',
            },
          },
          {
            type: 'content',
            col: {
              class: '',
              default: '12',
              md: '5',
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
            type: 'spacer',
            col: {
              class: '',
              default: '',
              md: '5',
            },
            icon: {
              class: '',
              pointer: '',
            },
          },
          {
            type: 'spacer',
            col: {
              class: '',
              default: '',
              md: '2',
            },
            icon: {
              class: '',
              pointer: '',
            },
          },
          {
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              md: '5',
            },
            icon: {
              class: '',
              pointer: '',
            },
          },
          {
            type: 'content',
            col: {
              class: '',
              default: '12',
              md: '5',
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
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              md: '2',
            },
            icon: {
              class: '',
              pointer: '',
            },
          },
          {
            type: 'content',
            col: {
              class: '',
              default: '12',
              md: '5',
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
      computedSteps(): IHowItWorksComponentStepsData[] {
        const newSteps = this.steps.map(
          (step: IHowItWorksComponentStepsData) => {
            const isMobile: boolean = this.$vuetify.display.mdAndDown;
            const stepIsCard: boolean = !!step.card;
            const stepIsIcon: boolean = !!step.icon;

            /* COLUMNS */
            let colClass: string = '';
            let colDefault: string = '';
            let colMd: string | undefined = undefined;
            if (stepIsCard) {
              const cardColClass: string = '';
              colClass = step.col!.class += ` ${cardColClass}`;
              colDefault = step.col!.default;
              colMd = step.col!.md;
            }
            if (stepIsIcon) {
              const iconColClass: string = isMobile ? 'py-2' : '';
              colClass = step.col!.class += ` ${iconColClass}`;
              colDefault = step.col!.default;
              colMd = step.col!.md;
            }
            const colObj = {
              class: colClass,
              default: colDefault,
              md: colMd ?? undefined,
            };

            /* CARD */
            const cardInputType: string | undefined = step.card?.input.type;
            const cardSelectInput =
              cardInputType === 'select'
                ? {
                    items: step.card!.input!.select!.items,
                    value: step.card!.input!.select!.value,
                  }
                : undefined;
            const cardObj = stepIsCard
              ? {
                  numberIcon: stepIsCard ? step.card!.numberIcon : '',
                  title: stepIsCard ? step.card!.title : '',
                  icon: stepIsCard ? step.card!.icon : '',
                  input: {
                    type: stepIsCard ? step.card!.input.type : '',
                    select: cardSelectInput,
                  },
                }
              : undefined;

            /* ICON */
            let iconClass: string = '';
            let iconPointer: string = '';
            if (stepIsIcon) {
              const isSpacer: boolean = step.type
                ? step.type === 'spacer'
                : false;
              const iconClassDynamic: string = isMobile ? 'py-2' : '';
              iconClass = step.icon!.class += ` ${iconClassDynamic}`;
              iconPointer = isSpacer
                ? ''
                : `${isMobile ? '$arrowDown' : '$arrowRight'}`;
            }
            const iconObj = stepIsCard
              ? undefined
              : {
                  class: iconClass,
                  pointer: iconPointer,
                };

            return {
              col: colObj,
              card: cardObj,
              icon: iconObj,
            };
          }
        );
        return newSteps;
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
