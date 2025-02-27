<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <CommonBtn
        v-bind="props"
        :is-icon="false"
        :variant="`${isHovering ? 'outlined' : 'flat'}`"
        :btn-class="`${isHovering ? 'bg-cta-hover text-cta' : 'bg-cta'}`"
        :btn-text-class="`${isHovering ? 'text-cta' : 'text-default'}`"
        text="Log in"
        icon="$login"
        icon-class="ml-2"
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
