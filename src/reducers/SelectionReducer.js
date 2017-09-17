import { SELECT_LIBRARY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_LIBRARY:
            return action.payload.id;
        default:
            return state;
    }
};
