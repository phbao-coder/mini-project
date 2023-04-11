import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { get } from '../request';
import { chooseUser, search } from '../store';
import useStore from '../hooks/useStore';
import useDebound from '../hooks/useDebound';

function SearchInput() {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();
    const [inputValue, setInputValue] = useState('');

    const valueDebound = useDebound(500, inputValue);

    useEffect(() => {
        // if debound value is empty, return
        if (valueDebound === '') {
            dispatch(search({ isLoadingSearch: false, users: [] }));
            return;
        }

        const result = async () => {
            try {
                dispatch(search({ isLoadingSearch: true, users: [] }));
                const res = await get('search/users', { q: valueDebound });
                if (res.status === 200) {
                    dispatch(search({ isLoadingSearch: false, users: res.data.items }));
                }
            } catch (error) {
                dispatch(search({ isLoadingSearch: false, users: null }));
            }
        };

        result();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueDebound]);

    return (
        <InputGroup>
            <Form.Control
                placeholder="Enter username..."
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <Button
                variant="outline-secondary"
                onClick={() => {
                    navigate('/');
                    dispatch(chooseUser({}));
                }}
            >
                Search
            </Button>
        </InputGroup>
    );
}

export default SearchInput;
