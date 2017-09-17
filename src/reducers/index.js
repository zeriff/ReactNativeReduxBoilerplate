import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    loading: LoadingReducer,
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

