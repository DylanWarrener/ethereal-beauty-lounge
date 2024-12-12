import { defineStore } from 'pinia';

/* Abstractions */
import type IAuthState from '@/abstractions/interfaces/authentication/store';
import { EStoreNames } from '@/abstractions/enums/store';

export const useAuthStore = defineStore(EStoreNames.AUTH, {
  state: (): IAuthState => ({
    user: {
      isSignedIn: false,
      uid: null,
      displayName: null,
      email: null,
      emailVerified: false,
      photoURL: null,
      isAnonymous: false,
      joinedOn: null,
    },
  }),
  getters: {},
  actions: {},
});
