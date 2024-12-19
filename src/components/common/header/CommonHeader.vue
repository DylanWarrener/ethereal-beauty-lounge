<template>
  <v-app-bar
    color="primary"
    class="border-b text-secondary-3"
    scroll-behavior="hide"
  >
    <!-- Logo -->
    <v-card
      v-ripple="{ class: 'text-accent-3' }"
      flat
      to="/"
      height="100%"
      min-width="150"
    >
      <v-img
        width="100%"
        height="100%"
        :src="logo"
        alt="Ethereal Beauty Lounge logo"
      ></v-img>
    </v-card>

    <v-divider
      inset
      vertical
      class="mx-2 my-auto"
      style="height: 30px"
    ></v-divider>

    <!-- Navigation for mobile -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-app-bar-nav-icon
          :class="['d-flex d-md-none', isHovering ? 'text-secondary' : '']"
          v-bind="props"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
    </v-hover>

    <!-- Navigation tools -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn icon v-bind="props" class="d-none d-md-flex">
          <v-icon
            icon="$search"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>
    <v-spacer></v-spacer>

    <!-- Navigation for desktop -->
    <CommonNav />
    <v-spacer></v-spacer>

    <v-divider
      inset
      vertical
      class="mx-2 my-auto d-none d-md-flex"
      style="height: 30px"
    ></v-divider>

    <!-- Navigation options -->
    <CommonNavOptions />
  </v-app-bar>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import Logo from '@/assets/img/logo.png';

  export default defineComponent({
    name: 'common-header',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      /* Images */
      logo(): string {
        return Logo;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      drawer: {
        get(): boolean {
          return this.rootStore.get_appBar_drawer;
        },
        set(newValue: boolean): void {
          this.rootStore.set_appBar_drawer(newValue);
        },
      },
    },
  });
</script>

<style lang="scss" scoped></style>
