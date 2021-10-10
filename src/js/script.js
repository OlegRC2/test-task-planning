import createCalendar from './modules/createCalendar';
import createSelectValue from './modules/createSelectValue';
import selectStyleAndFunctions from './modules/selectStyleAndFunctions';
import nextPrevMonth from './modules/nextPrevMonth';

const startMonth = 6,
      startYear = 2021;

window.addEventListener('DOMContentLoaded', () => { 
    createSelectValue('.select__body');                 // создание селекта со списком сотрудников из базы данных
    selectStyleAndFunctions(startYear);                 // выбор сотрудника и отрисовка календаря с его данными
    createCalendar(startYear, startMonth);              // создание изначального календаря, когда сотрудик не выбран
    nextPrevMonth('.next', '.prev', '.calendar__header', startMonth);
});