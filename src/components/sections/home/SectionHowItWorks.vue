<template>
  <CommonSectionMain
    id="section-how-it-works"
    title="How it Works"
    subtitle="A simple, hassle-free way to book your beauty treatments."
    section-content-row-class="ga-4"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <template v-for="(item, index) in steps" :key="index">
        <v-col cols="12">
          <CommonCard variant="outlined" card-class="text-cta">
            <template #card-toolbar>
              <CommonToolbar
                color="primary-tint-2"
                class="rounded-lg"
                :title="`${index + 1}. ${item.title}`"
              >
                <template #toolbar-options>
                  <v-spacer></v-spacer>
                  <CommonIcon :icon="item.icon"></CommonIcon>
                </template>
              </CommonToolbar>
            </template>
            <template #card-content>
              <v-container
                fluid
                class="pa-2 pa-sm-4"
                style="border: 2px solid black"
              >
                <v-row dense style="border: 2px solid red">
                  <v-col style="border: 2px solid blue">Content</v-col>
                </v-row>
              </v-container>
            </template>
          </CommonCard>
        </v-col>
        <v-col
          v-if="index !== steps.length - 1"
          class="pa-0 d-flex flex-column justify-center align-center"
        >
          <CommonIcon icon="$arrowDown"></CommonIcon>
        </v-col>
      </template>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'section-how-it-works',
    data() {
      return {
        steps: [
          {
            title: 'Explore our Services',
            icon: '$search',
          },
          {
            title: 'Book your Appointment',
            icon: '$calendar',
          },
          {
            title: 'Relax & Enjoy',
            icon: '$calendar',
          },
          {
            title: 'Keep on Top',
            icon: '$calendar',
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
  });
</script>
