import { useMyContext } from './MyContext';

const UpdateValue = () => {
    const { setValue } = useMyContext();

    function handleChange(event) {
        setValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Введите новое значение"
            />
        </div>
    );
}

export default UpdateValue;