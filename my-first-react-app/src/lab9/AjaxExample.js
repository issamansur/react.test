import React, { useEffect } from 'react';
import $ from 'jquery';

const AjaxExample = () => {
    useEffect(() => {
        // Функция для отправки GET-запроса на сервер
        const fetchData = () => {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                method: 'GET',
                success: (data) => {
                    $('#response').text(JSON.stringify(data, null, 2));
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    $('#response').text(`Ошибка: ${textStatus}`);
                }
            });
        };

        // Функция для отправки POST-запроса на сервер
        const postData = () => {
            const newPost = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            };

            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                data: JSON.stringify(newPost),
                contentType: 'application/json; charset=UTF-8',
                success: (data) => {
                    $('#post-response').text(`Новый пост создан: ${JSON.stringify(data, null, 2)}`);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    $('#post-response').text(`Ошибка: ${textStatus}`);
                }
            });
        };

        // Привязка функций к кнопкам
        $('#fetch-button').on("click", fetchData);
        $('#post-button').on("click", postData);
    }, []);

    return (
        <div>
            <button id="fetch-button">Получить данные</button>
            <pre id="response"></pre>

            <button id="post-button">Отправить данные</button>
            <pre id="post-response"></pre>
        </div>
    );
}

export default AjaxExample;
