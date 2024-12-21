<template>
  <ClientOnly>
    <v-hover v-if="isLoggedIn">
      <template #default="{ isHovering, props }">
        <v-btn
          rounded="xl"
          variant="outlined"
          size="large"
          :class="[btnClass, isHovering ? 'text-accent-2' : '']"
          v-bind="props"
          @click="logout_handleClick"
        >
          <span class="mr-2">Log out</span>
          <v-icon icon="$logout"></v-icon>
        </v-btn>
      </template>
    </v-hover>
  </ClientOnly>
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-btn-log-out',
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
      logout_handleClick(): void {
        this.authStore.set_user_isLoggedIn({ isLoggedIn: false });
      },
    },
  });
</script>
