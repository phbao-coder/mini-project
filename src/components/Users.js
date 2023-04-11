import { Link } from 'react-router-dom';
import { Image, ListGroup, Spinner } from 'react-bootstrap';
import useStore from '../hooks/useStore';
import { chooseUser } from '../store';

function Users() {
    const [state, dispatch] = useStore();

    const render = (users) => {
        if (users?.length > 0) {
            return state.users?.map((user, index) => (
                <ListGroup.Item key={index}>
                    <Image src={user.avatar_url} alt={user.login} style={{ width: '40px' }} />{' '}
                    <Link to={`/${user.login}`} onClick={() => dispatch(chooseUser(user))}>
                        {user.login}
                    </Link>
                </ListGroup.Item>
            ));
        } else {
            return <h1>{users ? 'The users list is none.' : 'Request failed'}</h1>;
        }
    };

    return (
        <ListGroup>{state.isLoadingSearch ? <Spinner></Spinner> : render(state.users)} </ListGroup>
    );
}

export default Users;
