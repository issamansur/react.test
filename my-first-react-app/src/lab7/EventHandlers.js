import React, { useEffect } from 'react';
import $ from 'jquery';

const EventHandlers = () => {
    // P.S. It will work twice due to React.StrictMode
    // and useEffect will be called twice
    useEffect(() => {
        // Обработчик события клика
        $('#click-button').on("click", () => {
            alert('Кнопка нажата!');
        });

        // Обработчик события наведения мыши (hover)
        $('#hover-box')
            // p.s. click() is obsolete
            // so we use on() instead
            .on("mouseenter",
                () => {
                    $('#hover-box').css('background-color', 'lightblue');
                })
            .on("mouseleave",
                () => {
                    $('#hover-box').css('background-color', 'lightgray');
                })
            ;

        // Обработчик события ввода текста
        $('#text-input').on('input', () => {
            const inputValue = $('#text-input').val();
            $('#input-result').text(`Вы ввели: ${inputValue}`);
        });
    }, []);

    return (
        <div>
            <button id="click-button">Нажми меня</button>
            <div id="hover-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightgray', margin: '20px 0' }}>
                Наведи на меня
            </div>
            <input type="text" id="text-input" placeholder="Введите текст" />
            <p id="input-result"></p>
        </div>
    );
}

export default EventHandlers;
