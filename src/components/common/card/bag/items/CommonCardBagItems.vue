<template>
  <div class="pr-4 ga-4 d-flex flex-column">
    <v-card
      v-for="(item, index) in bagItems"
      :key="index"
      flat
      class="border-thin bg-primary-1 d-flex"
      :min-height="100"
    >
      <v-card-text class="h-100 pa-0 d-flex">
        <v-img :src="item.img.src" :alt="item.img.alt" width="64" cover></v-img>
        <div class="pa-2 d-flex flex-column flex-shrink-1 flex-grow-1">
          <v-card-item class="pa-0 d-flex">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>£{{ item.price * item.quantity }}</v-card-subtitle>
            <!-- <v-card-title class="w-100 text-subtitle-1">
              {{ item.name }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle class="w-100 text-subtitle-2">
              {{ item.price }}
            </v-card-subtitle> -->
          </v-card-item>
          <p class="text-secondary-3">Size: {{ item.size }}</p>
          <p class="text-secondary-3">Quantity: {{ item.quantity }}</p>
          <p :class="[item.inStock ? 'text-success' : 'text-error']">
            {{ item.inStock ? 'In Stock' : 'Not in Stock' }}
          </p>
        </div>
      </v-card-text>
      <v-card-actions class="py-2 d-flex flex-column">
        <v-btn
          icon
          class="text-secondary"
          density="comfortable"
          @click.stop="click_deleteItem(index)"
        >
          <v-icon icon="$delete" size="xs"></v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn>Test</v-btn>
      </v-card-actions>
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
    },
  });
</script>
