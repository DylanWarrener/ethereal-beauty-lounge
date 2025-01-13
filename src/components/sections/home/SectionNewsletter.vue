<template>
  <CommonCard
    title="Newsletter"
    subtitle="Join our newsletter to stay up to date on features and releases."
    card-class="bg-secondary-2"
  >
    <template #card-content>
      <v-container class="pa-0">
        <v-row dense>
          <v-col cols="12" class="d-flex justify-center">
            <v-text-field
              max-width="400"
              rounded="xl"
              variant="outlined"
              density="comfortable"
              label="Email address"
              :rules="[rules.notEmpty, rules.isEmail]"
            >
              <template #append-inner>
                <CommonBtn
                  text="Subscribe"
                  btn-class="bg-primary text-secondary"
                  @clicked="subscribe_clickHandler"
                />
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <span class="text-body-2">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </CommonCard>
</template>

<script lang="ts">
  /* Abstractions */
  import type { INewsletterData } from '@/abstractions/interfaces/components/home/newsletter';

  /* Utils */
  import { notEmpty, isEmail } from '@/utils/functions/validation/validation';

  export default defineComponent({
    name: 'section-newsletter',
    data(): INewsletterData {
      return {
        rules: {
          notEmpty: (value: string): boolean | string => {
            return notEmpty(value);
          },
          isEmail: (value: string): boolean | string => {
            return isEmail(value);
          },
        },
      };
    },
    methods: {
      /* Events */
      subscribe_clickHandler(): void {},
    },
  });
</script>
