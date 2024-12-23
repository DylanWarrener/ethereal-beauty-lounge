<template>
  <div class="pr-4 ga-4 d-flex flex-column">
    <v-card
      v-for="(item, index) in bagItems"
      :key="index"
      flat
      class="border-thin bg-primary-1 d-flex"
      :min-height="100"
    >
      <template #default>
        <v-card-text class="h-100 pa-0 d-flex">
          <div>test</div>
          <!-- Non-mobile delete bag item -->
          <v-hover #default="{ isHovering, props }">
            <v-img
              :src="item.img.src"
              :alt="item.img.alt"
              width="100"
              cover
              v-bind="props"
            >
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
                      @click.stop="click_deleteItem(index)"
                    ></v-btn>
                  </template>
                  <span>Delete item</span>
                </v-tooltip>
              </div>
            </v-img>
          </v-hover>

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
                  @click.stop="click_decreaseItemQuantity(index)"
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
                  @click.stop="click_increaseItemQuantity(index)"
                ></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </template>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import type { IRootBagItemsState } from '@/abstractions/interfaces/store/root';

  export default defineComponent({
    name: 'common-card-bag',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    data(): any {
      return {
        showDeleteConfirmDialog: false,
        quantityToggle: null,
      };
    },
    computed: {
      /* Data */
      bagItems: {
        get(): IRootBagItemsState[] {
          return this.rootStore.get_bag_items;
        },
        set(state: IRootBagItemsState[]): void {
          this.rootStore.set_bag_items(state);
        },
      },
    },
    methods: {
      /* Events */
      click_deleteItem(index: number): void {
        this.bagItems.splice(index, 1);
      },
      click_decreaseItemQuantity(index: number): void {
        if (this.bagItems[index].quantity === 1) {
          this.showDeleteConfirmDialog = true;
        } else {
          this.bagItems[index].quantity -= 1;
        }
      },
      click_increaseItemQuantity(index: number): void {
        this.bagItems[index].quantity += 1;
      },
    },
  });
</script>
