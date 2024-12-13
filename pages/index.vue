<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/rootStore';
  import { useFireStore } from '@/stores/firestoreStore';

  const { $auth } = useNuxtApp();

  export default {
    setup() {
      const rootStore = useRootStore();
      const firebaseStore = useFireStore();
      return { rootStore, firebaseStore };
    },
    data() {
      return {
        title: 'This is the home page.',
      };
    },
    created(): void {
      this.firebaseStore.monitor_userAuth_state({ $auth });
    },
  };
</script>
