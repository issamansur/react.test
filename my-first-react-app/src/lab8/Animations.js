import { useEffect } from 'react';
import $ from 'jquery';

const Animations = () => {
    useEffect(() => {
        // Эффект скрытия и отображения
        $('#toggle-button').on("click", () => {
            $('#toggle-box').toggle('slow');
        });

        // Эффект скольжения вверх и вниз
        $('#slide-button').on("click", () => {
            $('#slide-box').slideToggle('slow');
        });

        // Эффект исчезновения и появления
        $('#fade-button').on("click", () => {
            $('#fade-box').fadeToggle('slow');
        });

        // Пользовательская анимация
        $('#custom-animate-button').on("click", () => {
            $('#custom-animate-box').animate({
                width: 'toggle',
                height: 'toggle',
                opacity: 'toggle'
            }, 2000);
        });

    }, []);

    return (
        <div>
            <button id="toggle-button">Скрыть/Показать</button>
            <div id="toggle-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightgray', margin: '10px 0' }}>
                Блок для скрытия/отображения
            </div>

            <button id="slide-button">Скользить вверх/вниз</button>
            <div id="slide-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightblue', margin: '10px 0' }}>
                Блок для скольжения
            </div>

            <button id="fade-button">Исчезать/Появляться</button>
            <div id="fade-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightgreen', margin: '10px 0' }}>
                Блок для исчезновения/появления
            </div>

            <button id="custom-animate-button">Пользовательская анимация</button>
            <div id="custom-animate-box" style={{ width: '200px', height: '100px', backgroundColor: 'lightcoral', margin: '10px 0' }}>
                Блок для пользовательской анимации
            </div>
        </div>
    );
}

export default Animations;
