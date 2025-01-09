<template>
  <CommonCard
    title="Newsletter"
    subtitle="Join our newsletter to stay up to date on features and releases."
    card-class="ma-4 bg-accent-1"
  >
    <template #card-content>
      <v-container class="pa-0">
        <v-row dense>
          <v-col cols="12" class="d-flex justify-center">
            <v-text-field
              variant="outlined"
              density="comfortable"
              max-width="400"
              :label="content.input.textfield.label"
              :rules="[validationRules]"
            >
              <template #append-inner>
                <CommonBtn
                  text="Subscribe"
                  btn-class="bg-primary text-secondary"
                />
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <span class="text-body-2">
              {{ content.text.consent }}
            </span>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </CommonCard>
</template>

<script lang="ts">
  /* Abstractions */
  import type INewsletterData from '@/abstractions/interfaces/components/home/newsletter';
  import type { INewsletterValidationRules } from '@/abstractions/interfaces/components/home/newsletter';

  /* Utils */
  import { notEmpty } from '@/utils/functions/validation/validation';

  export default defineComponent({
    name: 'section-newsletter',
    data(): INewsletterData {
      return {
        content: {
          input: {
            textfield: {
              label: 'Email address',
            },
          },
          text: {
            consent:
              'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.',
          },
        },
      };
    },
    computed: {
      validationRules(): any[] {
        return [this.notEmpty];
      },
    },
    methods: {
      /* Validation */
      notEmpty(value: string): boolean | string {
        return notEmpty(value);
      },
    },
  });
</script>
