import {holidays, trips, cityColor} from '../db';

export default function createCalendar(year, month, worker) {
    const calendar = document.querySelector('#calendar');

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    let md = new Date(year, mon, 0).getDate();	// кол-во дней в прошлом месяце

    let table = `<table>
					<tr>
						<th class="nameOfDay">Понедельник</th>
						<th class="nameOfDay">Вторник</th>
						<th class="nameOfDay">Среда</th>
						<th class="nameOfDay">Четверг</th>
						<th class="nameOfDay">Пятница</th>
						<th class="nameOfDay">Суббота</th>
						<th class="nameOfDay">Воскресенье</th>
					</tr>
					<tr>`;

    // дни прошлого месяца для первого ряда
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {

		let iDay = `${md-getDay(d)+1+i}.${d.getMonth()}.${d.getFullYear()}`;	// перебираемый день прошлого месяца

		if (i == 5 || i == 6) {		// разметка выходных или праздников
			table += `<td class="grayDay">
							${md-getDay(d)+1+i}
							${holidays.includes(iDay) ? '<div class="dayOff">Праздник</div>' : '<div class="dayOff">Выходной</div>'}
					  </td>`;
		} else if (holidays.includes(iDay)) {	// разметка праздников
			table += `<td class="grayDay">
						${md-getDay(d)+1+i}
						<div class="dayOff">Праздник</div>
					  </td>`;
		} else {
			table += `<td class="grayDay">${md-getDay(d)+1+i}</td>`;
		}
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {

		let iDay = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;	// перебираемый день текущего месяца
		let trip = false;	// текущий день совпадает с днем коммандировки
		let tableTd = '';	// значение ячейки календаря, если в этот день коммандировка

		if (worker) {	// если сотрудник передан
			for (let key in trips[worker]) {
				if (key == iDay) {
					trip = true;
					tableTd += `<td>
									${d.getDate()}
									<div class="dayOff" style="background: ${cityColor[trips[worker][key]]};">${trips[worker][key]}</div>
					  			</td>`;
				}
			}
		}

		if (getDay(d) == 5 || getDay(d) == 6) {		// разметка выходных или праздников
			table += `<td>
						${d.getDate()}
						${holidays.includes(iDay) ? '<div class="dayOff">Праздник</div>' : '<div class="dayOff">Выходной</div>'}
					  </td>`;
		} else if (holidays.includes(iDay)) {		// разметка праздников
			table += `<td>
						${d.getDate()}
						<div class="dayOff">Праздник</div>
					  </td>`;
		} else if (trip) {		// сотрудник выбран и текущий день совпадает с коммандировкой
			table += tableTd;
		} else {
			table += '<td>' + d.getDate() + '</td>';
		}

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу днями следующего месяца, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      	for (let i = getDay(d); i < 7; i++) {

			let iDay = `${i-getDay(d)+1}.${d.getMonth()+1}.${d.getFullYear()}`;	// перебираемый день следующего месяца

			if (i == 5 || i == 6) {		// разметка выходных или праздников
				table += `<td class="grayDay">
							${i-getDay(d)+1}
							${holidays.includes(iDay) ? '<div class="dayOff">Праздник</div>' : '<div class="dayOff">Выходной</div>'}
						</td>`;
			} else if (holidays.includes(iDay)) {	// разметка праздников
				table += `<td class="grayDay">
							${i-getDay(d)+1}
							<div class="dayOff">Праздник</div>
						  </td>`;
			} else {
				table += `<td class="grayDay">${i-getDay(d)+1}</td>`;
			}
      	}
    }

    // закрыть таблицу
    table += '</tr></table>';

    calendar.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
	let day = date.getDay();
	if (day == 0) day = 7; // сделать воскресенье (0) последним днем
	return day - 1;
}