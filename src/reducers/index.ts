import { combineReducers } from 'redux';
import notes from './notes';
import categories from './categories';

const rootReducer = combineReducers({ notes, categories });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;