import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

/*
 * Extend the Nuxt type definitions
 */
declare module '#app' {
  interface NuxtApp {
    $db: Firestore;
    $auth: Auth;
  }
}
/*
 * Extend the Vue type definitions
 */
declare module 'vue' {
  interface ComponentCustomProperties {
    $db: Firestore;
    $auth: Auth;
  }
}
