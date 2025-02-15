<template>
  <CommonSectionMain
    id="section-get-in-touch"
    title="Get In Touch"
    subtitle="Call us or complete the form. We endeavour to answer all enquiries within 24 hours on business days."
    card-class="pa-0"
    container-class="pa-0"
    section-content-container-style="border: 4px solid black"
    section-content-row-class="ga-8"
    :card-background-colour="backgroundColour"
    :heading-title-class="textTitleColour"
    :heading-subtitle-class="textSubtitleColour"
  >
    <template #section-content>
      <v-col cols="12">
        <v-row dense>
          <!-- Email -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$email" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="contact@etherealbeautylounge.co.uk" />
              </v-col>
            </v-row>
          </v-col>

          <!-- Phone -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$phone" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="+44 (0)7778 564553" />
              </v-col>
            </v-row>
          </v-col>

          <!-- Office -->
          <v-col cols="12" xl="4">
            <v-row dense class="d-flex">
              <v-col
                cols="12"
                sm="2"
                lg="1"
                xl="2"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center align-center"
              >
                <CommonIcon icon="$office" color="inverted" />
              </v-col>
              <v-col
                cols="fill"
                class="flex-shrink-1 flex-grow-1 d-flex justify-center justify-sm-start align-center"
              >
                <CommonParagraph text="PE4 5BH" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-row dense cols="12" class="pa-0 ma-0 d-flex">
        <!-- Form -->
        <v-col cols="12" xl="6" class="">
          <CommonCard card-class="bg-transparent" elevation="0">
            <template #card-content>
              <CommonForm @model="">
                <template #form-content>
                  <v-row dense class="flex-shrink-1 flex-grow-1">
                    <v-col
                      v-for="(item, index) in form.inputs"
                      :key="index"
                      :cols="item.cols.default"
                      :sm="item.cols.sm"
                      :lg="item.cols.lg"
                    >
                      <CommonTextFieldInput
                        v-if="item.type === 'textFieldInput'"
                        variant="outlined"
                        :class="item.class"
                        :label="item.label"
                        :rules="item.rules"
                      />
                      <CommonSelectInput
                        v-if="item.type === 'selectInput'"
                        variant="outlined"
                        :class="item.class"
                        :label="item.label"
                        :items="item.items"
                        :rules="item.rules"
                      />
                      <CommonTextAreaInput
                        v-if="item.type === 'textAreaInput'"
                        variant="outlined"
                        :class="item.class"
                        :label="item.label"
                        :rules="item.rules"
                      />
                    </v-col>
                    <v-col cols="12" class="pa-0 d-flex">
                      <v-spacer></v-spacer>
                      <CommonBtn text="submit" type="submit" />
                    </v-col>
                  </v-row>
                </template>
              </CommonForm>
            </template>
          </CommonCard>
        </v-col>

        <!-- Picture -->
        <v-col cols="12" xl="6" class="d-none d-xl-flex">Picture</v-col>
      </v-row>
    </template>
  </CommonSectionMain>
</template>

<script lang="ts">
  import { EInputRuleTypes } from '@/abstractions/enums/input';

  /* Assets */
  import HeroBackgroundMobile from '@/assets/img/webp/hero-section/hero-background-mobile.webp';
  import HeroBackgroundNonMobile from '@/assets/img/webp/hero-section/hero-background-non-mobile.webp';
  import HeroImgMobile from '@/assets/img/webp/hero-section/hero-image.webp';
  import HeroImgNonMobile from '@/assets/img/webp/hero-section/hero-image.webp';

  export default defineComponent({
    name: 'section-get-in-touch',
    data(): any {
      return {
        form: {
          inputs: [
            {
              // Full name
              type: 'textFieldInput',
              cols: {
                default: '12',
                sm: '12',
                lg: '4',
              },
              class: '',
              label: 'Full name',
              rules: this.validationRules('full_name'),
            },
            {
              // Email address
              type: 'textFieldInput',
              cols: {
                default: '12',
                sm: '12',
                lg: '4',
              },
              class: '',
              label: 'Email address',
              rules: this.validationRules('email_address'),
            },
            {
              // Phone number
              type: 'textFieldInput',
              cols: {
                default: '12',
                sm: '12',
                lg: '4',
              },
              class: '',
              label: 'Phone number',
              rules: this.validationRules('phone_number'),
            },
            {
              // Preferred contact method
              type: 'selectInput',
              cols: {
                default: '12',
                sm: '6',
                lg: '6',
              },
              class: '',
              label: 'Preferred contact method',
              items: ['Email', 'Phone', 'No preference'],
              rules: this.validationRules('preferred_contact_method'),
            },
            {
              // Service of interest
              type: 'selectInput',
              cols: {
                default: '12',
                sm: '6',
                lg: '6',
              },
              class: '',
              label: 'Service of interest',
              items: ['Facial treatments', 'Body treatments'],
              rules: this.validationRules('service_of_interest'),
            },
            {
              // Message
              type: 'textAreaInput',
              cols: {
                default: '12',
                sm: '12',
                lg: '12',
              },
              class: '',
              label: 'Message',
              rules: this.validationRules('message'),
            },
          ],
          actions: {
            submit: {
              value: null,
            },
          },
        },
      };
    },
    computed: {
      /* Css */
      backgroundColour(): string {
        return 'bg-section-8';
      },
      textTitleColour(): string {
        return 'text-section-title';
      },
      textSubtitleColour(): string {
        return 'text-section-subtitle';
      },

      /* Images */
      heroBackgroundMobile(): string {
        return HeroBackgroundMobile;
      },
      heroBackgroundNonMobile(): string {
        return HeroBackgroundNonMobile;
      },
      heroImgMobile(): string {
        return HeroImgMobile;
      },
      heroImgNonMobile(): string {
        return HeroImgNonMobile;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.smAndDown;
      },
      isLaptopOrDesktop(): boolean {
        return this.$vuetify.display.lgAndUp;
      },
    },
    methods: {
      /* Events */
      submitForm_clickHandler(): void {
        debugger;
        console.log('Submitting form');
      },

      /* Validation */
      notEmpty(value: string | undefined | null): boolean | string {
        return value ? true : 'The value must not be empty!';
      },
      emailIsValid(value: string): boolean | string {
        return (
          /^([^\s@]+@[^\s@]+\.[^\s@]+)$/g.test(value) || 'Email must be valid.'
        );
      },
      validationRules(inputType: string): any {
        let retVal: any = [this.notEmpty];
        switch (inputType) {
          case EInputRuleTypes.FULL_NAME:
            break;
          case EInputRuleTypes.EMAIL_ADDRESS:
            retVal.push(this.emailIsValid);
            break;
          case EInputRuleTypes.PHONE_NUMBER:
            break;
          case EInputRuleTypes.PREFERRED_CONTACT_METHOD:
            break;
          case EInputRuleTypes.SERVICE_OF_INTEREST:
            break;
          case EInputRuleTypes.MESSAGE:
            break;
        }
        return retVal;
      },
    },
  });
</script>

<style lang="scss" scoped>
  #get-in-touch-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~/assets/img/webp/hero-section/hero-image.webp');
    background-position: center center;
  }
</style>
