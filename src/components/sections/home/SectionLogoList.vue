<template>
  <CommonCard
    id="section-logo-list"
    title="We have already supported other businesses"
    card-class="bg-white"
    container-class="pa-1"
    heading-col-class="pa-0"
    heading-title-class="text-center text-h5"
    content-class="d-flex justify-space-evenly"
    elevation="0"
  >
    <template #card-content>
      <template v-for="(logo, index) in logoList" :key="index">
        <CommonCardLogo
          card-width="128"
          card-height="128"
          :img-src="logo.src"
          :img-alt="logo.alt"
          :to="logo.route"
        ></CommonCardLogo>
      </template>
    </template>
  </CommonCard>
</template>

<script lang="ts">
  import Logo from '@/assets/img/png/logo.png';

  export default defineComponent({
    name: 'section-logo-list',
    computed: {
      /* Data */
      logoList(): any[] {
        return [
          {
            route: '/',
            src: Logo,
            alt: 'Ethereal Beauty Lounge logo',
          },
          {
            route: '/',
            src: Logo,
            alt: 'Ethereal Beauty Lounge logo',
          },
          {
            route: '/',
            src: Logo,
            alt: 'Ethereal Beauty Lounge logo',
          },
          {
            route: '/',
            src: Logo,
            alt: 'Ethereal Beauty Lounge logo',
          },
          {
            route: '/',
            src: Logo,
            alt: 'Ethereal Beauty Lounge logo',
          },
        ];
      },
    },
  });
</script>
