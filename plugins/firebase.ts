// Services
import {
  initializeApp,
  type FirebaseApp,
  type FirebaseOptions,
} from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.firebase.config.apiKey,
    authDomain: config.public.firebase.config.authDomain,
    projectId: config.public.firebase.config.projectId,
    storageBucket: config.public.firebase.config.storageBucket,
    messagingSenderId: config.public.firebase.config.messagingSenderId,
    appId: config.public.firebase.config.appId,
    measurementId: config.public.firebase.config.measurementId,
  };

  // Initialize Firebase
  const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase services
  const db: Firestore = getFirestore(firebaseApp);
  const auth: Auth = getAuth(firebaseApp);

  // Provide Firebase services to Nuxt
  return {
    provide: {
      db,
      auth,
    },
  };
});
