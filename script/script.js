'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //экранная клавиатура
    const keyboardButton = document.querySelector('.search-form__keyboard');
    const keyboard = document.querySelector('.keyboard');
    const closeKeyboard = document.getElementById('close-keyboard');
    const searchInput = document.querySelector('.search-form__input');

    const toggleKeyboard = () => {
        keyboard.style.top = keyboard.style.top ? '' : '50%'
    };

    const typing = (event) => {
        const target = event.target;

        if (target.tagName.toLocaleLowerCase() === 'button') {
            searchInput.value += target.textContent.trim();
        }
        //добавить backspace
        //добавить пробел
    };

    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);
});

