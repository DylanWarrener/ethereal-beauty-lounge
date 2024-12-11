import { defineStore } from "pinia";

/* Abstractions */
import type IFirestoreState from "@/abstractions/interfaces/cart/store";
import { EStoreNames } from "@/abstractions/enums/store";

export const useFireStore = defineStore(EStoreNames.FIRESTORE, {
  state: (): IFirestoreState => ({

  }),
  getters: {

  },
  actions: {

  },
});
