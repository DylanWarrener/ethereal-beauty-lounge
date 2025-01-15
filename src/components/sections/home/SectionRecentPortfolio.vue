<template>
  <CommonSectionMain
    id="section-recent-portfolio"
    title="Recent Portfolio"
    subtitle="A subtitle to describe what is part of this section"
    card-background-colour="bg-white"
    heading-title-class="text-primary-3"
  >
    <template #section-content>
      <v-col cols="12" lg="4" class="pa-2 ga-4 d-flex flex-column">
        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="300"
              card-class="bg-accent-darken-2"
              container-class="pa-4"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgShortOne"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>

        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="600"
              card-class="bg-accent-darken-2"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgLongOne"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>
      </v-col>

      <v-col cols="12" lg="4" class="pa-2 ga-4 d-flex flex-column">
        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="600"
              card-class="bg-accent-darken-2"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgLongTwo"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>

        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="300"
              card-class="bg-accent-darken-2"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgShortTwo"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>
      </v-col>

      <v-col cols="12" lg="4" class="pa-2 ga-4 d-flex flex-column">
        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="300"
              card-class="bg-accent-darken-2"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgShortThree"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>

        <v-hover>
          <template #default="{ isHovering, props }">
            <CommonCard
              height="600"
              card-class="bg-accent-darken-2"
              img-row-class="h-100"
              img-col-class="h-100 pa-0"
              v-bind="props"
            >
              <template #card-img>
                <v-img cover class="h-100" :src="imgLongThree"></v-img>
              </template>
              <template #card-transition>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="position-absolute w-100 h-100 pa-2"
                    style="z-index: 99; background-color: rgba(0, 0, 0, 0.25)"
                  >
                    Content
                  </div>
                </v-expand-transition>
              </template>
            </CommonCard>
          </template>
        </v-hover>
      </v-col>
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
        toggle: false,
      };
    },
    computed: {
      /* Images */
      imgLongOne(): string {
        return longOne;
      },
      imgLongTwo(): string {
        return longTwo;
      },
      imgLongThree(): string {
        return longThree;
      },
      imgShortOne(): string {
        return shortOne;
      },
      imgShortTwo(): string {
        return shortTwo;
      },
      imgShortThree(): string {
        return shortThree;
      },
    },
  });
</script>
