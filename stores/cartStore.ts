import { defineStore } from "pinia";

/* Abstractions */
import type ICartState from "@/abstractions/interfaces/cart/store";
import { EStoreNames } from "@/abstractions/enums/store";

export const useCartStore = defineStore(EStoreNames.CART, {
  state: (): ICartState => ({

  }),
  getters: {

  },
  actions: {

  },
});
