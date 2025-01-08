<template>
  <div class="d-flex justify-center align-center ga-2">
    <ClientOnly>
      <v-hover>
        <template #default="{ isHovering, props: hoverProps }">
          <v-tooltip location="bottom" text="Your Bag" class="d-none d-md-flex">
            <template #activator="{ props: tooltipProps }">
              <v-btn
                class="d-none d-sm-flex"
                icon
                v-bind="mergeProps(hoverProps, tooltipProps)"
              >
                <v-icon
                  icon="$bag"
                  :class="[isHovering ? 'text-secondary' : '']"
                ></v-icon>
                <v-menu
                  v-model="menuDrawer"
                  activator="parent"
                  class="d-none d-sm-flex"
                  :close-on-content-click="false"
                >
                  <CommonCardBag />
                </v-menu>
              </v-btn>
            </template>
          </v-tooltip>
        </template>
      </v-hover>
    </ClientOnly>

    <CommonBtnLogIn btn-class="d-none d-md-flex" />

    <v-hover v-if="isLoggedIn">
      <template #default="{ isHovering, props: profileHoverProps }">
        <v-btn
          icon
          size="x-small"
          :class="[
            'd-none d-sm-flex bg-primary-3',
            isHovering ? 'bg-accent-2 text-white' : '',
          ]"
          v-bind="profileHoverProps"
        >
          <span>DW</span>
          <v-menu activator="parent">
            <v-list class="pa-2">
              <div class="pb-2">
                <v-list-item
                  rounded="xl"
                  title="Settings"
                  to="/account/settings"
                  color="accent-2"
                >
                  <template #prepend>
                    <v-icon icon="$settings"></v-icon>
                  </template>
                </v-list-item>
              </div>
              <v-divider></v-divider>
              <div class="pt-2">
                <CommonBtnLogOut btn-class="w-100" />
              </div>
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-hover>
  </div>
</template>

<script lang="ts">
  import { mergeProps } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { useAuthStore } from '@/stores/auth';

  export default defineComponent({
    name: 'common-navigation-options',
    setup() {
      const rootStore = useRootStore();
      const authStore = useAuthStore();
      return { rootStore, authStore };
    },
    computed: {
      /* Data */
      isMobile(): boolean {
        return !this.$vuetify.display.smAndUp;
      },
      isLoggedIn: {
        get(): boolean {
          return this.authStore.get_user_isLoggedIn;
        },
        set(state: boolean): void {
          this.authStore.set_user_isLoggedIn(state);
        },
      },
      menuDrawer: {
        get(): boolean {
          return this.rootStore.get_menu_bag_drawer;
        },
        set(state: boolean): void {
          this.rootStore.set_menu_bag_drawer(state);
        },
      },
    },
    watch: {
      isMobile(state: boolean): void {
        if (state) this.menuDrawer = false;
      },
    },
    methods: {
      mergeProps,
    },
  });
</script>
