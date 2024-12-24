import { defineStore } from 'pinia';

/* ABSTRACTIONS */
import type { IRootState } from '@/abstractions/interfaces/store/root/root';
import type { IRootMenuBagItemState } from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';
import { EStoreNames } from '@/abstractions/enums/store';

import TempBagItemImg from '@/assets/img/hero-section/mobile/background-image-1.webp';

export const useRootStore = defineStore(EStoreNames.ROOT, {
  state: (): IRootState => ({
    page: {
      common: {
        meta: {
          prefix: 'EBL',
          title: '',
        },
        navigation: {
          mobile: {
            drawer: false,
          },
        },
        menu: {
          bag: {
            drawer: false,
            items: [
              {
                id: 1,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item 1',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: true,
                deleting: false,
              },
              {
                id: 2,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: false,
                deleting: false,
              },
              {
                id: 3,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: true,
                deleting: false,
              },
              {
                id: 4,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: true,
                deleting: false,
              },
              {
                id: 5,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: false,
                deleting: false,
              },
              {
                id: 6,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: true,
                deleting: false,
              },
              {
                id: 7,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: false,
                deleting: false,
              },
              {
                id: 8,
                img: {
                  src: TempBagItemImg,
                  alt: 'Item 1',
                },
                name: 'Product item',
                size: '200ml',
                quantity: 1,
                price: 25.5,
                inStock: false,
                deleting: false,
              },
            ],
          },
        },
        dialog: {
          deleteConfirm: {
            drawer: false,
          },
        },
      },
      home: {},
      packages: {},
      services: {},
      products: {},
      contact: {},
      about: {},
      bag: {},
      account: {},
    },
  }),
  getters: {
    /* Page common - meta */
    get_meta_title: (state: IRootState) => state.page.common.meta.title,

    /* Page common - navigation */
    get_navigation_mobile_drawer: (state: IRootState) =>
      state.page.common.navigation.mobile.drawer,

    /* Page common - menu */
    // Bag
    get_menu_bag_drawer: (state: IRootState) =>
      state.page.common.menu.bag.drawer,
    get_menu_bag_items: (state: IRootState) => state.page.common.menu.bag.items,

    /* Page common - dialog */
    // Delete confirm
    get_dialog_deleteConfirm_drawer: (state: IRootState) =>
      state.page.common.dialog.deleteConfirm.drawer,
  },
  actions: {
    /* Page common - meta */
    set_meta_title(state: string): void {
      this.page.common.meta.title = `${this.page.common.meta.prefix} - ${state}`;
    },

    /* Page common - navigation */
    // Mobile
    set_navigation_mobile_drawer(state: boolean): void {
      this.page.common.navigation.mobile.drawer = state;
    },

    /* Page common - menu */
    // Bag
    set_menu_bag_drawer(state: boolean): void {
      this.page.common.menu.bag.drawer = state;
    },
    set_menu_bag_items(state: IRootMenuBagItemState[]): void {
      this.page.common.menu.bag.items = [...state];
    },
    set_menu_bag_item(state: IRootMenuBagItemState): void {
      this.page.common.menu.bag.items.push(state);
    },

    /* Page common - dialog */
    // Delete confirm
    set_dialog_deleteConfirm_drawer(state: boolean): void {
      this.page.common.dialog.deleteConfirm.drawer = state;
    },
  },
});
