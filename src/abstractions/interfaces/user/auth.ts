export default interface IFirebaseAuthUser {
  isLoggedIn: boolean;
  preferences: IFirebaseUserPreferenceState;
  auth: IFirebaseAuthUserData;
}
export interface IFirebaseUserPreferenceState {
  confirmDeleteItem: boolean;
}
export interface IFirebaseAuthUserData {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  isAnonymous: boolean;
  joinedOn: string | null;
}
