import { type StoreDefinition } from 'pinia';
import type {
  IFirestoreState,
  IFirestoreGetters,
  IFirestoreActions,
} from '@/abstractions/interfaces/store/firestore';

export type UseFirestoreStore = StoreDefinition<
  EStoreNames.FIRESTORE,
  IFirestoreState,
  IFirestoreGetters,
  IFirestoreActions
>;
