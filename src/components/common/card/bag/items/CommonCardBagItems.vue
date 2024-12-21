<template>
  <v-card
    v-for="(item, index) in bagItems"
    :key="index"
    width="100%"
    min-height="150"
    class="pa-0"
  >
    <template #default>
      <div class="h-100 d-flex flex-no-wrap">
        <div class="d-flex" style="width: 100px; height: 100%">
          <v-img :src="item.img.src" height="100%" cover></v-img>
        </div>
        <div class="pa-2 d-flex flex-column flex-shrink-1 flex-grow-1">
          <v-card-item class="pa-0">
            <v-card-title class="text-subtitle-1">{{ item.name }}</v-card-title>
          </v-card-item>
          <p class="text-secondary-3">Size: {{ item.size }}</p>
          <p class="text-secondary-3">Quantity: {{ item.quantity }}</p>
        </div>
      </div>
    </template>
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
