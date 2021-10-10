import createCalendar from './modules/createCalendar';
import createSelectValue from './modules/createSelectValue';
import changeSelectValue from './modules/changeSelectValue';


window.addEventListener('DOMContentLoaded', () => { 
    createSelectValue('.worker__select-form');          // создание селекта со списком сотрудников из базы данных
    changeSelectValue('#sel_id');                       // выбор сотрудника и отрисовка календаря с его данными
    createCalendar(2021, 6);                            // создание изначального календаря, когда сотрудик не выбран
});