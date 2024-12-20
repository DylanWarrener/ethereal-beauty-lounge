<template>
  <v-card
    v-ripple="{ class: 'text-accent-3' }"
    flat
    :to="logo.route"
    height="100%"
    min-width="150"
  >
    <v-img width="100%" height="100%" :src="src" :alt="logo.alt"></v-img>
  </v-card>
</template>

<script lang="ts">
  import Logo from '@/assets/img/logo.png';

  export default defineComponent({
    name: '',
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
