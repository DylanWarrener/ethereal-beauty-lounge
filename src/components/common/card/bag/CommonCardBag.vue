<template>
  <v-card
    width="500"
    max-width="600"
    max-height="700"
    class="pa-4 ga-4 d-flex flex-column"
  >
    <!-- Title -->
    <div class="d-flex flex-shrink-1 flex-grow-0">
      <v-card-item class="pa-0">
        <v-card-title>Items in bag: {{ bag_items.length }}</v-card-title>
        <v-card-subtitle
          v-if="bag_items_someAreOutOfStock"
          class="pa-0 text-error"
        >
          Some items are not in-stock.
        </v-card-subtitle>
      </v-card-item>
    </div>

    <v-divider></v-divider>

    <!-- Bag items -->
    <div
      class="ga-2 d-flex flex-column flex-shrink-1 flex-grow-1 overflow-y-auto"
    >
      <span v-if="bag_items.length === 0" class="text-center">
        Your bag is empty.
      </span>
      <CommonCardBagItems v-else />
    </div>

    <v-divider></v-divider>

    <!-- Actions -->
    <v-container fluid>
      <v-row v-if="bag_items.length > 0">
        <v-col cols="8" class="pa-0">
          <span class="font-weight-bold text-subtitle-1">Total</span>
        </v-col>
        <v-col cols="4" class="pa-0 d-flex justify-center align-center">
          <span class="text-subtitle-1">£{{ bat_items_totalPrice }}</span>
        </v-col>
      </v-row>

      <v-row v-if="bag_items.length > 0">
        <v-col class="pl-0 pb-6">
          <p>Excluding UK Standard Delivery (£4.95)</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pa-0 d-flex justify-start align-center">
          <CommonBtnOutlinedExternal
            text="View Bag"
            to="/bag"
            :disabled="bag_items.length === 0"
          />
        </v-col>
        <v-col class="pa-0 d-flex justify-end align-center">
          <CommonBtnSolidCtaExternal
            text="Checkout"
            to="/bag/checkout"
            :disabled="bag_items.length === 0"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
  import { useRootStore } from '@/stores/root';
  import type { IRootMenuBagItemState } from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';

  export default defineComponent({
    name: 'common-card-bag',
    setup() {
      const rootStore = useRootStore();
      return { rootStore };
    },
    computed: {
      /* Data */
      bag_items_someAreOutOfStock(): boolean {
        return this.bag_items.some((item) => item.inStock === false);
      },
      bat_items_totalPrice(): string {
        const totalPrice: number = this.bag_items.reduce(
          (sum, item) => sum + item.price,
          0
        );

        return totalPrice.toFixed(2);
      },
      bag_items(): IRootMenuBagItemState[] {
        return this.rootStore.get_menu_bag_items;
      },
    },
  });
</script>
