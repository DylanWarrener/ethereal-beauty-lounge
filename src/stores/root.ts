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
    appBar: {
      drawer: false,
    },
  }),
  getters: {
    get_meta_title: (state: IRootState) => state.meta.title,

    /* App bar */
    get_appBar_drawer: (state: IRootState) => state.appBar.drawer,
  },
  actions: {
    set_meta_title(title: string): void {
      this.meta.title = `${this.meta.prefix} - ${title}`;
    },

    /* App bar */
    set_appBar_drawer(drawer: boolean): void {
      this.appBar.drawer = drawer;
    },
  },
});
