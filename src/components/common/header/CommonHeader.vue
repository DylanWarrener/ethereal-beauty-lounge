<template>
  <v-app-bar
    color="primary"
    class="border-b text-secondary-3"
    scroll-behavior="hide"
    elevation="0"
  >
    <!-- Logo -->

    <v-divider
      inset
      vertical
      class="mx-2 my-auto"
      style="height: 30px"
    ></v-divider>

    <!-- Mobile menu -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-app-bar-nav-icon
          v-if="isMobile"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
    </v-hover>

    <!-- Search -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn icon v-bind="props">
          <v-icon
            icon="$search"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>

    <v-spacer></v-spacer>

    <!-- Navigation -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">Home</span>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/packages"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">Packages</span>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/services"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">Services</span>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/products"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">Products</span>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/contact"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">Contact</span>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="!isMobile"
          to="/about"
          :class="[isHovering ? 'text-secondary' : '']"
          v-bind="props"
        >
          <span class="text-capitalize">About</span>
        </v-btn>
      </template>
    </v-hover>

    <v-spacer></v-spacer>

    <v-divider
      inset
      vertical
      class="mx-2 my-auto"
      style="height: 30px"
    ></v-divider>

    <!-- Options -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn icon to="/basket" v-bind="props">
          <v-icon
            icon="$basket"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn icon to="/account" v-bind="props">
          <v-icon
            icon="$account"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>
  </v-app-bar>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'common-header',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
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
