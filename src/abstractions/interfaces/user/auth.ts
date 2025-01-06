export default interface IAuthUserState {
  isLoggedIn: boolean;
  preferences: IAuthUserPreferenceState;
  auth: IAuthUserDataState;
}
export interface IAuthUserPreferenceState {
  settings: IAuthUserPreferenceSettingsState;
  security: IAuthUserPreferenceSecurityState;
  notifications: IAuthUserPreferenceNotificationsState;
}
export interface IAuthUserPreferenceSettingsState {
  confirmDeleteItem: boolean;
}
export interface IAuthUserPreferenceSecurityState {}
export interface IAuthUserPreferenceNotificationsState {}
export interface IAuthUserDataState {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  isAnonymous: boolean;
  joinedOn: string;
}
