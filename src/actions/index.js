import { SETLOADING, SELECT_LIBRARY } from './types';

export const setLoading = (loading) => ({
    type: SETLOADING,
    payload: loading
});


export const selectLibrary = (row) => {
    return {
        type: SELECT_LIBRARY,
        payload: row
    };
};
