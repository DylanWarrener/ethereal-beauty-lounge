<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
  import { useRootStore } from '~/src/stores/rootStore';
  import { useAuthStore } from '~/src/stores/authStore';

  //const { $auth } = useNuxtApp();

  export default {
    setup() {
      const rootStore = useRootStore();
      const authStore = useAuthStore();
      return { rootStore, authStore };
    },
    data() {
      return {
        title: 'This is the home page.',
      };
    },
    created(): void {
      //this.authStore.monitor_userAuth_state({ $auth });
    },
  };
</script>
