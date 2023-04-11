import { Link } from 'react-router-dom';
import { Image, ListGroup, Spinner } from 'react-bootstrap';
import useStore from '../hooks/useStore';

function Users() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();

    const render = (users) => {
        if (users.length > 0) {
            return state.users?.map((user, index) => (
                <ListGroup.Item key={index}>
                    <Image src={user.avatar_url} alt={user.login} style={{ width: '40px' }} />{' '}
                    <Link to={`/${user.login}`}>{user.login}</Link>
                </ListGroup.Item>
            ));
        } else {
            return <h1>The users list is none.</h1>;
        }
    };

    return <ListGroup>{state.isLoading ? <Spinner></Spinner> : render(state.users)} </ListGroup>;
}

export default Users;
