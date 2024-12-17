<template>
  <v-app-bar class="border-b" scroll-behavior="hide" elevation="0">
    <template #prepend>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>
    </template>
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
        console.log(this.$vuetify.display.mobile);
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
    methods: {
      toggleDrawer(): void {
        this.drawer = !this.drawer;
      },
    },
  });
</script>

<style lang="scss" scoped></style>
