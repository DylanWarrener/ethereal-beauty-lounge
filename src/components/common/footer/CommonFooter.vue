<template>
  <v-container fluid class="bg-accent-darken-2" style="border: 2px solid black">
    <!-- Content -->
    <v-row style="border: 2px solid red">
      <!-- Pages -->
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="border: 2px solid blue"
      >
        <h4>Pages</h4>
      </v-col>

      <!-- Sections -->
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="border: 2px solid blue"
      >
        <h4>Sections</h4>
      </v-col>

      <!-- Socials -->
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="border: 2px solid blue"
      >
        <h4>Socials</h4>
      </v-col>
    </v-row>

    <!-- Information & TOS -->
    <v-row>
      <!-- Copyright -->
      <v-col style="border: 2px solid blue"></v-col>

      <!-- Links -->
      <v-col style="border: 2px solid blue"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import type IFooterData from '@/abstractions/interfaces/footer/footer.js';

  export default defineComponent({
    name: 'common-footer',
    data(): IFooterData {
      return {
        content: {
          newsletter: {
            text: {
              header:
                'Join our newsletter to stay up to date on features and releases.',
              consent:
                'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.',
            },
            input: {
              textfield: {
                label: 'Email address',
              },
              btn: {
                text: 'Subscribe',
              },
            },
          },
          pages: {
            home: {},
            packages: {},
            services: {},
            products: {},
            account: {},
            basket: {},
            contact: {},
            about: {},
          },
          sections: {},
          socials: {
            facebook: {
              url: '',
              icon: '',
            },
            instagram: {
              url: '',
              icon: '',
            },
          },
        },
        information: {},
      };
    },
  });
</script>

<style lang="scss" scoped></style>
