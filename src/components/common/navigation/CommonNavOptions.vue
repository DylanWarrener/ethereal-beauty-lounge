<template>
  <div class="d-flex justify-center align-center ga-2">
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-btn v-bind="props" class="d-none d-sm-flex" icon to="/basket">
          <v-icon
            icon="$basket"
            :class="[isHovering ? 'text-secondary' : '']"
          ></v-icon>
        </v-btn>
      </template>
    </v-hover>

    <v-hover v-if="!isLoggedIn">
      <template #default="{ isHovering, props }">
        <v-btn
          variant="outlined"
          to="/logIn"
          :class="[
            'd-none d-sm-flex d-md-none',
            isHovering ? 'text-accent-2' : '',
          ]"
          v-bind="props"
        >
          <span class="mr-2">Log in</span>
          <v-icon icon="$login"></v-icon>
        </v-btn>
      </template>
    </v-hover>

    <v-hover v-if="!isLoggedIn">
      <template #default="{ isHovering, props }">
        <v-btn
          icon
          to="/logIn"
          :class="['d-none d-md-flex', isHovering ? 'text-accent-2' : '']"
          v-bind="props"
        >
          <v-icon icon="$login"></v-icon>
        </v-btn>
      </template>
    </v-hover>

    <v-menu v-if="isLoggedIn && isMobile">
      <template #activator="{ props: menuProps }">
        <v-hover>
          <template #default="{ isHovering, props: hoverProps }">
            <v-btn
              icon
              size="x-small"
              :class="[
                'd-none d-sm-flex bg-primary-3',
                isHovering ? 'bg-accent-2 text-white' : '',
              ]"
              v-bind="mergeProps(menuProps, hoverProps)"
              text="DW"
            ></v-btn>
          </template>
        </v-hover>
      </template>
      <v-list class="pa-2">
        <v-list-item
          rounded="xl"
          title="Contact"
          color="accent-2"
          to="/account"
        >
          <template #prepend>
            <v-icon icon="$contact"></v-icon>
          </template>
        </v-list-item>
        <v-divider class="pt-2"></v-divider>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn
              variant="outlined"
              :class="['d-flex d-md-none', isHovering ? 'text-accent-2' : '']"
              v-bind="props"
              @click="isLoggedIn = true"
            >
              <span class="mr-2">Log in</span>
              <v-icon icon="$login"></v-icon>
            </v-btn>
          </template>
        </v-hover>
      </v-list>
    </v-menu>

    <v-menu v-if="isLoggedIn && !isMobile">
      <template #activator="{ props: menuProps }">
        <v-hover>
          <template #default="{ isHovering, props: hoverProps }">
            <v-btn
              icon
              size="x-small"
              to="/account"
              :class="[
                'd-none d-sm-flex bg-primary-3',
                isHovering ? 'bg-accent-2 text-white' : '',
              ]"
              v-bind="mergeProps(menuProps, hoverProps)"
              text="DW"
            ></v-btn>
          </template>
        </v-hover>
      </template>
    </v-menu>
  </div>
</template>

<script lang="ts">
  import { mergeProps } from 'vue';
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-navigation-options',
    setup() {
      const authStore = useAuthStore();
      return { authStore };
    },
    computed: {
      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      isLoggedIn(): boolean {
        return this.authStore.get_user_isLoggedIn;
      },
    },
    methods: {
      mergeProps,
    },
  });
</script>
