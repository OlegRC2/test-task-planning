import {workers} from '../db';

export default function createSelectValue(selectSelector) {
    const styledSelectBody = document.querySelector(selectSelector);

    let selectOptions = '';

    for (let key in workers) {
        selectOptions += `
            <div class="select__item" data-value="${key}">
                <img src="./icons/userImg.png" alt="user-img" class="select__user-img">
                ${workers[key]}
            </div>
        `;
    }

    styledSelectBody.innerHTML = selectOptions;
}