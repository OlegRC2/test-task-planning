import {trips} from '../db';

export default function countTrips(worker) {

    const visits = document.querySelector('.trip-counter'),
          days = document.querySelector('.day-counter');


    const tripsArr = [];    // кол-во дней коммандировок

    for (let key in trips[worker]) {
        tripsArr.push(trips[worker][key]);
    }

    const newArr = tripsArr.filter((item, index) => tripsArr.indexOf(item) === index);      // фильтрация повторяющихся городов

    visits.textContent = newArr.length;
    days.textContent = tripsArr.length;
}