import { defineStore } from 'pinia';

/* ABSTRACTIONS */
import type { IRootState } from '@/abstractions/interfaces/store/root/root';
import type {
  IRootMenuBagItemState,
  IRootServiceCategory,
  IRootServiceTreatments,
} from '@/abstractions/interfaces/store/root/page/InterfacePageCommon';
import { EStoreNames } from '@/abstractions/enums/store';

import TempBagItemImg from '@/assets/img/webp/hero-section/hero-image.webp';
import BodyTreatmentImg from '@/assets/img/webp/hero-section/hero-image.webp';
import FaceTreatmentImg from '@/assets/img/webp/hero-section/hero-image.webp';
import AdditionalTreatmentImg from '@/assets/img/webp/hero-section/hero-image.webp';
import PackageTreatmentsImg from '@/assets/img/webp/hero-section/hero-image.webp';

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
        service: {
          categories: [
            {
              image: BodyTreatmentImg,
              category: 'Non Surgical Body Treatments',
              note: 'Sessions have to be 7-14 days between one another.',
            },
            {
              image: FaceTreatmentImg,
              category: 'Non Surgical Face Treatments',
              note: 'Sessions have to be 7-14 days between one another. Excluding BFL+.',
            },
            {
              image: BodyTreatmentImg,
              category: 'Body Treatments',
              note: '',
            },
            {
              image: AdditionalTreatmentImg,
              category: 'Additional Treatments',
              note: '',
            },
            {
              image: PackageTreatmentsImg,
              category: 'Packages',
              note: '',
            },
          ],
          treatments: [
            {
              title: 'Brazilian Booty Lift',
              price: {
                consultation: 0,
                treatment: ['x1: £125', 'x3: £350', 'x5: £499'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Tummy Tuck',
              price: {
                consultation: 0,
                treatment: ['x1: £125', 'x3: £350', 'x5: £499'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Love Handles',
              price: {
                consultation: 0,
                treatment: ['x1: £110', 'x3: £300', 'x5: £439'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Bra Fat',
              price: {
                consultation: 0,
                treatment: ['x1: £110', 'x3: £300', 'x5: £439'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Bingo Wings',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £250', 'x5: £359'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Thigh Gap',
              price: {
                consultation: 0,
                treatment: ['x1: £100', 'x3: £275', 'x5: £399'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Front Thigh',
              price: {
                consultation: 0,
                treatment: ['x1: £100', 'x3: £275', 'x5: £399'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Calves',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £250', 'x5: £359'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Breast Lift',
              price: {
                consultation: 0,
                treatment: ['x1: £60', 'x3: £160', 'x5: £239'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 0,
            },
            {
              title: 'Breast Lift +',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £250', 'x5: £359'],
                selected: 0,
              },
              time: 60,
              treatmentCategory: 0,
            },
            {
              title: 'Brazilian Face Lift',
              price: {
                consultation: 0,
                treatment: ['x1: £110', 'x3: £300', 'x6: £549'],
                selected: 0,
              },
              time: 60,
              treatmentCategory: 1,
            },
            {
              title: 'Brazilian Face Lift +',
              price: {
                consultation: 0,
                treatment: ['x1: £130', 'x3: £360', 'x6: £649'],
                selected: 0,
              },
              time: 90,
              treatmentCategory: 1,
            },
            {
              title: 'Jaw + Double Chin',
              price: {
                consultation: 0,
                treatment: ['x1: £70', 'x3: £180', 'x6: £349'],
                selected: 0,
              },
              time: 45,
              treatmentCategory: 1,
            },
            {
              title: 'Jaw + Cheek Sculpt',
              price: {
                consultation: 0,
                treatment: ['x1: £65', 'x3: £170', 'x6: £325'],
                selected: 0,
              },
              time: 45,
              treatmentCategory: 1,
            },
            {
              title: 'Full Face Rejuvenation',
              price: {
                consultation: 0,
                treatment: ['x1: £65', 'x3: £170', 'x6: £325'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 1,
            },
            {
              title: 'Wrinkle Reduction',
              price: {
                consultation: 0,
                treatment: ['x1: £40', 'x3: £100', 'x6: £199'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 1,
            },
            {
              title: 'Chest Add On',
              price: {
                consultation: 0,
                treatment: ['x1: £20', 'x3: £50', 'x6: £80'],
                selected: 0,
              },
              time: 15,
              treatmentCategory: 1,
            },
            {
              title: 'Brow Lift',
              price: {
                consultation: 0,
                treatment: ['x1: £10', 'x3: £25', 'x6: £40'],
                selected: 0,
              },
              time: 15,
              treatmentCategory: 1,
            },
            {
              title: 'Detox Body Wrap',
              price: {
                consultation: 0,
                treatment: ['x1: £20', 'x3: £50', 'x5: £80'],
                selected: 0,
              },
              time: 15,
              treatmentCategory: 2,
            },
            {
              title: 'Lipo Lean Body Wrap',
              price: {
                consultation: 0,
                treatment: ['x1: £30', 'x3: £80', 'x5: £130'],
                selected: 0,
              },
              time: 15,
              treatmentCategory: 2,
            },
            {
              title: 'Sauna Blanket Detox Body Wrap',
              price: {
                consultation: 0,
                treatment: ['x1: £60', 'x3: £170', 'x5: £270'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 2,
            },
            {
              title: 'Sauna Blanket Lipo Lean Body Wrap',
              price: {
                consultation: 0,
                treatment: ['x1: £80', 'x3: £220', 'x5: £360'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 2,
            },
            {
              title: 'Sauna Blanket + Another Treatment',
              price: {
                consultation: 0,
                treatment: ['x1: £20', 'x3: £50', 'x5: £80'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 2,
            },
            {
              title: 'Skin Tightening',
              price: {
                consultation: 0,
                treatment: ['x1: £60', 'x3: £150', 'x6: £239'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 3,
            },
            {
              title: 'Skin Tightening +',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £240', 'x6: £359'],
                selected: 0,
              },
              time: 60,
              treatmentCategory: 3,
            },
            {
              title: 'Stretch Mark Reduction',
              price: {
                consultation: 0,
                treatment: ['x1: £50', 'x3: £120', 'x6: £249'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 3,
            },
            {
              title: 'Cellulite Blasting',
              price: {
                consultation: 0,
                treatment: ['x1: £60', 'x3: £150', 'x6: £239'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 3,
            },
            {
              title: 'Cellulite Blasting +',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £240', 'x6: £359'],
                selected: 0,
              },
              time: 60,
              treatmentCategory: 3,
            },
            {
              title: 'Fat Melting',
              price: {
                consultation: 0,
                treatment: ['x1: £50', 'x3: £120', 'x6: £249'],
                selected: 0,
              },
              time: 30,
              treatmentCategory: 3,
            },
            {
              title: 'Fat Melting +',
              price: {
                consultation: 0,
                treatment: ['x1: £90', 'x3: £240', 'x6: £359'],
                selected: 0,
              },
              time: 60,
              treatmentCategory: 3,
            },
            {
              title: '360 Treatment',
              includes: 'Tummy, Lower back & Hip melt.',
              price: {
                consultation: 0,
                treatment: ['x1: £250', 'x3: £625', 'x5: £999'],
                selected: 0,
              },
              time: 180,
              treatmentCategory: 4,
            },
            {
              title: 'Legs For Days',
              includes: 'Booty, Thigh gap & Front thigh.',
              price: {
                consultation: 0,
                treatment: ['x1: £250', 'x3: £625', 'x5: £999'],
                selected: 0,
              },
              time: 180,
              treatmentCategory: 4,
            },
            {
              title: 'EBL Special',
              includes: 'Booty, Tummy & Back.',
              price: {
                consultation: 0,
                treatment: ['x1: £300', 'x3: £750', 'x5: £1199'],
                selected: 0,
              },
              time: 180,
              treatmentCategory: 4,
            },
          ],
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
    /* ---------- META ---------- */
    get_meta_title: (state: IRootState) => {
      return state.page.common.meta.title;
    },

    /* ---------- NAVIGATION ---------- */
    get_navigation_mobile_drawer: (state: IRootState) => {
      return state.page.common.navigation.mobile.drawer;
    },

    /* ---------- MENU ---------- */
    get_menu_bag_drawer: (state: IRootState) => {
      return state.page.common.menu.bag.drawer;
    },
    get_menu_bag_items: (state: IRootState) => {
      return state.page.common.menu.bag.items;
    },

    /* ---------- DIALOG ---------- */
    get_dialog_deleteConfirm_drawer: (state: IRootState) => {
      return state.page.common.dialog.deleteConfirm.drawer;
    },

    /* ---------- SERVICES ---------- */
    get_service_categories: (state: IRootState): IRootServiceCategory[] => {
      return state.page.common.service.categories;
    },
    get_service_treatments: (state: IRootState): IRootServiceTreatments[] => {
      return state.page.common.service.treatments;
    },
  },
  actions: {
    /* ---------- META ---------- */
    set_meta_title(state: string): void {
      this.page.common.meta.title = `${this.page.common.meta.prefix} - ${state}`;
    },

    /* ---------- NAVIGATION ---------- */
    set_navigation_mobile_drawer(state: boolean): void {
      this.page.common.navigation.mobile.drawer = state;
    },

    /* ---------- MENU ---------- */
    set_menu_bag_drawer(state: boolean): void {
      this.page.common.menu.bag.drawer = state;
    },
    set_menu_bag_items(state: IRootMenuBagItemState[]): void {
      this.page.common.menu.bag.items = [...state];
    },
    set_menu_bag_item(state: IRootMenuBagItemState): void {
      this.page.common.menu.bag.items.push(state);
    },

    /* ---------- DIALOG ---------- */
    set_dialog_deleteConfirm_drawer(state: boolean): void {
      this.page.common.dialog.deleteConfirm.drawer = state;
    },
  },
});
