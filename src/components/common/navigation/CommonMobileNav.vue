<template>
  <v-navigation-drawer v-if="isMobile" v-model="drawer">
    <v-toolbar class="primary"></v-toolbar>
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
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
