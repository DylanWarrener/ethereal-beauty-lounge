<template>
  <div class="d-flex justify-center align-center ga-2">
    <v-hover>
      <template #default="{ isHovering, props: hoverProps }">
        <v-tooltip location="bottom" text="Basket" class="d-none d-md-flex">
          <template #activator="{ props: tooltipProps }">
            <v-btn
              class="d-none d-sm-flex"
              icon
              to="/basket"
              v-bind="mergeProps(hoverProps, tooltipProps)"
            >
              <v-icon
                icon="$basket"
                :class="[isHovering ? 'text-secondary' : '']"
              ></v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-hover>

    <CommonBtnLogIn class="d-none d-md-flex" />

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
                <v-hover>
                  <template #default="{ isHovering, props }">
                    <v-btn
                      variant="outlined"
                      rounded="xl"
                      :class="['w-100 ', isHovering ? 'text-accent-2' : '']"
                      v-bind="props"
                      @click="isLoggedIn = false"
                    >
                      <span class="mr-2">Log out</span>
                      <v-icon icon="$logout"></v-icon>
                    </v-btn>
                  </template>
                </v-hover>
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
      isLoggedIn: {
        get(): boolean {
          return this.authStore.get_user_isLoggedIn;
        },
        set(newValue: boolean): void {
          this.authStore.set_user_isLoggedIn({ isLoggedIn: newValue });
        },
      },
    },
    methods: {
      mergeProps,
    },
  });
</script>
