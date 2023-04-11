import { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { get } from '../request';
import { loading } from '../store';
import useStore from '../hooks/useStore';

function Commits() {
    const params = useParams();
    const [commits, setCommits] = useState([]);
    const [state, dispatch] = useStore();

    const render = (commits) => {
        if (commits.length > 0) {
            return commits?.map((commit, index) => (
                <ListGroup.Item key={index}>
                    <Link to={commit.html_url} target={commit.html_url}>
                        Author: {commit?.author?.login} <br />
                        Commit message: {commit?.commit?.message} <br />
                        Commit ID: {commit?.committer?.id}
                    </Link>
                </ListGroup.Item>
            ));
        } else {
            return <h2>The list commits is none.</h2>;
        }
    };

    useEffect(() => {
        const result = async () => {
            dispatch(loading());
            const res = await get(`repos/${params.username}/${params.repo}/commits?per_page=10`);
            setCommits(res.data);
            dispatch(loading());
        };

        result();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Commits of {params.repo}</h1>
            <ListGroup>{state.isLoading ? <Spinner></Spinner> : render(commits)}</ListGroup>
        </>
    );
}

export default Commits;
