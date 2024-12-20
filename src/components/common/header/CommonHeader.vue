<template>
  <v-app-bar
    color="primary"
    :class="['border-b', 'text-secondary-3', 'px-2']"
    scroll-behavior="hide"
  >
    <!-- Logo -->
    <CommonCardLogo />

    <v-divider
      inset
      vertical
      class="mx-2 my-auto d-none d-sm-flex"
      style="height: 30px"
    ></v-divider>
    <v-spacer class="d-flex d-sm-none"></v-spacer>

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

    <v-spacer class="d-none d-sm-flex d-md-none"></v-spacer>

    <!-- Navigation tools -->
    <CommonNavTools />
    <v-spacer class="d-none d-md-flex"></v-spacer>

    <!-- Navigation for non-mobile -->
    <CommonNav />
    <v-spacer class="d-none d-md-flex"></v-spacer>

    <v-divider
      inset
      vertical
      class="mx-2 my-auto d-none d-sm-flex"
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
