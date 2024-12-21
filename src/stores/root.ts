import { defineStore } from 'pinia';

/* ABSTRACTIONS */
import { type IRootState } from '@/abstractions/interfaces/store/root';
import { EStoreNames } from '@/abstractions/enums/store';

export const useRootStore = defineStore(EStoreNames.ROOT, {
  state: (): IRootState => ({
    meta: {
      prefix: 'EBL',
      title: '',
    },
    navigation: {
      mobile: {
        drawer: false,
      },
    },
  }),
  getters: {
    get_meta_title: (state: IRootState) => state.meta.title,

    get_navigation_mobile_drawer: (state: IRootState) =>
      state.navigation.mobile.drawer,
  },
  actions: {
    /* Meta */
    set_meta_title(state: string): void {
      this.meta.title = `${this.meta.prefix} - ${state}`;
    },

    /* Navigation */
    set_navigation_mobile_drawer(state: boolean): void {
      this.navigation.mobile.drawer = state;
    },
  },
});
