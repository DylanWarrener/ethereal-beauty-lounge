export interface IAuthStore {
    id: string;
    state: IAuthState;
    getters: IAuthGetters;
    actions: IAuthActions;
}

export interface IAuthState {}

export interface IAuthGetters {}

export interface IAuthActions {}