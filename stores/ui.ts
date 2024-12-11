import { defineStore } from "pinia";

/* Abstractions */
import type IUIState from "@/abstractions/interfaces/ui/store";
import { EStoreNames } from "@/abstractions/enums/store";

export const useUIStore = defineStore(EStoreNames.UI, {
  state: (): IUIState => ({

  }),
  getters: {

  },
  actions: {

  },
});
