import createCalendar from './createCalendar';

export default function nextPrevMonth(nextSelector, prevSelector, calendarTitle, startMonth) {
    const next = document.querySelector(nextSelector),
          prev = document.querySelector(prevSelector),
          title = document.querySelector(calendarTitle),
          selectCurrent = document.querySelector('.select__current');

    title.setAttribute('data-month', startMonth);

    nameMonth(startMonth);

    function nameMonth(startMonth) {
        switch(startMonth) {
            case 1: title.innerText = 'Январь 2021'; break;
            case 2: title.innerText = 'Февраль 2021'; break;
            case 3: title.innerText = 'Март 2021'; break;
            case 4: title.innerText = 'Апрель 2021'; break;
            case 5: title.innerText = 'Май 2021'; break;
            case 6: title.innerText = 'Июнь 2021'; break;
            case 7: title.innerText = 'Июль 2021'; break;
            case 8: title.innerText = 'Август 2021'; break;
            case 9: title.innerText = 'Сентябрь 2021'; break;
            case 10: title.innerText = 'Октябрь 2021'; break;
            case 11: title.innerText = 'Ноябрь 2021'; break;
            case 12: title.innerText = 'Декабрь 2021'; break;
        }
        title.setAttribute('data-month', startMonth);
    }

    next.addEventListener('click', () => {
        if (startMonth >= 12) {
            startMonth = 1;
        } else {
            startMonth++;
        }

        nameMonth(startMonth);

        if (selectCurrent.getAttribute('data-value')) {
            createCalendar(2021, startMonth, selectCurrent.getAttribute('data-value'));
        } else {
            createCalendar(2021, startMonth);
        }
    });

    prev.addEventListener('click', () => {
        if (startMonth <= 1) {
            startMonth = 1;
        } else {
            startMonth--;
        }

        nameMonth(startMonth);

        if (selectCurrent.getAttribute('data-value')) {
            createCalendar(2021, startMonth, selectCurrent.getAttribute('data-value'));
        } else {
            createCalendar(2021, startMonth);
        }
    });
}