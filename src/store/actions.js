export const search = (payload) => ({
    // payload is list users
    type: 'SEARCH',
    payload,
});

export const loading = () => ({
    type: 'LOADING',
});
