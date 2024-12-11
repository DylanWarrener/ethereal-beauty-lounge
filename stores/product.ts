import { defineStore } from "pinia";

/* Abstractions */
import type IProductState from "@/abstractions/interfaces/product/store";
import { EStoreNames } from "@/abstractions/enums/store";

export const useProductStore = defineStore(EStoreNames.PRODUCT, {
  state: (): IProductState => ({

  }),
  getters: {

  },
  actions: {

  },
});
