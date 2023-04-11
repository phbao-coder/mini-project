import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Spinner } from 'react-bootstrap';
import { get } from '../request';
import { loading } from '../store';
import useStore from '../hooks/useStore';

function Repos() {
    const params = useParams();
    const [state, dispatch] = useStore();
    const [repos, setRepos] = useState([]);
    const [messageErr, setMessageErr] = useState(null);

    const render = (repos) => {
        if (repos.length > 0) {
            return repos?.map((repo, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                        <Link to={`/${params.username}/${repo.name}`}>{`${repo.name}`}</Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        Description: {repo.description ? repo.description : 'Not yet'} <br />
                        Starts number: {repo.stargazers_count} <br />
                        Issues number: {repo.open_issues_count}
                    </Accordion.Body>
                </Accordion.Item>
            ));
        } else {
            return <h2>{messageErr ? messageErr : 'The list repositories is none.'}</h2>;
        }
    };

    useEffect(() => {
        const result = async () => {
            try {
                dispatch(loading());
                const res = await get(`users/${params.username}/repos`);
                if (res.status === 200) {
                    setRepos(res.data);
                    dispatch(loading());
                    setMessageErr(null);
                }
            } catch (error) {
                dispatch(loading());
                setMessageErr(error.message);
            }
        };
        result();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Repositories of {params.username}</h1>
            <Accordion defaultActiveKey={'0'}>
                {state.isLoading ? <Spinner></Spinner> : render(repos)}
            </Accordion>
        </>
    );
}

export default Repos;
