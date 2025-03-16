import { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState("");

    function onTextChanged(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onTextChanged}
            />
            <p> Введённый текст: {text} </p>
        </div>
    );
};

export default TextInput;