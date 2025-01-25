<template>
  <v-hover v-if="!isLoggedIn">
    <template #default="{ isHovering, props }">
      <CommonBtn
        v-bind="props"
        variant="flat"
        text="Log in"
        icon="$login"
        icon-class="ml-2"
        :class="[
          isHovering ? 'text-black bg-cta-hover' : 'text-white bg-cta',
          btnClass,
        ]"
        @clicked="login_handleClick"
      ></CommonBtn>
    </template>
  </v-hover>
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-btn-log-in',
    props: {
      btnClass: { type: String, required: false },
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
        this.authStore.set_user_isLoggedIn(true);
      },
    },
  });
</script>
