<template>
  <ClientOnly>
    <v-hover v-if="!isLoggedIn">
      <template #default="{ isHovering, props }">
        <v-btn
          rounded="xl"
          variant="outlined"
          :class="[btnClass, isHovering ? 'text-accent-2' : '']"
          v-bind="props"
          @click="login_handleClick"
        >
          <span class="mr-2">Log in</span>
          <v-icon icon="$login"></v-icon>
        </v-btn>
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
        this.authStore.set_user_isLoggedIn({ isLoggedIn: true });
      },
    },
  });
</script>
