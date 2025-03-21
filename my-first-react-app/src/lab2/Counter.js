import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Текущий счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
        </div>
    );

};

export default Counter;