import { defineStore } from 'pinia';

/* Abstractions */
import type IRootState from '@/abstractions/interfaces/root/store';
import { EStoreNames } from '@/abstractions/enums/store';

export const useRootStore = defineStore(EStoreNames.ROOT, {
  state: (): IRootState => ({}),
  getters: {},
  actions: {},
});
