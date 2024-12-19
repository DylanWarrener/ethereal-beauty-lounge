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
import type IFirebaseAuthState from '@/abstractions/interfaces/store/auth';
import type IFirebaseAuthUser from '~/abstractions/interfaces/user/auth';
import { type IFirebaseAuthUserData } from '~/abstractions/interfaces/user/auth';
import { EStoreNames } from '@/abstractions/enums/store';

export const useAuthStore = defineStore(EStoreNames.AUTH, {
  state: (): IFirebaseAuthState => ({
    user: {
      isSignedIn: false,
      auth: {
        uid: null,
        displayName: null,
        email: null,
        emailVerified: false,
        photoURL: null,
        isAnonymous: false,
        joinedOn: null,
      },
    },
  }),
  getters: {
    get_user: (state: IFirebaseAuthState): IFirebaseAuthUser => {
      return state.user;
    },
    get_user_isSignedIn: (state: IFirebaseAuthState): boolean => {
      return state.user.isSignedIn;
    },
    get_user_auth: (state: IFirebaseAuthState): IFirebaseAuthUserData => {
      return state.user.auth;
    },
    get_user_id: (state: IFirebaseAuthState): string | null => {
      return state.user.auth.uid;
    },
    get_user_displayName: (state: IFirebaseAuthState): string | null => {
      return state.user.auth.displayName;
    },
    get_user_email: (state: IFirebaseAuthState): string | null => {
      return state.user.auth.email;
    },
    get_user_emailVerified: (state: IFirebaseAuthState): boolean => {
      return state.user.auth.emailVerified;
    },
    get_user_photoUrl: (state: IFirebaseAuthState): string | null => {
      return state.user.auth.photoURL;
    },
    get_user_anonymous: (state: IFirebaseAuthState): boolean => {
      return state.user.auth.isAnonymous;
    },
    get_user_joinedOn: (state: IFirebaseAuthState): string | null => {
      return state.user.auth.joinedOn;
    },
  },
  actions: {
    /* STATE ACTIONS */
    set_user_isSignedIn(user: { isSignedIn: boolean }): void {
      this.user.isSignedIn = user.isSignedIn;
    },
    set_user_auth(user: { auth: IFirebaseAuthUserData }): void {
      this.user.auth = user.auth;
    },
    reset_user_authData(): void {
      this.user.auth = {
        uid: null,
        displayName: null,
        email: null,
        emailVerified: false,
        photoURL: null,
        isAnonymous: false,
        joinedOn: null,
      };
    },
    set_user_id(user: { uid: string | null }): void {
      this.user.auth.uid = user.uid;
    },
    set_user_displayName(user: { displayName: string | null }): void {
      this.user.auth.displayName = user.displayName;
    },
    set_user_email(user: { email: string | null }): void {
      this.user.auth.email = user.email;
    },
    set_userEmailVerified(user: { emailVerified: boolean }): void {
      this.user.auth.emailVerified = user.emailVerified;
    },
    set_userPhotoUrl(user: { photoUrl: string | null }): void {
      this.user.auth.photoURL = user.photoUrl;
    },
    set_userAnonymous(user: { isAnonymous: boolean }): void {
      this.user.auth.isAnonymous = user.isAnonymous;
    },
    set_userJoinedOn(user: { joinedOn: string | null }): void {
      this.user.auth.joinedOn = user.joinedOn;
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
            this.set_user_auth(valuesNotNull);
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
        signOut($auth)
          .then(() => {
            this.reset_user_authData();
            //this.reset_userFirestore_state();
            resolve();
          })
          .catch(() => reject());
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
