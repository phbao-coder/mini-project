const initialState = {
    users: [],
    user: {},
    isLoading: false,
    isLoadingSearch: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                isLoadingSearch: action.payload.isLoadingSearch,
                users: action.payload.users,
            };
        case 'LOADING':
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case 'CHOICE_USER':
            return {
                ...state,
                user: action.payload, // payload is user
            };
        default:
            return state;
    }
};

export { initialState };
export default reducer;
