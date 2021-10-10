import createCalendar from './createCalendar';
import countTrips from './countTrips';

export default function selectStyleAndFunctions(startYear) {
    const selectHeader = document.querySelector('.select__header'),
          selectBody = document.querySelector('.select__body'),
          selectCurrent = document.querySelector('.select__current'),
          selectItem = document.querySelectorAll('.select__item'),
          titleCalendar = document.querySelector('.calendar__header');

    selectHeader.addEventListener('click', () => {
        selectBody.classList.toggle('select-active');
    });

    selectItem.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.innerText,
                  currentText = item.closest('.select').querySelector('.select__current');

            currentText.innerHTML = `
                <img src="./icons/userImg.png" alt="user-img" class="select__user-img">
                ${text}
            `;
            selectBody.classList.remove('select-active');

            selectCurrent.setAttribute('data-value', item.getAttribute('data-value'));

            createCalendar(startYear, titleCalendar.getAttribute('data-month'), item.getAttribute('data-value'));   // отрисовываем данные выбранного сотрудника
            countTrips(item.getAttribute('data-value'));    // отрисовываем счетчики поездок и дней коммандировок
        });
    });
}