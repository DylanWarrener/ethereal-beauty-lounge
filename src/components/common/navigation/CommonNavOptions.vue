<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-btn
        v-for="(item, index) in navItems"
        v-bind="props"
        :key="index"
        icon
        :to="item.route"
      >
        <v-icon
          :icon="item.icon"
          :class="[isHovering ? 'text-secondary' : '']"
        ></v-icon>
      </v-btn>
    </template>
  </v-hover>
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
  });
</script>
