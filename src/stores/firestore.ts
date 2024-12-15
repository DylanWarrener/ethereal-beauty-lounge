import { useNuxtApp } from '#app';
import { defineStore } from 'pinia';
import {
  collection,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  type CollectionReference,
  type DocumentReference,
  type DocumentData,
} from 'firebase/firestore';

/* ABSTRACTIONS */
import type IFirestoreState from '@/abstractions/interfaces/store/firestore';
import type IFirebaseFirestoreUser from '@/abstractions/interfaces/user/firebaseFirestore';
import { EStoreNames } from '@/abstractions/enums/store';

/* STORES */
import { useAuthStore } from '@/stores/auth';

export const useFireStore = defineStore(EStoreNames.FIRESTORE, {
  state: (): IFirestoreState => ({
    user: {
      title: null,
      firstname: null,
      lastname: null,
      phoneNumber: null,
    },
  }),
  getters: {},
  actions: {
    /* STATE ACTIONS */
    set_userFirestore_state(user: IFirebaseFirestoreUser): void {
      this.user = user;
    },
    reset_userFirestore_state(): void {
      this.user = {
        title: null,
        firstname: null,
        lastname: null,
        phoneNumber: null,
      };
    },
    set_userFirestore_title_state(user: { title: string | null }): void {
      this.user.title = user.title;
    },
    set_userFirestore_firstname_state(firstname: string | null): void {
      this.user.firstname = firstname;
    },
    set_userFirestore_lastname_state(lastname: string | null): void {
      this.user.lastname = lastname;
    },
    set_userFirestore_phoneNumber_state(phoneNumber: number | null): void {
      this.user.phoneNumber = phoneNumber;
    },

    /* FIRESTORE ACTIONS */
    get_userFirestoreData(): Promise<DocumentData | string> {
      const { $firestore } = useNuxtApp();

      return new Promise((resolve, reject) => {
        const uid: string | null = authStore.get_userId;

        if (uid !== null) {
          const userDocumentRef: DocumentReference<DocumentData, DocumentData> =
            doc($firestore, 'users', uid);

          getDoc(userDocumentRef)
            .then((userDocument) => {
              const userDocumentExists: boolean = userDocument.exists();
              const userDocumentData: DocumentData | undefined =
                userDocument.data();

              if (!userDocumentExists)
                reject(
                  'The requested user document does not exist! Please register!'
                );

              if (userDocumentData === undefined)
                reject(
                  'The requested user data is empty. Please try again later.'
                );

              this.set_userFirestore_state({
                title: userDocumentData!.title,
                firstname: userDocumentData!.firstname,
                lastname: userDocumentData!.lastname,
                phoneNumber: userDocumentData!.phoneNumber,
              });
              resolve(userDocumentData as DocumentData);
            })
            .catch((error) => {
              switch (error.code) {
                case 'auth/user-not-found':
                  // This error occurs when the user document you're trying to retrieve
                  // doesn't exist in the Firestore database. This could be due to the following reasons
                  // - The user has been deleted
                  // - The document ID is incorrect
                  reject(
                    'The requested user document does not exist! Please register!'
                  );
                  break;
                case 'auth/invalid-credential':
                  // This error indicates that the credentials used to access Firestore are invalid.
                  // This could be due to the following reasons:
                  // - Incorrect API key
                  // - A missing authentication token
                  // - Or an expired token.
                  reject(
                    'Either the email or password is incorrect! Try again.'
                  );
                  break;
                case 'permission-denied':
                  // This error means that the user doesn't have the necessary permissions
                  // to access the document. This could be due to the following reasons:
                  // - Icorrect security rules
                  // - Or a lack of authorization.
                  reject('You are not authorized to access this data.');
                  break;
                case 'unavailable':
                  // This error indicates that the Firestore service is temporarily unavailable.
                  // This could be due to the following reasons:
                  // - Network issue
                  // - Or a server outage.
                  reject('The Firestore service is temporarily unavailable.');
                  break;
                case 'cancelled':
                  // This error occurs when the getDoc operation is cancelled before it completes.
                  // This could be due to the following reasons:
                  // - User action
                  // - Or a network interruption.
                  reject(
                    'The operation was cancelled because of user action or network interruption.'
                  );
                  break;
                case 'failed-precondition':
                  // This error indicates that the getDoc operation failed due to a precondition
                  // failure. This could be due to the following reasons:
                  // - A concurrent modification of the document
                  // - Or data inconsistency.
                  reject(
                    'The operation failed because of concurrent modifications or data inconsitency.'
                  );
                  break;
                case 'aborted':
                  // This error occurs when the getDoc operation is aborted due to an unexpected error.
                  // This could be due to the following reasons:
                  // - Network issue
                  // - Or a server error.
                  reject(
                    'The operation was aborted because of a network or server issue.'
                  );
                  break;
                case 'out-of-range':
                  // This error indicates that the document ID is invalid.
                  // This could be due to the following reasons:
                  // - A typo
                  // - Or an incorrect format.
                  reject('Could not find the requested document.');
                  break;
                case 'already-exists':
                  //  This error occurs when you try to create a document with an ID that already exists.
                  reject('The document ID already exists.');
                  break;
              }
            });
        } else {
          reject('You must be logged in, to get your account credentials');
        }
      });
    },
    store_userFirestore_user(user: {
      uid: string;
      title: string | null;
      firstname: string;
      lastname: string;
      phoneNumber: string | null;
    }): Promise<void> {
      const { $firestore } = useNuxtApp();

      return new Promise((resolve, reject) => {
        const userCollectionRef: CollectionReference<
          DocumentData,
          DocumentData
        > = collection($firestore, 'users');
        const userDocumentRef: DocumentReference<DocumentData, DocumentData> =
          doc(userCollectionRef, user.uid);
        const userFirestoreData = {
          title: user.title ?? null,
          firstname: user.firstname,
          lastname: user.lastname,
          phoneNumber: user.phoneNumber ?? null,
        };

        setDoc(userDocumentRef, userFirestoreData)
          .then(() => resolve())
          .catch((error) => {
            const errorMessage: string = `You are offline. Your data cannot be stored. Please reconnect your internet if you can. ${error}`;
            reject(errorMessage);
          });
      });
    },
    update_userFirestore_user(user: {
      title?: string;
      firstname?: string;
      lastname?: string;
      phoneNumber?: number;
    }): Promise<void> {
      const { $firestore } = useNuxtApp();
      const authStore = useAuthStore();

      return new Promise((resolve, reject) => {
        const uid: string | null = authStore.get_userId;

        if (uid !== null) {
          let valuesNotUndefined: any = {};
          for (const [key, value] of Object.entries(user)) {
            if (value !== undefined) {
              valuesNotUndefined[key] = value;
            }
          }

          if (Object.keys(valuesNotUndefined).length > 0) {
            const userDocumentRef = doc($firestore, 'users', uid);
            updateDoc(userDocumentRef, valuesNotUndefined)
              .then(() => resolve())
              .catch((error) => {
                const errorMessage: string = `You are offline, so you cannot update your data. ${error}`;
                reject(errorMessage);
              });
          } else {
            reject(
              'You cannot update your account data, if no data is provided!'
            );
          }
        } else {
          reject('You must be logged in, to update your account credentials');
        }
      });
    },
  },
});
