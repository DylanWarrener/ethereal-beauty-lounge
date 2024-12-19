<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    class="pa-0 ma-0 bg-primary text-secondary-3"
    style="height: 100vh"
  >
    <v-card class="pa-0 ma-0 h-100 d-flex flex-column">
      <v-toolbar
        class="px-1 ma-0 d-flex flex-shrink-1 flex-grow-0 bg-primary text-secondary-3"
      >
        <template #prepend>
          <v-card flat min-width="150" height="100%">
            <v-img
              width="100%"
              height="100%"
              :src="logo"
              alt="Ethereal Beauty Lounge logo"
            ></v-img>
          </v-card>
        </template>
        <template #append>
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-btn icon v-bind="props" @click="drawer = !drawer">
                <v-icon
                  icon="$menuBack"
                  :class="[isHovering ? 'text-secondary' : '']"
                ></v-icon>
              </v-btn>
            </template>
          </v-hover>
        </template>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text class="pa-2 d-flex flex-column flex-shrink-1 flex-grow-1">
        <v-list nav selectable>
          <v-list-item exact color="accent-2" rounded="xl" title="Home" to="/">
            <template #prepend>
              <v-icon icon="$home"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            color="accent-2"
            rounded="xl"
            title="Packages"
            to="/packages"
          >
            <template #prepend>
              <v-icon icon="$packages"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            rounded="xl"
            title="Services"
            color="accent-2"
            to="/services"
          >
            <template #prepend>
              <v-icon icon="$services"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            rounded="xl"
            title="Products"
            color="accent-2"
            to="/products"
          >
            <template #prepend>
              <v-icon icon="$products"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            rounded="xl"
            title="Contact"
            color="accent-2"
            to="/contact"
          >
            <template #prepend>
              <v-icon icon="$contact"></v-icon>
            </template>
          </v-list-item>
          <v-list-item rounded="xl" title="About" color="accent-2" to="/about">
            <template #prepend>
              <v-icon icon="$about"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            rounded="xl"
            title="Basket"
            color="accent-2"
            to="/basket"
          >
            <template #prepend>
              <v-icon icon="$basket"></v-icon>
            </template>
          </v-list-item>
          <v-list-item
            rounded="xl"
            title="Account"
            color="accent-2"
            to="/account"
          >
            <template #prepend>
              <v-icon icon="$account"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-0 d-flex flex-column flex-shrink-1 flex-grow-0">
        <v-container fluid class="pa-2">
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
              <v-hover>
                <template #default="{ isHovering, props }">
                  <v-btn
                    variant="outlined"
                    :class="[isHovering ? 'bg-accent-2' : '']"
                    v-bind="props"
                  >
                    <span class="mr-2">Log out</span>
                    <v-icon icon="$logout"></v-icon>
                  </v-btn>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import Logo from '@/assets/img/logo.png';

  export default defineComponent({
    name: 'common-navigation-mobile',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      /* Images */
      logo(): string {
        return Logo;
      },

      /* Data */
      isMobile(): boolean {
        return this.$vuetify.display.mobile;
      },
      drawer: {
        get(): boolean {
          return this.rootStore.get_appBar_drawer;
        },
        set(newValue: boolean): void {
          this.rootStore.set_appBar_drawer(newValue);
        },
      },
    },
    watch: {
      isMobile(newValue: boolean): void {
        if (!newValue) this.drawer = false;
      },
    },
  });
</script>

<style lang="scss" scoped></style>
