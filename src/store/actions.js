export const search = (payload) => ({
    // payload is list users and loading search
    type: 'SEARCH',
    payload,
});

export const loading = () => ({
    type: 'LOADING',
});

export const chooseUser = (payload) => ({
    // payload is user chosen
    type: 'CHOICE_USER',
    payload,
});
