import { useNuxtApp } from '#app';
import { defineStore } from 'pinia';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendSignInLinkToEmail,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
  type Auth,
  type User,
  type ActionCodeSettings,
} from 'firebase/auth';

/* Abstractions */
import type IAuthState from '@/abstractions/interfaces/store/auth';
import type IAuthUserState from '@/abstractions/interfaces/user/auth';
import {
  type IAuthUserPreferenceState,
  type IAuthUserPreferenceSettingsState,
  type IAuthUserPreferenceSecurityState,
  type IAuthUserPreferenceNotificationsState,
  type IAuthUserDataState,
} from '@/abstractions/interfaces/user/auth';
import { EStoreNames } from '@/abstractions/enums/store';

export const useAuthStore = defineStore(EStoreNames.AUTH, {
  state: (): IAuthState => ({
    user: {
      isLoggedIn: false,
      preferences: {
        settings: {
          confirmDeleteItem: true,
        },
        security: {},
        notifications: {},
      },
      auth: {
        uid: '',
        displayName: '',
        email: '',
        emailVerified: false,
        photoURL: '',
        isAnonymous: false,
        joinedOn: '',
      },
    },
  }),
  getters: {
    get_user: (state: IAuthState): IAuthUserState => {
      return state.user;
    },
    get_user_isLoggedIn: (state: IAuthState): boolean => {
      return state.user.isLoggedIn;
    },

    /* PREFERENCES */
    get_user_preferences: (state: IAuthState): IAuthUserPreferenceState => {
      return state.user.preferences;
    },
    get_user_preference_forSettings: (
      state: IAuthState
    ): IAuthUserPreferenceSettingsState => {
      return state.user.preferences.settings;
    },
    get_user_preference_forSecurity: (
      state: IAuthState
    ): IAuthUserPreferenceSecurityState => {
      return state.user.preferences.security;
    },
    get_user_preference_forNotifications: (
      state: IAuthState
    ): IAuthUserPreferenceNotificationsState => {
      return state.user.preferences.notifications;
    },

    /* AUTH */
    get_user_auth: (state: IAuthState): IAuthUserDataState => {
      return state.user.auth;
    },
    get_user_id: (state: IAuthState): string => {
      return state.user.auth.uid;
    },
    get_user_displayName: (state: IAuthState): string => {
      return state.user.auth.displayName;
    },
    get_user_email: (state: IAuthState): string => {
      return state.user.auth.email;
    },
    get_user_emailVerified: (state: IAuthState): boolean => {
      return state.user.auth.emailVerified;
    },
    get_user_photoUrl: (state: IAuthState): string => {
      return state.user.auth.photoURL;
    },
    get_user_isAnonymous: (state: IAuthState): boolean => {
      return state.user.auth.isAnonymous;
    },
    get_user_joinedOn: (state: IAuthState): string => {
      return state.user.auth.joinedOn;
    },
  },
  actions: {
    set_user_isLoggedIn(value: boolean): void {
      this.user.isLoggedIn = value;
    },

    /* PREFERENCES */
    set_user_preference_settings_confirmDeleteItem(value: boolean): void {
      this.user.preferences.settings.confirmDeleteItem = value;
    },

    /* AUTH */
    set_user_auth_state(value: IAuthUserDataState): void {
      this.user.auth = value;
    },
    reset_user_auth_state(): void {
      this.user.auth = {
        uid: '',
        displayName: '',
        email: '',
        emailVerified: false,
        photoURL: '',
        isAnonymous: false,
        joinedOn: '',
      };
    },
    set_user_id_state(value: string): void {
      this.user.auth.uid = value;
    },
    set_user_displayName_state(value: string): void {
      this.user.auth.displayName = value;
    },
    set_user_email_state(value: string): void {
      this.user.auth.email = value;
    },
    set_user_emailVerified_state(value: boolean): void {
      this.user.auth.emailVerified = value;
    },
    set_user_photoUrl_state(value: string): void {
      this.user.auth.photoURL = value;
    },
    set_user_isAnonymous_state(value: boolean): void {
      this.user.auth.isAnonymous = value;
    },
    set_user_joinedOn_state(value: string): void {
      this.user.auth.joinedOn = value;
    },

    /* AUTH ACTIONS */
    monitor_user_auth(user: { auth: Auth }): Promise<void> {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(user.auth, (user: User | null) => {
          if (user !== null) {
            let valuesNotNull: any = {};
            for (const [key, value] of Object.entries(user)) {
              if (key in this.user.auth && value !== null) {
                valuesNotNull[key] = value;
              }
            }
            this.set_user_auth_state(valuesNotNull);
            resolve();
          } else {
            reject('User is not valid.');
          }
        });
      });
    },
    signIn_user_auth_withEmailAndPassword(user: {
      email: string;
      password: string;
    }): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword($auth, user.email, user.password)
          .then(() => resolve())
          .catch((error) => {
            if (typeof error === 'string') reject(error);
            else {
              switch (error.code) {
                case 'auth/invalid-email':
                  reject('The email address is malformed.');
                  break;
                case 'auth/user-disabled':
                  reject('The user account has been disabled.');
                  break;
                case 'auth/user-not-found':
                  reject('The user account does not exist. Please register.');
                  break;
                case 'auth/wrong-password':
                  reject('The password provided is incorrect.');
                  break;
                case 'auth/too-many-requests':
                  reject(
                    'Too many requests have been sent from this account. Please try again later.'
                  );
                  break;
                case 'auth/operation-not-allowed':
                  reject(
                    'This operation is not allowed for this user. Please contact us.'
                  );
                  break;
                case 'auth/weak-password':
                  reject(
                    'The password provided is too weak. Please try again.'
                  );
                  break;
                case 'auth/invalid-credential':
                  reject(
                    'The provided credentials are invalid. Please try again.'
                  );
                  break;
                case 'auth/account-exists-with-different-credential':
                  reject(
                    'An account already exists with the same email address, but a different sign-in method was used.'
                  );
                  break;
                case 'auth/email-already-in-use':
                  reject(
                    'The email address is already in use by another account.'
                  );
                  break;
                case 'auth/requires-recent-login':
                  reject(
                    'The user must have recently logged in to perform this operation.'
                  );
                  break;
                case 'auth/network-request-failed':
                  reject('The network request failed.');
                  break;
              }
            }
          });
      });
    },
    signOut_user_auth(): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        import('@/stores/firestore').then(({ useFirestore }) => {
          const store = useFirestore();

          signOut($auth)
            .then(() => {
              this.reset_user_auth_state();
              store.reset_user_firestore_state();
              resolve();
            })
            .catch(() => reject());
        });
      });
    },
    create_user_auth_account_withEmailAndPassword(user: {
      email: string;
      password: string;
    }): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword($auth, user.email, user.password)
          .then(() => this.send_user_auth_emailVerification())
          .then(() => resolve())
          .catch((error) => {
            switch (error.code) {
              case 'auth/email-already-in-use':
                const errorMessage: string =
                  'Email already in use! Try logging in';
                reject(errorMessage);
                break;
            }
          });
      });
    },
    send_user_auth_emailVerification(): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        if ($auth.currentUser !== null) {
          sendEmailVerification($auth.currentUser)
            .then(() => resolve())
            .catch(() => reject());
        }
      });
    },
    send_user_auth_passwordResetLink(email: string): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, _) => {
        if ($auth !== null) {
          sendPasswordResetEmail($auth, email)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              switch (error.code) {
              }
            });
        }
      });
    },
    send_user_auth_signInLinkToEmail(email: string): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, _) => {
        if ($auth !== null) {
          const actionCodeSettings: ActionCodeSettings = {
            url: 'https://localhost:5173/login#section-login',
            iOS: {
              bundleId: 'com.example.ios',
            },
            android: {
              packageName: 'com.example.android',
              installApp: true,
              minimumVersion: '12',
            },
            handleCodeInApp: false,
          };
          sendSignInLinkToEmail($auth, email, actionCodeSettings)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              switch (error.code) {
                case 'auth/argument-error':
                  break;
                case 'auth/operation-not-allowed':
                  break;
              }
            });
        }
      });
    },
    update_user_auth_profile_displayNameAndPhotoUrl(user: {
      displayName?: string;
      photoURL?: string;
    }): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        if ($auth.currentUser !== null) {
          let valuesNotUndefined: any = {};
          for (const [key, value] of Object.entries(user)) {
            if (value !== undefined) {
              valuesNotUndefined[key] = value;
            }
          }

          if (Object.keys(valuesNotUndefined).length > 0) {
            updateProfile($auth.currentUser, valuesNotUndefined)
              .then(() => resolve())
              .catch((error) => {
                const errorMessage: string = `You are offline, so you cannot store user data! ${error}`;
                reject(errorMessage);
              });
          } else {
            reject('You cannot save your account data if no data is provided!');
          }
        } else {
          reject('You must be logged in, to update your account credentials');
        }
      });
    },
    update_user_auth_email(email: string): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        if ($auth.currentUser !== null) {
          updateEmail($auth.currentUser, email)
            .then(() => resolve())
            .catch((error) => {
              let errorMessage: string = '';
              switch (error.code) {
                case 'auth/operation-not-allowed':
                  errorMessage =
                    'Cannot update email. This operation requires that you have logged in recently. Reauthenticate now.';
                  reject(errorMessage);
                  break;
              }
            });
        } else {
          reject('You must be logged in to change email');
        }
      });
    },
    update_user_auth_password(newPassword: string): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, _) => {
        if ($auth.currentUser !== null) {
          updatePassword($auth.currentUser, newPassword)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              switch (error.code) {
              }
            });
        }
      });
    },
    delete_user_auth(): Promise<void> {
      const { $auth } = useNuxtApp();

      return new Promise((resolve, reject) => {
        if ($auth.currentUser !== null) {
          deleteUser($auth.currentUser)
            .then(() => resolve())
            .catch((error) => {
              switch (error.code) {
                case 'auth/requires-recent-login':
                  const errorMessage: string =
                    'Cannot delete account. A recent login is required. Please re-log first and try again!';
                  reject(errorMessage);
                  break;
              }
            });
        }
      });
    },
  },
});
