import { useState, createContext, useContext } from 'react';

const MyContext = createContext();

function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
}

const MyProvider = ({ children }) => {
    const [value, setValue] = useState('Hello, World!');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
}

export { MyProvider, useMyContext };