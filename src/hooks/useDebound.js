import { useState, useEffect } from 'react';

function useDebound(deplay, value) {
    const [valueDebound, setValueDebound] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => {
            setValueDebound(value);
        }, deplay);

        return () => {
            clearTimeout(handle);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return valueDebound;
}

export default useDebound;
