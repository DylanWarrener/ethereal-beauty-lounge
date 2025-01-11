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
              variant="outlined"
              rounded="xl"
              density="comfortable"
              max-width="400"
              label="Email address"
              :rules="validationRules"
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
  /* Utils */
  import { notEmpty } from '@/utils/functions/validation/validation';

  export default defineComponent({
    name: 'section-newsletter',
    computed: {
      validationRules(): any {
        return [(value: string): boolean | string => notEmpty(value)];
      },
    },
    methods: {
      /* Events */
      subscribe_clickHandler(): void {},
    },
  });
</script>
