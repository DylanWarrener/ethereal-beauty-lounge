// Vuetify Core and Components
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import {
  mdiBackburger,
  mdiArrowRightBold,
  mdiMagnify,
  mdiShopping,
  mdiAccount,
  mdiHome,
  mdiInformation,
  mdiPackage,
  mdiEmailFast,
  mdiHandsPray,
  mdiLotionPlus,
  mdiLogin,
  mdiLogout,
  mdiCog,
  mdiDelete,
  mdiPlus,
  mdiMinus,
  mdiSecurity,
  mdiBell,
  mdiAccountArrowUp,
  mdiFaceWomanShimmer,
  mdiAccountHeart,
} from '@mdi/js';

const whiteColours = {
  white: '#FFFFFF',
  'white-tone-1': '#F1F1F1',
  'white-tone-2': '#D5D5D5',
  'white-tone-3': '#B8B8B8',
  'white-shade-1': '#E3E3E3',
  'white-shade-2': '#AAAAAA',
  'white-shade-3': '#717171',
};
const blackColours = {
  black: '#000000',
  'black-tint-1': '#1C1C1C',
  'black-tint-2': '#555555',
  'black-tint-3': '#8E8E8E',
  'black-tone-1': '#0E0E0E',
  'black-tone-2': '#2B2B2B',
  'black-tone-3': '#474747',
};
const primaryColours = {
  primary: '#91B5CC',
  'primary-tint-1': '#A8C5D7',
  'primary-tint-2': '#C1D6E2',
  'primary-tint-3': '#DAE6EE',
  'primary-tone-1': '#8DA9BB',
  'primary-tone-2': '#899DAA',
  'primary-tone-3': '#869299',
  'primary-shade-1': '#5A91B3',
  'primary-shade-2': '#3D6984',
  'primary-shade-3': '#243F4F',
};
const secondaryColours = {
  secondary: '#CCCB91',
  'secondary-tint-1': '#D7D6A8',
  'secondary-tint-2': '#E2E2C1',
  'secondary-tint-3': '#EEEEDA',
  'secondary-tone-1': '#BBBA8D',
  'secondary-tone-2': '#AAAA89',
  'secondary-tone-3': '#999986',
  'secondary-shade-1': '#B3B25A',
  'secondary-shade-2': '#84833D',
  'secondary-shade-3': '#4F4E24',
};
const accentColours = {
  accent: '#CC9090',
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
    ...whiteColours,
    ...blackColours,

    primary: primaryColours.primary,
    'primary-1': primaryColours['primary-shade-1'],
    'primary-2': primaryColours['primary-shade-2'],
    'primary-3': primaryColours['primary-shade-3'],

    secondary: secondaryColours.secondary,
    'secondary-1': secondaryColours['secondary-tint-1'],
    'secondary-2': secondaryColours['secondary-tint-2'],
    'secondary-3': secondaryColours['secondary-tint-3'],

    accent: accentColours.accent,
    'accent-lighten-1': accentColours['accent-tint-1'],
    'accent-lighten-2': accentColours['accent-tint-2'],
    'accent-lighten-3': accentColours['accent-tint-3'],
    'accent-darken-1': accentColours['accent-shade-1'],
    'accent-darken-2': accentColours['accent-shade-2'],
    'accent-darken-3': accentColours['accent-shade-3'],
  },
};
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    ...whiteColours,
    ...blackColours,

    primary: primaryColours.primary,
    'primary-1': primaryColours['primary-tint-1'],
    'primary-2': primaryColours['primary-tint-2'],
    'primary-3': primaryColours['primary-tint-3'],

    secondary: secondaryColours.secondary,
    'secondary-1': secondaryColours['secondary-tone-1'],
    'secondary-2': secondaryColours['secondary-tone-2'],
    'secondary-3': secondaryColours['secondary-tone-3'],

    accent: accentColours.accent,
    'accent-lighten-1': accentColours['accent-tint-1'],
    'accent-lighten-2': accentColours['accent-tint-2'],
    'accent-lighten-3': accentColours['accent-tint-3'],
    'accent-darken-1': accentColours['accent-shade-1'],
    'accent-darken-2': accentColours['accent-shade-2'],
    'accent-darken-3': accentColours['accent-shade-3'],
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
        arrowRight: mdiArrowRightBold,

        /* Navigation icons */
        menuBack: mdiBackburger,
        search: mdiMagnify,
        home: mdiHome,
        packages: mdiPackage,
        services: mdiHandsPray,
        products: mdiLotionPlus,
        contact: mdiEmailFast,
        about: mdiInformation,
        bag: mdiShopping,
        account: mdiAccount,
        security: mdiSecurity,
        notifications: mdiBell,
        login: mdiLogin,
        logout: mdiLogout,
        settings: mdiCog,

        /* Service icons */
        boostConfidence: mdiAccountHeart,
        youthfulGlow: mdiFaceWomanShimmer,
        professionalImage: mdiAccountArrowUp,

        /* Actions */
        add: mdiPlus,
        remove: mdiMinus,
        delete: mdiDelete,
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
