import { type Firestore } from 'firebase/firestore';
import { type Auth } from 'firebase/auth';

// Declare the NuxtApp custom types
declare module '#app' {
  interface NuxtApp {
    $db: Firestore;
    $auth: Auth;
  }
}

export {};
