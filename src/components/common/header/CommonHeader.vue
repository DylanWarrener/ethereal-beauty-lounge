<template>
  <v-app-bar
    class="border-b bg-primary text-secondary-3 pl-2 pr-6"
    elevation="0"
    scroll-behavior="hide"
    :density="appBarDensity"
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
  import { mergeProps } from 'vue';

  /* Stores */
  import { useRootStore } from '@/stores/root';

  /* Abstractions */
  import type { TAppBarDensity } from '@/abstractions/types/elements';

  export default defineComponent({
    name: 'common-header',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      /* CSS */
      appBarDensity(): TAppBarDensity {
        let retVal: TAppBarDensity = 'compact';
        if (this.$vuetify.display.mdAndUp) {
          retVal = 'comfortable';
        }
        if (this.$vuetify.display.lgAndUp) {
          retVal = 'default';
        }
        return retVal;
      },

      /* Data */
      isMobile(): boolean {
        return !this.$vuetify.display.smAndUp;
      },
      drawer: {
        get(): boolean {
          return this.rootStore.get_navigation_mobile_drawer;
        },
        set(newValue: boolean): void {
          this.rootStore.set_navigation_mobile_drawer(newValue);
        },
      },
    },
    methods: {
      mergeProps,
    },
  });
</script>
