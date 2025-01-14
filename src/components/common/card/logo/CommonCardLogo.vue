<template>
  <v-card
    flat
    class="bg-white"
    :to="logo.route"
    :width="cardWidth"
    :height="cardHeight"
    min-width="150"
  >
    <v-img width="100%" height="100%" :src="src" :alt="logo.alt"></v-img>
  </v-card>
</template>

<script lang="ts">
  import Logo from '@/assets/img/png/logo.png';

  export default defineComponent({
    name: 'common-card-logo',
    props: {
      cardWidth: { type: String, required: false },
      cardHeight: { type: String, required: false, default: '100%' },
      imgWidth: { type: String, required: false },
      imgHeight: { type: String, required: false },
    },
    data() {
      return {
        logo: {
          route: '/',
          alt: 'Ethereal Beauty Lounge logo',
        },
      };
    },
    computed: {
      /* Images */
      src(): string {
        return Logo;
      },
    },
  });
</script>
