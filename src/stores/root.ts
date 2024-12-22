import { defineStore } from 'pinia';

/* ABSTRACTIONS */
import type {
  IRootState,
  IRootBagItemsState,
} from '@/abstractions/interfaces/store/root';
import { EStoreNames } from '@/abstractions/enums/store';

import TempBagItemImg from '@/assets/img/hero-section/mobile/background-image-1.webp';

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
    bag: {
      items: [
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item 1',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: true,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: false,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: true,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: true,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: false,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: true,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: false,
        },
        {
          img: {
            src: TempBagItemImg,
            alt: 'Item 1',
          },
          name: 'Product item',
          size: '200ml',
          quantity: 1,
          price: 25.5,
          inStock: false,
        },
      ],
    },
  }),
  getters: {
    /* Meta */
    get_meta_title: (state: IRootState) => state.meta.title,

    /* Navigation */
    get_navigation_mobile_drawer: (state: IRootState) =>
      state.navigation.mobile.drawer,

    /* Bag */
    get_bag_items: (state: IRootState) => state.bag.items,
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

    /* Bag */
    set_bag_items(state: IRootBagItemsState[]): void {
      this.bag.items = [...state];
    },
    set_bag_item(state: IRootBagItemsState): void {
      this.bag.items.push(state);
    },
  },
});
