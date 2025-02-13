// Vuetify Core and Components
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import {
  mdiBackburger,
  mdiArrowRightBold,
  mdiArrowLeftBold,
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
  mdiPhone,
  mdiMapMarker,
  mdiEmail,
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
  primary: '#6D9378',
  'primary-tint-1': '#8DAB95',
  'primary-tint-2': '#AEC3B4',
  'primary-tint-3': '#CEDBD2',
  'primary-tone-1': '#718F7A',
  'primary-tone-2': '#758B7C',
  'primary-tone-3': '#7A867D',
  'primary-shade-1': '#54725D',
  'primary-shade-2': '#3C5142',
  'primary-shade-3': '#243128',
};
const secondaryColours = {
  secondary: '#CCCB91',
  'secondary-tint-1': '#82EDA0',
  'secondary-tint-2': '#A6F2BB',
  'secondary-tint-3': '#C9F7D6',
  'secondary-tone-1': '#66D185',
  'secondary-tone-2': '#6EBA83',
  'secondary-tone-3': '#75A382',
  'secondary-shade-1': '#20DE56',
  'secondary-shade-2': '#179F3D',
  'secondary-shade-3': '#0E5F25',
};
const accentColours = {
  accent: '#CC9090',
  'accent-tint-1': '#D8A7B6',
  'accent-tint-2': '#E3C0CB',
  'accent-tint-3': '#EED9E0',
  'accent-tone-1': '#BB8998',
  'accent-tone-2': '#AA8791',
  'accent-tone-3': '#99848A',
  'accent-shade-1': '#B65874',
  'accent-shade-2': '#863B51',
  'accent-shade-3': '#502331',
};

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    default: whiteColours['white'],
    ...whiteColours,

    inverted: blackColours['black'],
    ...blackColours,

    cta: accentColours['accent-shade-1'],
    'cta-hover': accentColours['accent-tint-3'],
    'scroll-bar': accentColours['accent-shade-1'],
    'section-title': blackColours['black'],
    'section-subtitle': blackColours['black-tone-2'],

    /* Hero section */
    'section-1': primaryColours['primary-shade-2'],
    //'section-1-title': blackColours['black-tint-1'],
    //'section-1-subtitle': blackColours['black-tone-2'],
    'section-1-body': blackColours['black-tint-2'],
    'section-1-cta': accentColours['accent-shade-1'],
    'section-1-highlights': secondaryColours['secondary-tint-1'],

    /* Why Choose Us section */
    'section-2': whiteColours['white'],
    //'section-2-title': blackColours['black'],
    //'section-2-subtitle': blackColours['black-tone-1'],
    'section-2-body': blackColours['black-tint-2'],
    'section-2-cta': accentColours['accent-tint-2'],
    'section-2-highlights': accentColours['accent-tint-2'],

    /* Benefits section */
    'section-3': primaryColours['primary-tint-3'],
    //'section-3-title': blackColours['black'],
    //'section-3-subtitle': blackColours['black-tone-2'],
    'section-3-body': blackColours['black-tone-3'],
    'section-3-highlights': primaryColours['primary-tint-2'],

    /* Popular Services section */
    'section-4': whiteColours['white-tone-1'],
    //'section-4-title': primaryColours['primary-tone-2'],
    //'section-4-subtitle': blackColours['black-tint-2'],
    'section-4-body': blackColours['black-tint-3'],
    'section-4-cta': accentColours['accent-shade-1'],
    'section-4-highlights': secondaryColours['secondary-shade-1'],

    /* Popular Products section */
    'section-5': whiteColours['white'],
    //'section-5-title': secondaryColours['secondary-tint-1'],
    //'section-5-subtitle': blackColours['black-tint-3'],
    'section-5-body': blackColours['black-tint-2'],
    'section-5-cta': accentColours['accent-tint-1'],
    'section-5-highlights': secondaryColours['secondary-shade-1'],

    /* Recent Portfolio section */
    'section-6': primaryColours['primary-tint-3'],
    //'section-6-title': primaryColours['primary-shade-1'],
    //'section-6-subtitle': blackColours['black-tint-2'],
    'section-6-body': blackColours['black-tint-1'],
    'section-6-cta': accentColours['accent-tint-3'],
    'section-6-highlights': accentColours['accent-tint-3'],

    /* Recent Reviews section */
    'section-7': whiteColours['white-tone-1'],
    //'section-7-title': primaryColours['primary-tint-2'],
    //'section-7-subtitle': blackColours['black-tint-3'],
    'section-7-body': blackColours['black-tint-2'],
    'section-7-cta': accentColours['accent-shade-1'],
    'section-7-highlights': secondaryColours['secondary-shade-1'],

    /* Get in Touch section */
    'section-8': primaryColours['primary-tint-3'],
    //'section-8-title': accentColours['accent'],
    //'section-8-subtitle': blackColours['black-tint-3'],
    'section-8-body': blackColours['black-tone-3'],
    'section-8-cta': accentColours['accent'],
    'section-8-highlights': secondaryColours['secondary-tint-2'],

    /* Newsletter section */
    'section-9': whiteColours['white'],
    //'section-9-title': primaryColours['primary-tone-2'],
    //'section-9-subtitle': blackColours['black-tint-2'],
    'section-9-body': blackColours['black-tint-3'],
    'section-9-cta': accentColours['accent-tint-2'],
    'section-9-highlights': primaryColours['primary-tint-2'],

    /* Footer section */
    'section-10': whiteColours['white-tone-1'],
    //'section-10-title': whiteColours['white'],
    //'section-10-subtitle': whiteColours['white-tone-3'],
    'section-10-body': whiteColours['white-tone-2'],
    'section-10-cta': accentColours['accent-tint-1'],
    'section-10-highlights': secondaryColours['secondary-shade-2'],

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
    default: blackColours['black'],
    ...blackColours,

    inverted: whiteColours['white'],
    ...whiteColours,

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
        arrowLeft: mdiArrowLeftBold,

        /* General */
        menuBack: mdiBackburger,
        search: mdiMagnify,

        /* Navigation */
        home: mdiHome,
        packages: mdiPackage,
        services: mdiHandsPray,
        products: mdiLotionPlus,
        contact: mdiEmailFast,
        about: mdiInformation,
        account: mdiAccount,
        bag: mdiShopping,
        security: mdiSecurity,
        notifications: mdiBell,
        login: mdiLogin,
        logout: mdiLogout,
        settings: mdiCog,

        /* Services */
        boostConfidence: mdiAccountHeart,
        youthfulGlow: mdiFaceWomanShimmer,
        professionalImage: mdiAccountArrowUp,

        /* Information */
        email: mdiEmail,
        phone: mdiPhone,
        office: mdiMapMarker,

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
