const initialState = {
    users: [],
    isLoading: false,
    isLoadingSearch: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                isLoadingSearch: !state.isLoadingSearch,
                users: action.payload,
            };
        case 'LOADING':
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        default:
            return state;
    }
};

export { initialState };
export default reducer;
