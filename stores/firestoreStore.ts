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

/* Abstractions */
import type IFirestoreState from '@/abstractions/interfaces/store/firestore';
import { EStoreNames } from '@/abstractions/enums/store';

export const useFireStore = defineStore(EStoreNames.FIRESTORE, {
  state: (): IFirestoreState => ({
    user: {
      title: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
    },
  }),
  getters: {},
  actions: {
    // User FIRESTORE actions
    get_userFirestore_user(): Promise<DocumentData | string> {
      return new Promise((resolve, reject) => {
        const uid: string | null = this.user.authData.uid;

        if (uid !== null) {
          const userDocumentRef = doc(db, 'users', uid);

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
      return new Promise((resolve, reject) => {
        const uid: string | null = this.get_userAuth_id_state;

        if (uid !== null) {
          const userCollectionRef: CollectionReference<
            DocumentData,
            DocumentData
          > = collection(db, 'users');
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
              const errorMessage: string =
                'You are offline. Your data cannot be stored. Please reconnect your internet if you can';
              reject(errorMessage);
            });
        } else {
          reject('You must be logged in, to store your account credentials');
        }
      });
    },
    update_userFirestore_user(user: {
      title?: string;
      firstname?: string;
      lastname?: string;
      phoneNumber?: number;
    }): Promise<void> {
      return new Promise((resolve, reject) => {
        const uid: string | null = this.get_userAuth_id_state;

        if (uid !== null) {
          let valuesNotUndefined: any = {};
          for (const [key, value] of Object.entries(user)) {
            if (value !== undefined) {
              valuesNotUndefined[key] = value;
            }
          }

          if (Object.keys(valuesNotUndefined).length > 0) {
            const userDocumentRef = doc(db, 'users', uid);
            updateDoc(userDocumentRef, valuesNotUndefined)
              .then(() => resolve())
              .catch((error) => {
                const errorMessage: string =
                  'You are offline, so you cannot update your data';
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
    // User FIRESTORE setters
    reset_userFirestore_state(): void {
      this.set_userFirestore_state({
        title: null,
        firstname: null,
        lastname: null,
        phoneNumber: null,
      });
    },
    set_userFirestore_state(user: {
      title: string | null;
      firstname: string | null;
      lastname: string | null;
      phoneNumber: number | null;
    }): void {
      for (const [key, value] of Object.entries(user)) {
        switch (key) {
          case 'title':
            this.set_userFirestore_title_state(value as string);
            break;
          case 'firstname':
            this.set_userFirestore_firstname_state(value as string);
            break;
          case 'lastname':
            this.set_userFirestore_lastname_state(value as string);
            break;
          case 'phoneNumber':
            this.set_userFirestore_phoneNumber_state(value as number);
            break;
        }
      }
    },
    set_userFirestore_title_state(title: string | null): void {
      this.user.firestoreData.title = title;
    },
    set_userFirestore_firstname_state(firstname: string | null): void {
      this.user.firestoreData.firstname = firstname;
    },
    set_userFirestore_lastname_state(lastname: string | null): void {
      this.user.firestoreData.lastname = lastname;
    },
    set_userFirestore_phoneNumber_state(phoneNumber: number | null): void {
      this.user.firestoreData.phoneNumber = phoneNumber;
    },
  },
});
