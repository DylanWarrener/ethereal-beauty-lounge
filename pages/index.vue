<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/rootStore';
  import { useFirebaseStore } from '@/stores/firestoreStore';

  const { $auth } = useNuxtApp();

  export default {
    setup() {
      const rootStore = useRootStore();
      const firebaseStore = useFirebaseStore();
      return { rootStore, firebaseStore };
    },
    data() {
      return {
        title: 'This is the home page.',
      };
    },
    created(): void {
      this.firebaseStore
        .monitor_userAuth_state({ $auth })
        .then(() => this.firebaseStore.get_userFirestore_user());
    },
  };
</script>
