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
          :lg="item.col.lg"
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
                  <v-col cols="12" class="pa-0">
                    <CommonSelectInput
                      v-if="item.card.input.type === 'select'"
                      v-model="item.card.input.select!.value"
                      :items="item.card.input.select!.items"
                      :chip-label="item.card.input.select!.value!"
                      item-title="category"
                      item-value="category"
                      select-label="Service Type"
                      variant="underlined"
                      base-color="inverted"
                    />
                  </v-col>

                  <v-col cols="12" class="pa-0">
                    <v-row dense>
                      <v-col cols="12">
                        <!-- <CommonCarousel
                          v-if="cardContentContainsCarousel(item)"
                        >
                          <template #carousel-items>
                            <v-carousel-item
                              v-for="(service, index) in item.card.content
                                .carousel!.items"
                              :key="index"
                              :src="
                                getCarouselCategoryImage(
                                  service.treatmentCategory
                                )
                              "
                              cover
                            ></v-carousel-item>
                          </template>
                        </CommonCarousel> -->
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </CommonCard>

          <CommonIcon
            v-if="item.icon"
            :key="item.icon.pointer"
            :icon="item.icon.pointer"
            color="cta"
          />
        </v-col>

        <v-col
          v-if="item.type === 'spacer' && $vuetify.display.mdAndUp"
          :cols="item.col.default"
          :lg="item.col.lg"
        ></v-col>
      </template>
    </template>

    <template #section-actions>
      <v-col
        cols="12"
        class="pa-0 py-8 ga-4 d-flex justify-center align-center"
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
  /* STORES */
  import { useRootStore } from '@/stores/root';

  /* ABSTRACTIONS */
  import type {
    IRootServiceCategory,
    IRootServiceTreatments,
  } from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';
  import type {
    IHowItWorksData,
    IHowItWorksStepsData,
    IHowItWorksStepCol,
    IHowItWorksStepCard,
    IHowItWorksStepInputSelect,
    IHowItWorksStepIcon,
  } from '@/abstractions/interfaces/components/home/sections/how-it-works';

  /* UTILS */
  import { scrollToElement } from '@/utils/functions/functions';

  export default defineComponent({
    name: 'section-how-it-works',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    data(): IHowItWorksData {
      return {
        steps: [
          {
            type: 'content',
            col: {
              class: '',
              default: '12',
              lg: '5',
            },
            card: {
              numberIcon: '$stepOne',
              title: 'Explore Services',
              icon: '$search',
              input: {
                type: 'select',
                select: {
                  items: [],
                  value: null,
                },
              },
              content: {
                type: 'carousel',
                carousel: {
                  items: [],
                },
              },
            },
          },
          {
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              lg: '2',
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
              lg: '5',
            },
            card: {
              numberIcon: '$stepTwo',
              title: 'Book Appointment',
              icon: '$calendar',
              input: {
                type: '',
              },
              content: {
                type: '',
              },
            },
          },
          {
            type: 'spacer',
            col: {
              class: '',
              default: '',
              lg: '5',
            },
          },
          {
            type: 'spacer',
            col: {
              class: '',
              default: '',
              lg: '2',
            },
          },
          {
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              lg: '5',
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
              lg: '5',
            },
            card: {
              numberIcon: '$stepThree',
              title: 'Relax & Enjoy',
              icon: '$relax',
              input: {
                type: '',
              },
              content: {
                type: '',
              },
            },
          },
          {
            type: 'content',
            col: {
              class: 'd-flex justify-center align-center',
              default: '12',
              lg: '2',
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
              lg: '5',
            },
            card: {
              numberIcon: '$stepFour',
              title: 'Maintain',
              icon: '$maintain',
              input: {
                type: '',
              },
              content: {
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
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
      serviceCategories(): IRootServiceCategory[] {
        return this.rootStore.get_service_categories;
      },
      serviceTreatments(): IRootServiceTreatments[] {
        return this.rootStore.get_service_treatments;
      },
      computedSteps: {
        get(): IHowItWorksStepsData[] {
          const isMobile: boolean = this.isMobile;

          return this.steps.map((step: IHowItWorksStepsData) => {
            const stepIsCard: boolean = !!step.card;
            const stepIsIcon: boolean = !!step.icon;

            let colObj: IHowItWorksStepCol;
            let cardObj: IHowItWorksStepCard | undefined;
            let iconObj: IHowItWorksStepIcon | undefined;

            colObj = this.stepColumn(step, stepIsCard, stepIsIcon);

            if (step.type === 'content') {
              if (stepIsCard) cardObj = this.stepCard(step);
              if (stepIsIcon) iconObj = this.stepIcon(step, isMobile);
            }

            return {
              type: step.type,
              col: colObj,
              card: cardObj,
              icon: iconObj,
            };
          });
        },
        set(newSteps: IHowItWorksStepsData[]): void {
          this.steps = newSteps;
        },
      },
    },
    methods: {
      /* Events */
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

      /* Utils */
      stepColumn(
        step: IHowItWorksStepsData,
        isCard: boolean,
        isIcon: boolean
      ): IHowItWorksStepCol {
        let colClass: string[] = [step.col!.class];
        let colDefault: string = step.col!.default;
        let colMd: string | undefined = step.col!.lg;

        if (isIcon) {
          colClass.push(`${this.isMobile ? 'py-8' : 'py-4'}`);
        }

        return {
          class: colClass.join(' '),
          default: colDefault,
          lg: colMd ?? undefined,
        };
      },
      stepCard(step: IHowItWorksStepsData): IHowItWorksStepCard {
        const cardInputType: string = step.card!.input.type;
        const cardContentType: string = step.card!.content.type;

        let cardInputSelect: IHowItWorksStepInputSelect | undefined = undefined;
        let cardInputSelectDefaultValue: string = '';
        if (cardInputType === 'select') {
          cardInputSelectDefaultValue =
            step.card!.input.select!.value ??
            this.serviceCategories[0].category;

          cardInputSelect = {
            items: this.serviceCategories,
            value: cardInputSelectDefaultValue,
          };
        }

        let cardInputCarousel: any | undefined = undefined;
        if (cardContentType === 'carousel') {
          const serviceDropdownValueIndex: number =
            this.serviceCategories.findIndex((serviceCategory) => {
              return cardInputSelectDefaultValue === serviceCategory.category;
            });

          cardInputCarousel = this.serviceTreatments.filter(
            (treatment: IRootServiceTreatments) => {
              return treatment.treatmentCategory === serviceDropdownValueIndex;
            }
          );
        }

        const result = {
          numberIcon: step.card!.numberIcon,
          title: step.card!.title,
          icon: step.card!.icon,
          input: {
            type: step.card!.input.type,
            select: cardInputSelect,
          },
          content: {
            type: step.card!.content.type,
            carousel: cardInputCarousel,
          },
        };

        return result;
      },
      stepIcon(
        step: IHowItWorksStepsData,
        isMobile: boolean
      ): IHowItWorksStepIcon {
        let iconPointer: string = '';

        if (isMobile) {
          iconPointer = '$arrowDown';
        } else {
          const iconSteps = this.steps.filter((s) => s.icon);
          const relativeIndex = iconSteps.findIndex((s) => s === step);
          const totalIcons = iconSteps.length;

          if (relativeIndex === 0) {
            iconPointer = '$arrowRight'; // First icon
          } else if (relativeIndex === totalIcons - 1) {
            iconPointer = '$arrowLeft'; // Last icon
          } else {
            iconPointer = '$arrowDown'; // All others
          }
        }

        return {
          class: step.icon!.class,
          pointer: iconPointer,
        };
      },
      getCarouselCategoryImage(index: number): string {
        return this.serviceCategories[index].image;
      },
      cardContentContainsCarousel(item: IHowItWorksStepsData): boolean {
        return (
          !!item.card?.content.carousel && item.card.content.type === 'carousel'
        );
      },
    },
  });
</script>
