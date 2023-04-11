const initialState = {
    users: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                users: action.payload,
            };

        default:
            return state;
    }
};

export { initialState };
export default reducer;
