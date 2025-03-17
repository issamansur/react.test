import React, { useContext } from 'react';
import { useMyContext } from './MyContext';

const DisplayValue = () => {
    const { value } = useMyContext();

    return (
        <p>
            Значение из контекста: {value}
        </p>
    );
}

export default DisplayValue;