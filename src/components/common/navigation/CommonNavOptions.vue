<template>
  <template v-for="(item, index) in navItems" :key="index">
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn class="d-none d-md-flex" v-bind="props" icon :to="item.route">
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
  export default defineComponent({
    name: 'common-navigation-options',
    data() {
      return {
        navItems: [
          {
            icon: '$basket',
            route: '/basket',
          },
          {
            icon: '$account',
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
    },
  });
</script>
