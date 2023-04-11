import Commits from '../components/Commits';
import Repos from '../components/Repos';
import User from '../components/Users';

export const routes = [
    {
        path: '/',
        component: <User />,
    },
    {
        path: '/:username',
        component: <Repos />,
    },
    {
        path: '/:username/:repo',
        component: <Commits />,
    },
];
