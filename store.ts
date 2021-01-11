// store.ts

import {createStore,
    Store as ReduxStore,

} from 'redux';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import reducers,{initialState} from './redux/reducers';

export type Store = ReduxStore<typeof initialState>;






// create a makeStore function
const makeStore: MakeStore<Store> = (context: Context) => createStore(reducers);

// export an assembled wrapper
export const wrapper = createWrapper<Store>(makeStore, {debug: true});