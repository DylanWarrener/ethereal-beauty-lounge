// Vuetify Core and Components
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import {
  mdiBackburger,
  mdiArrowRightBold,
  mdiMagnify,
  mdiBasket,
  mdiAccount,
  mdiLogout,
  mdiHome,
  mdiInformation,
  mdiPackage,
  mdiEmailFast,
  mdiHandsPray,
  mdiLotionPlus,
} from '@mdi/js';

const commonColours = {
  white: '#FFFFFF',
  black: '#000000',
  accent: '#CC9090',
  'primary-tone-1': '#F1F1F1',
  'primary-tone-2': '#D5D5D5',
  'primary-tone-3': '#B8B8B8',
  'primary-shade-1': '#E3E3E3',
  'primary-shade-2': '#AAAAAA',
  'primary-shade-3': '#717171',

  'secondary-tint-1': '#1C1C1C',
  'secondary-tint-2': '#555555',
  'secondary-tint-3': '#8E8E8E',
  'secondary-tone-1': '#0E0E0E',
  'secondary-tone-2': '#2B2B2B',
  'secondary-tone-3': '#474747',

  'accent-tint-1': '#D19C9C',
  'accent-tint-2': '#DDB4B4',
  'accent-tint-3': '#E8CDCD',
  'accent-tone-1': '#C48E8E',
  'accent-tone-2': '#B38B8B',
  'accent-tone-3': '#A28787',
  'accent-shade-1': '#BF7575',
  'accent-shade-2': '#9E4949',
  'accent-shade-3': '#6A3131',
};

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: commonColours.white,
    'primary-1': commonColours['primary-tone-1'],
    'primary-2': commonColours['primary-tone-2'],
    'primary-3': commonColours['primary-tone-3'],

    secondary: commonColours.black,
    'secondary-1': commonColours['secondary-tint-1'],
    'secondary-2': commonColours['secondary-tint-2'],
    'secondary-3': commonColours['secondary-tint-3'],

    accent: commonColours.accent,
    'accent-1': commonColours['accent-shade-1'],
    'accent-2': commonColours['accent-shade-2'],
    'accent-3': commonColours['accent-shade-3'],
  },
};
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: commonColours.black,
    secondary: commonColours.white,
    accent: commonColours.accent,
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        menuBack: mdiBackburger,
        arrowRight: mdiArrowRightBold,
        search: mdiMagnify,
        logout: mdiLogout,

        /* Navigation page icons */
        home: mdiHome,
        packages: mdiPackage,
        services: mdiHandsPray,
        products: mdiLotionPlus,
        contact: mdiEmailFast,
        about: mdiInformation,
        basket: mdiBasket,
        account: mdiAccount,
      },
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
