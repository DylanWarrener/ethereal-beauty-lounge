// Vuetify Core and Components
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const lightTheme = {
  dark: false, 
  colors: {
    primary: '#FFFFFF', 
    secondary: '#9C9C9C', 
    accent: '#CC9090', 

    // Primary Lighten
    'primary-lighten-1': '#F1F1F1',
    'primary-lighten-2': '#D5D5D5',
    'primary-lighten-3': '#B8B8B8',

    // Primary Darken
    'primary-darken-1': '#E3E3E3',
    'primary-darken-2': '#AAAAAA',
    'primary-darken-3': '#717171',

    // Secondary Lighten
    'secondary-lighten-1': '#C6C6C6',
    'secondary-lighten-2': '#8E8E8E',
    'secondary-lighten-3': '#555555',

    // Secondary Darken
    'secondary-darken-1': '#2B2B2B',
    'secondary-darken-2': '#0E0E0E',
    'secondary-darken-3': '#000000',

    // Accent Lighten
    'accent-lighten-1': '#DDB4B4',
    'accent-lighten-2': '#E8CDCD',
    'accent-lighten-3': '#F4E6E6',

    // Accent Darken
    'accent-darken-1': '#BF7575',
    'accent-darken-2': '#9E4949',
    'accent-darken-3': '#6A3131',
  },
};
const darkTheme = {
  dark: true, 
  colors: {
    primary: '#9C9C9C', 
    secondary: '#1C1C1C', 
    accent: '#6A3131', 

    // Primary Lighten
    'primary-lighten-1': '#D5D5D5',
    'primary-lighten-2': '#B8B8B8',
    'primary-lighten-3': '#717171',

    // Primary Darken
    'primary-darken-1': '#393939',
    'primary-darken-2': '#2B2B2B',
    'primary-darken-3': '#0E0E0E',

    // Secondary Lighten
    'secondary-lighten-1': '#555555',
    'secondary-lighten-2': '#8E8E8E',
    'secondary-lighten-3': '#C6C6C6',

    // Secondary Darken
    'secondary-darken-1': '#0E0E0E',
    'secondary-darken-2': '#000000',
    'secondary-darken-3': '#1C1C1C',

    // Accent Lighten
    'accent-lighten-1': '#B38B8B',
    'accent-lighten-2': '#A28787',
    'accent-lighten-3': '#918484',

    // Accent Darken
    'accent-darken-1': '#9E4949',
    'accent-darken-2': '#6A3131',
    'accent-darken-3': '#351818',
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
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
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 3,
        darken: 3,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
