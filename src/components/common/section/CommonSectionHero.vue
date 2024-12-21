<template>
  <h1>This is the common hero section</h1>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'common-navigation-mobile',
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
          return this.rootStore.get_navigation_mobile_drawer;
        },
        set(state: boolean): void {
          this.rootStore.set_navigation_mobile_drawer(state);
        },
      },
    },
  });
</script>
