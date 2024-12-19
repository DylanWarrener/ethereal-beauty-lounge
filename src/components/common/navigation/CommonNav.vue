<template>
  <div class="ga-2 d-flex">
    <template v-for="(item, index) in navItems">
      <v-hover>
        <template #default="{ isHovering, props }">
          <v-btn
            :key="index"
            active-color="accent-2"
            :to="item.route"
            rounded="xl"
            :class="[
              'd-none d-md-flex',
              isHovering ? 'text-secondary' : 'text-secondary-3',
            ]"
            v-bind="props"
          >
            <span class="text-capitalize">{{ item.text }}</span>
          </v-btn>
        </template>
      </v-hover>
    </template>
  </div>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'common-navigation',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    data() {
      return {
        navItems: [
          {
            text: 'Home',
            route: '/',
          },
          {
            text: 'Packages',
            route: '/packages',
          },
          {
            text: 'Services',
            route: '/services',
          },
          {
            text: 'Products',
            route: '/products',
          },
          {
            text: 'Contact',
            route: '/contact',
          },
          {
            text: 'About',
            route: '/about',
          },
        ],
      };
    },
  });
</script>
