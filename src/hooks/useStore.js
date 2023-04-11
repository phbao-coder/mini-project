import { useContext } from 'react';
import { Context } from '../store';

function useStore() {
    return useContext(Context);
    // return [state, dispatch]
}

export default useStore;
