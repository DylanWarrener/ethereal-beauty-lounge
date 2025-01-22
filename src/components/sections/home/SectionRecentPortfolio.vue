<template>
  <CommonSectionMain
    id="section-recent-portfolio"
    title="Recent Portfolio"
    subtitle="A subtitle to describe what is part of this section"
    container-style="border: 4px solid black"
    content-row-style="border: 4px solid red"
    content-col-style="border: 4px solid lightblue"
    section-content-container-style="border: 4px solid black"
    section-content-row-class="ga-4 d-flex flex-wrap"
    section-content-row-style="border: 4px solid red"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <!-- For mobile -->
      <!-- <v-col
        v-if="!isLaptopOrDesktop"
        cols="12"
        :class="[
          'd-flex flex-column',
          `${isLaptopOrDesktop ? 'pa-2 ga-4' : 'pa-2 ga-2'}`,
        ]"
      >
        <v-hover v-for="card in cards" :key="card">
          <template #default="{ isHovering, props }">
            <CommonCard
              card-class="bg-accent-darken-2"
              container-class="pa-4"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              :height="card.height"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="card.image.src"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition mode="out-in">
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2 d-flex flex-column"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    <div
                      class="ga-4 pa-2 rounded-xl d-flex justify-start align-center"
                      style="background-color: rgba(0, 0, 0, 0.3)"
                    >
                      <p class="flex-shrink-1 flex-grow-1">
                        <i>{{ card.review.text }}</i>
                      </p>
                      <div
                        class="flex-shrink-1 flex-grow-0 d-flex justify-center align-center"
                      >
                        <CommonRating
                          color="white"
                          active-color="accent-darken-2"
                          density="compact"
                          size="small"
                          :rating="card.review.rating"
                        ></CommonRating>
                      </div>
                    </div>
                    <div
                      class="h-100 ga-4 d-flex flex-column justify-center align-center"
                    >
                      <div>{{ card.treatment.title }}</div>
                      <div>{{ card.treatment.about }}</div>
                      <v-hover>
                        <template #default="{ isHovering: btnHover, props }">
                          <CommonBtn
                            variant="flat"
                            text="Book treatment"
                            :btn-class="
                              btnHover ? 'bg-primary-1' : 'bg-accent-darken-2'
                            "
                            :to="card.btn.route"
                            v-bind="props"
                            @clicked="portfolio_clickHandler"
                          ></CommonBtn>
                        </template>
                      </v-hover>
                    </div>
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>
      </v-col> -->

      <!-- For PC -->
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="4"
        class="pa-0 flex-shrink-1 flex-grow-1"
        style="border: 4px solid blue"
      >
        Content
        <!-- <v-hover>
          <template #default="{ isHovering: cardHover, props }">
            <CommonCard
              card-class="bg-accent-darken-2"
              container-class="pa-4"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img
                  cover
                  width="100%"
                  height="100%"
                  :src="card.image.src"
                ></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition mode="out-in">
                  <div
                    v-if="cardHover"
                    class="position-absolute w-100 h-100 pa-2 d-flex flex-column"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    <div
                      class="ga-4 pa-2 rounded-xl d-flex justify-start align-center"
                      style="background-color: rgba(0, 0, 0, 0.3)"
                    >
                      <p class="flex-shrink-1 flex-grow-1">
                        <i>{{ card.review.text }}</i>
                      </p>
                      <div
                        class="flex-shrink-1 flex-grow-0 d-flex justify-center align-center"
                      >
                        <CommonRating
                          color="white"
                          active-color="accent-darken-2"
                          density="compact"
                          size="small"
                          :rating="card.review.rating"
                        ></CommonRating>
                      </div>
                    </div>
                    <div
                      class="h-100 ga-4 d-flex flex-column justify-center align-center"
                    >
                      <div>{{ card.treatment.title }}</div>
                      <div>{{ card.treatment.about }}</div>
                      <v-hover>
                        <template #default="{ isHovering: btnHover, props }">
                          <CommonBtn
                            variant="flat"
                            text="Book treatment"
                            :btn-class="
                              btnHover ? 'bg-primary-1' : 'bg-accent-darken-2'
                            "
                            :to="card.btn.route"
                            v-bind="props"
                            @clicked="portfolio_clickHandler"
                          ></CommonBtn>
                        </template>
                      </v-hover>
                    </div>
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover> -->
      </v-col>

      <!-- <v-col cols="12" class="pa-2 d-flex justify-center">
        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonBtn
              variant="flat"
              text="View more"
              :btn-class="isHovering ? 'bg-primary-1' : 'bg-accent-darken-2'"
              v-bind="props"
            ></CommonBtn>
          </template>
        </v-hover>
      </v-col> -->
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  import longOne from '@/assets/img/webp/recent-portfolio/longOne.webp';
  import longTwo from '@/assets/img/webp/recent-portfolio/longTwo.webp';
  import longThree from '@/assets/img/webp/recent-portfolio/longThree.webp';
  import shortOne from '@/assets/img/webp/recent-portfolio/shortOne.webp';
  import shortTwo from '@/assets/img/webp/recent-portfolio/shortTwo.webp';
  import shortThree from '@/assets/img/webp/recent-portfolio/shortThree.webp';

  export default defineComponent({
    name: 'section-recent-portfolio',
    data(): any {
      return {
        cards: [
          {
            height: '300',
            image: {
              src: shortOne,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
          {
            height: '600',
            image: {
              src: longOne,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
          {
            height: '300',
            image: {
              src: shortTwo,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
          {
            height: '600',
            image: {
              src: longTwo,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
          {
            height: '300',
            image: {
              src: shortThree,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
          {
            height: '600',
            image: {
              src: longThree,
            },
            review: {
              text: '"A customers review about the treatment."',
              rating: 3,
            },
            treatment: {
              title: 'Title about what the treatment is.',
              about: 'Info about what the treatment helps with.',
            },
            btn: {
              route: '',
            },
          },
        ],

        portfolio: {
          columnOne: [
            {
              height: '300',
              image: {
                src: shortOne,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
            {
              height: '600',
              image: {
                src: longOne,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
          ],
          columnTwo: [
            {
              height: '600',
              image: {
                src: longTwo,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
            {
              height: '300',
              image: {
                src: shortTwo,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
          ],
          columnThree: [
            {
              height: '300',
              image: {
                src: shortThree,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
            {
              height: '600',
              image: {
                src: longThree,
              },
              review: {
                text: '"A customers review about the treatment."',
                rating: 3,
              },
              treatment: {
                title: 'Title about what the treatment is.',
                about: 'Info about what the treatment helps with.',
              },
              btn: {
                route: '',
              },
            },
          ],
        },
      };
    },
    computed: {
      /* CSS */
      backgroundColour(): string {
        return 'bg-section-6';
      },
      textTitleColour(): string {
        return 'text-section-6-title';
      },
      textSubtitleColour(): string {
        return 'text-section-6-subtitle';
      },

      /* Data */
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
    methods: {
      /* Events */
      portfolio_clickHandler(): void {},
    },
  });
</script>
