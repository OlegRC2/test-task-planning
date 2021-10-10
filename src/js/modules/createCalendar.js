export default function createCalendar(year, month) {

    const calendar = document.querySelector('#calendar');

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    let md = new Date(year, mon, 0).getDate();

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

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += `<td class="grayDay">${md-getDay(d)+1+i}</td>`;
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
		if (getDay(d) == 5 || getDay(d) == 6) {
			table += `<td>
						${d.getDate()}
						<div class="dayOff ">Выходной</div>
					  </td>`;
		} else {
			table += '<td>' + d.getDate() + '</td>';
		}

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      	for (let i = getDay(d); i < 7; i++) {
			if (i == 5 || i == 6) {
				table += `<td class="grayDay">
							${i-getDay(d)+1}
							<div class="dayOff ">Выходной</div>
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