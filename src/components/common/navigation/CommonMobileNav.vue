<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    class="bg-primary text-secondary-3"
  >
    <v-card tile flat class="h-100 d-flex flex-column">
      <v-toolbar class="bg-primary text-secondary-3">
        <v-spacer></v-spacer>
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-btn icon v-bind="props">
              <v-icon
                icon="$menuBack"
                :class="[isHovering ? 'text-secondary' : '']"
                @click="drawer = !drawer"
              ></v-icon>
            </v-btn>
          </template>
        </v-hover>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
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

      <v-card-actions>
        <v-spacer></v-spacer>
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
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';

  export default defineComponent({
    name: 'common-navigation-mobile',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
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
