<template>
  <VLayout>
    <MobileSideBarNav />
    <Header />
    <VMain>
      <NuxtPage />
    </VMain>
    <Footer />
  </VLayout>
</template>

<script lang="ts">
  export default {
    created(): void {
      //this.authStore.monitor_userAuth_state({ $auth });
    },
  };
</script>
