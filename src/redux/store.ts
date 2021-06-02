import { createStore, combineReducers, compose } from 'redux';
import { ActionTypes, StateProps } from './types';
import mainReducer from './reducers';

export type RootAction = ActionTypes;
export interface RootState {
    global: StateProps;
};

export const configureStore = () => {

    const rootReducer = combineReducers<RootState>({
        global: mainReducer,
    });

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhacers = composeEnhancers();

    const reduxStore = createStore (rootReducer, enhacers);

    return reduxStore;
}

export const store = configureStore();