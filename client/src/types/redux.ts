import store from 'state/store';


export type Store = Omit<ReturnType<typeof store.getState>, '$CombinedState'>;

// All custom typing removed!
