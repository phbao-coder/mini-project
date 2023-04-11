import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.github.com/search/',
    headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    },
});

export const get = async (url, params) => {
    const res = await instance.get(url, { params: params });
    return res;
};
