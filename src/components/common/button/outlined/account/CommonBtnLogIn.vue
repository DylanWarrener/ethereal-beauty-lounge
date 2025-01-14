<template>
  <ClientOnly v-if="!isLoggedIn">
    <v-hover>
      <template #default="{ isHovering, props }">
        <CommonBtn
          v-bind="props"
          variant="flat"
          text="Log in"
          icon="$login"
          icon-class="ml-2"
          :class="[
            'text-white',
            isHovering ? 'bg-primary-1' : 'bg-accent-darken-2',
            btnClass,
          ]"
          @clicked="login_handleClick"
        ></CommonBtn>
      </template>
    </v-hover>
  </ClientOnly>
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
