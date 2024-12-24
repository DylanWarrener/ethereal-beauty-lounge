<template>
  <div class="pr-4 ga-4 d-flex flex-column">
    <!-- Actions -->
    <div class="d-flex flex-column">
      <div class="d-flex align-center">
        <v-switch
          v-model="confirmItemDelete_value"
          class="pl-2"
          density="compact"
          color="accent-2"
          label="Confirm item delete?"
        ></v-switch>
      </div>

      <div class="ga-4 d-flex flex-nowrap">
        <CommonBtn
          class="d-flex flex-shrink-1 flex-grow-1"
          text="Delete all"
          @clicked="delete_allBagItems"
        />
        <CommonBtn
          class="d-flex flex-shrink-1 flex-grow-1"
          text="Delete not in-stock"
          @clicked="delete_allBagItems_notInStock"
        />
      </div>
    </div>

    <v-card
      v-for="(item, index) in bag_items"
      :key="index"
      v-touch="{
        left: () => (item.deleting = false),
        right: () => (item.deleting = true),
      }"
      flat
      class="border-thin bg-primary-1 d-flex"
      :min-height="100"
    >
      <v-card-text class="h-100 pa-0 d-flex">
        <!-- Mobile delete bag item -->
        <v-fade-transition hide-on-leave>
          <div
            v-if="item.deleting"
            class="bg-error d-flex d-md-none justify-center align-center"
          >
            <v-btn
              variant="text"
              class="text-primary justify-center"
              icon="$delete"
              @click.stop="delete_bagItem_temporarily_at(index)"
            ></v-btn>
          </div>
        </v-fade-transition>

        <!-- Image -->
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-img
              :src="item.img.src"
              :alt="item.img.alt"
              width="100"
              style="position: relative"
              cover
              v-bind="props"
            >
              <!-- Non-mobile delete bag item -->
              <div
                v-if="isHovering"
                class="h-100 d-none d-md-flex justify-center align-center"
                style="
                  background-color: rgba(var(--v-theme-secondary-rgba), 0.8);
                "
              >
                <v-tooltip location="bottom">
                  <template #activator="{ props }">
                    <v-btn
                      variant="text"
                      icon="$delete"
                      size="small"
                      class="text-primary"
                      v-bind="props"
                      @click.stop="delete_bagItem_temporarily_at(index)"
                    ></v-btn>
                  </template>
                  <span>Delete item</span>
                </v-tooltip>
              </div>
            </v-img>
          </template>
        </v-hover>

        <!-- Content -->
        <v-container fluid class="d-flex flex-column">
          <v-row class="d-flex flex-nowrap flex-shrink-1 flex-grow-0">
            <v-col cols="8" class="pa-0">
              <v-card-title class="pa-0 text-subtitle-1 text-secondary">
                {{ item.name }}
              </v-card-title>
            </v-col>
            <v-col cols="4" class="pa-0 d-flex justify-center align-center">
              <span class="text-subtitle-2 font-weight-bold">
                £{{ Math.ceil(item.quantity * item.price) }}
              </span>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-nowrap flex-shrink-1 flex-grow-1">
            <v-col cols="8" class="pa-0 d-flex flex-column justify-center">
              <span class="text-secondary-3">Size: {{ item.size }}</span>
              <span class="text-secondary-3">
                Quantity: {{ item.quantity }}
              </span>
              <span :class="[item.inStock ? 'text-success' : 'text-error']">
                {{ item.inStock ? 'In Stock' : 'Not in Stock' }}
              </span>
            </v-col>
            <v-col
              cols="4"
              class="pa-0 ga-1 d-flex justify-center align-center"
            >
              <v-btn
                flat
                icon="$remove"
                size="x-small"
                class="bg-primary-1"
                @click.stop="decrease_itemQuantity(index)"
              ></v-btn>
              <v-divider
                inset
                vertical
                class="my-auto"
                style="height: 30px"
              ></v-divider>
              <v-btn
                flat
                icon="$add"
                size="x-small"
                class="bg-primary-1"
                @click.stop="increase_itemQuantity(index)"
              ></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>

  <CommonDialogDeleteConfirm
    v-if="confirmItemDelete_value"
    :drawer="dialog_deleteConfirm_drawer"
    @yes="delete_bagItem"
    @no="dialog_deleteConfirm_drawer = !dialog_deleteConfirm_drawer"
  ></CommonDialogDeleteConfirm>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import { useAuthStore } from '@/stores/auth';
  import type { IRootMenuBagItemState } from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';

  export default defineComponent({
    name: 'common-card-bag',
    setup(): any {
      const rootStore = useRootStore();
      const authStore = useAuthStore();
      return { rootStore, authStore };
    },
    data(): { itemToDelete: IRootMenuBagItemState | null } {
      return {
        itemToDelete: null,
      };
    },
    computed: {
      /* Data */
      bag_items: {
        get(): IRootMenuBagItemState[] {
          return this.rootStore.get_menu_bag_items;
        },
        set(state: IRootMenuBagItemState[]): void {
          this.rootStore.set_menu_bag_items(state);
        },
      },
      dialog_deleteConfirm_drawer: {
        get(): boolean {
          return this.rootStore.get_dialog_deleteConfirm_drawer;
        },
        set(state: boolean) {
          this.rootStore.set_dialog_deleteConfirm_drawer(state);
        },
      },
      confirmItemDelete_value: {
        get(): boolean {
          return this.authStore.get_user_preferences_confirmDeleteItem;
        },
        set(state: boolean): void {
          this.authStore.set_user_preferences_confirmDeleteItem(state);
        },
      },
    },
    methods: {
      /* Events */
      delete_allBagItems(): void {
        this.bag_items = [];
      },
      delete_allBagItems_notInStock(): void {
        this.bag_items = this.bag_items.filter((item) => item.inStock === true);
      },
      delete_bagItem(): void {
        if (this.itemToDelete !== null) {
          const atIndex: number = this.bag_items.findIndex(
            (item: IRootMenuBagItemState) => item.id === this.itemToDelete!.id
          );

          this.bag_items.splice(atIndex, 1);

          if (this.confirmItemDelete_value) {
            this.dialog_deleteConfirm_drawer = false;
          }
        } else {
          /* DO NOT DELETE THE ITEM */
          /* SHOW ERROR MESSAGE */
        }
      },
      delete_bagItem_temporarily_at(index: number): void {
        this.itemToDelete = this.bag_items[index];
        this.dialog_deleteConfirm_drawer = true;
      },
      decrease_itemQuantity(index: number): void {
        let item: IRootMenuBagItemState = this.bag_items[index];

        if (item.quantity === 1) {
          this.itemToDelete = item;

          if (this.confirmItemDelete_value) {
            this.dialog_deleteConfirm_drawer = true;
          } else {
            this.delete_bagItem();
          }
        } else {
          item.quantity -= 1;
        }
      },
      increase_itemQuantity(index: number): void {
        this.bag_items[index].quantity += 1;
      },
    },
  });
</script>
