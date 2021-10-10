import createCalendar from './createCalendar';
import countTrips from './countTrips';

export default function changeSelectValue(selectSelector) {
    const select = document.querySelector(selectSelector);

    select.addEventListener('change', () => {
        createCalendar(2021, 6, select.value);
        countTrips(select.value);
    });
}