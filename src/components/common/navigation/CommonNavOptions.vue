<template>
  <template v-for="(item, index) in navItems" :key="index">
    <v-btn v-if="!isSignedIn"></v-btn>
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn
          v-if="isSignedIn"
          class="d-none d-md-flex"
          v-bind="props"
          icon
          :to="item.route"
        >
          <v-icon
            :key="index"
            :icon="item.icon"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>
  </template>
</template>

<script lang="ts">
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-navigation-options',
    setup() {
      const authStore = useAuthStore();
      return { authStore };
    },
    data() {
      return {
        navItems: [
          {
            icon: '$basket',
            route: '/basket',
          },
          {
            icon: '$account',
            text: 'Sign in',
            route: '/account',
          },
        ],
      };
    },
    computed: {
      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      isSignedIn(): boolean {
        return authStore;
      },
    },
  });
</script>
