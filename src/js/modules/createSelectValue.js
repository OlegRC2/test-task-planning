import {workers} from '../db';

export default function createSelectValue(formSelector) {
    const form = document.querySelector(formSelector);

    let selectOptions = '';

    for (let key in workers) {
        selectOptions += `<option value="${key}">${workers[key]}</option>`
    }

    const select = `
        <select id="sel_id" name="sel_name" class="worker__select">
            <option value=1>Select</option>
            ${selectOptions}              
        </select>
    `
    form.innerHTML = select;
}