<template>
  <CommonSectionMain
    id="section-newsletter"
    title="Newsletter"
    subtitle="Join our newsletter to stay up to date with new services, products, and discounts."
    card-background-colour="bg-secondary-2"
  >
    <template #section-content>
      <v-col cols="12" class="d-flex justify-center">
        <CommonTextField
          max-width="400"
          rounded="xl"
          variant="outlined"
          density="comfortable"
          label="Email address"
          :rules="[rules.notEmpty, rules.isEmail]"
        >
          <template #append-inner>
            <v-hover>
              <template #default="{ isHovering, props }">
                <CommonBtn
                  text="Subscribe"
                  :class="[
                    'text-white',
                    isHovering ? 'bg-primary-1' : 'bg-accent-darken-2',
                  ]"
                  v-bind="props"
                  @clicked="subscribe_clickHandler"
                />
              </template>
            </v-hover>
          </template>
        </CommonTextField>
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
        <span class="text-body-2">
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </span>
      </v-col>
    </template>
  </CommonSectionMain>
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
