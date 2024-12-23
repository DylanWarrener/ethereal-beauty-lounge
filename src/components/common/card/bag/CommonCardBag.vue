<template>
  <v-card max-height="500" max-width="600" class="pa-4 ga-4 d-flex flex-column">
    <div class="d-flex flex-shrink-1 flex-grow-0">
      <v-card-item class="pa-0">
        <v-card-title>Items in bag: {{ bagItems.length }}</v-card-title>
      </v-card-item>
    </div>

    <v-divider></v-divider>

    <div
      class="ga-2 d-flex flex-column flex-shrink-1 flex-grow-1 overflow-y-auto"
    >
      <span v-if="bagItems.length === 0" class="text-center">
        Your bag is empty.
      </span>
      <CommonCardBagItems v-else />
    </div>

    <v-divider></v-divider>

    <div class="ga-4 d-flex flex-shrink-1 flex-grow-0">
      <CommonBtnOutlinedExternal text="View Bag" />
      <CommonBtnSolidCtaExternal text="Checkout" />
    </div>
  </v-card>
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
    computed: {
      /* Data */
      bagItems(): IRootBagItemsState[] {
        return this.rootStore.get_bag_items;
      },
    },
  });
</script>
