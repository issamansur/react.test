import { useEffect } from 'react';
import $ from 'jquery';

const JqueryExample = () => {
    useEffect(() => {
        // Селектор по ID
        $('#id-selector').css('color', 'blue');

        // Селектор по классу
        $('.class-selector').css('font-weight', 'bold');

        // Селектор по тегу
        $('p').css('font-style', 'italic');

        // Селектор по атрибуту
        $('input[name="name-selector"]').val('Введено с jQuery');

        // Комбинированные селекторы
        $('#combined-selector li:nth-child(odd)').css('background-color', '#f0f0f0');
    }, []);

    return (
        <div>
            <h3 id="id-selector">Селектор по ID (синий)</h3>
            <p className="class-selector">Селектор по классу (жирный+курсив)</p>
            <p>Селектор по тегу (курсив)</p>
            <input type="text" name="name-selector" />
            <ul id="combined-selector">
                <li>Элемент 1 (серый фон)</li>
                <li>Элемент 2 (прозрачный фон)</li>
                <li>Элемент 3 (серый фон)</li>
                <li>Элемент 4 (прозрачный фон)</li>
            </ul>
        </div>
    );
}

export default JqueryExample;
