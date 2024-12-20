<template>
  <CommonBtnAccount
    v-if="!isLoggedIn"
    text="log in"
    icon="$login"
    @clicked="login_handleClick"
  />
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-btn-log-in',
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
      login_handleClick(): void {
        this.authStore.set_user_isLoggedIn({ isLoggedIn: true });
      },
    },
  });
</script>
