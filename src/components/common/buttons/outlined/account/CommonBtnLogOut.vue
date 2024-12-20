<template>
  <CommonBtnAccount
    v-if="isLoggedIn"
    text="log out"
    icon="$logout"
    @clicked="logout_handleClick"
  />
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-btn-log-out',
    props: {
      class: { type: String, required: false, default: '' },
    },
    setup() {
      const authStore = useAuthStore();
      return { authStore };
    },
    computed: {
      isLoggedIn(): boolean {
        return this.authStore.get_user_isLoggedIn;
      },
    },
    methods: {
      logout_handleClick(): void {
        this.authStore.set_user_isLoggedIn({ isLoggedIn: false });
      },
    },
  });
</script>
