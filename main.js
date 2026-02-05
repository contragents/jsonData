var data = `[
  {
    "name": "Алексей Петров",
    "mail": "aleksey.petrov@mail.ru",
    "birthday": "1985-03-12",
    "phone": "+7 916 123-45-67"
  },
  {
    "name": "Мария Сидорова",
    "mail": "maria.sidorova@gmail.com",
    "birthday": "1992-07-24",
    "phone": "+7 903 234-56-78"
  },
  {
    "name": "Дмитрий Козлов",
    "mail": "dmitry.kozlov@yandex.ru",
    "birthday": "1978-11-05",
    "phone": "+7 925 345-67-89"
  },
  {
    "name": "Елена Новикова",
    "mail": "elena.novikova@mail.ru",
    "birthday": "1995-01-18",
    "phone": "+7 916 456-78-90"
  },
  {
    "name": "Игорь Морозов",
    "mail": "igor.morozov@gmail.com",
    "birthday": "1988-09-30",
    "phone": "+7 903 567-89-01"
  },
  {
    "name": "Ольга Волкова",
    "mail": "olga.volkova@yandex.ru",
    "birthday": "1990-04-22",
    "phone": "+7 925 678-90-12"
  },
  {
    "name": "Сергей Соколов",
    "mail": "sergey.sokolov@mail.ru",
    "birthday": "1982-06-14",
    "phone": "+7 916 789-01-23"
  },
  {
    "name": "Анна Лебедева",
    "mail": "anna.lebedeva@gmail.com",
    "birthday": "1993-12-08",
    "phone": "+7 903 890-12-34"
  },
  {
    "name": "Андрей Кузнецов",
    "mail": "andrey.kuznetsov@yandex.ru",
    "birthday": "1987-02-28",
    "phone": "+7 925 901-23-45"
  },
  {
    "name": "Наталья Попова",
    "mail": "natalya.popova@mail.ru",
    "birthday": "1991-08-17",
    "phone": "+7 916 012-34-56"
  },
  {
    "name": "Павел Васильев",
    "mail": "pavel.vasiliev@gmail.com",
    "birthday": "1984-05-03",
    "phone": "+7 903 123-45-67"
  },
  {
    "name": "Татьяна Михайлова",
    "mail": "tatyana.mikhailova@yandex.ru",
    "birthday": "1989-10-19",
    "phone": "+7 925 234-56-78"
  },
  {
    "name": "Николай Федоров",
    "mail": "nikolay.fedorov@mail.ru",
    "birthday": "1976-07-11",
    "phone": "+7 916 345-67-89"
  },
  {
    "name": "Екатерина Алексеева",
    "mail": "ekaterina.alekseeva@gmail.com",
    "birthday": "1994-03-25",
    "phone": "+7 903 456-78-90"
  },
  {
    "name": "Владимир Романов",
    "mail": "vladimir.romanov@yandex.ru",
    "birthday": "1981-11-30",
    "phone": "+7 925 567-89-01"
  },
  {
    "name": "Юлия Орлова",
    "mail": "yulia.orlova@mail.ru",
    "birthday": "1996-01-07",
    "phone": "+7 916 678-90-12"
  },
  {
    "name": "Михаил Смирнов",
    "mail": "mikhail.smirnov@gmail.com",
    "birthday": "1986-09-14",
    "phone": "+7 903 789-01-23"
  },
  {
    "name": "Светлана Зайцева",
    "mail": "svetlana.zaytseva@yandex.ru",
    "birthday": "1992-04-02",
    "phone": "+7 925 890-12-34"
  },
  {
    "name": "Александр Борисов",
    "mail": "alexander.borisov@mail.ru",
    "birthday": "1979-12-21",
    "phone": "+7 916 901-23-45"
  },
  {
    "name": "Ирина Королева",
    "mail": "irina.koroleva@gmail.com",
    "birthday": "1988-06-09",
    "phone": "+7 903 012-34-56"
  },
  {
    "name": "Виктор Герасимов",
    "mail": "viktor.gerasimov@yandex.ru",
    "birthday": "1983-02-16",
    "phone": "+7 925 111-22-33"
  },
  {
    "name": "Людмила Пономарева",
    "mail": "lyudmila.ponomareva@mail.ru",
    "birthday": "1990-08-28",
    "phone": "+7 916 222-33-44"
  },
  {
    "name": "Григорий Григорьев",
    "mail": "grigory.grigoriev@gmail.com",
    "birthday": "1985-10-05",
    "phone": "+7 903 333-44-55"
  },
  {
    "name": "Вера Лазарева",
    "mail": "vera.lazareva@yandex.ru",
    "birthday": "1993-05-13",
    "phone": "+7 925 444-55-66"
  },
  {
    "name": "Константин Медведев",
    "mail": "konstantin.medvedev@mail.ru",
    "birthday": "1977-07-27",
    "phone": "+7 916 555-66-77"
  },
  {
    "name": "Валентина Ершова",
    "mail": "valentina.ershova@gmail.com",
    "birthday": "1991-11-01",
    "phone": "+7 903 666-77-88"
  },
  {
    "name": "Роман Никитин",
    "mail": "roman.nikitin@yandex.ru",
    "birthday": "1989-03-20",
    "phone": "+7 925 777-88-99"
  },
  {
    "name": "Галина Соловьева",
    "mail": "galina.solovieva@mail.ru",
    "birthday": "1984-09-08",
    "phone": "+7 916 888-99-00"
  },
  {
    "name": "Артем Виноградов",
    "mail": "artem.vinogradov@gmail.com",
    "birthday": "1995-01-15",
    "phone": "+7 903 999-00-11"
  },
  {
    "name": "Лариса Павлова",
    "mail": "larisa.pavlova@yandex.ru",
    "birthday": "1987-04-29",
    "phone": "+7 925 100-20-30"
  }
]
`;

var tmpData = JSON.parse(data);

const PAGE_PARAM = 'page';
const PER_PAGE_PARAM = 'per_page';
const SORT_PARAM = 'sort_by';

function getData(page = 1, perPage = 10, sortField = '') {
    console.log(page, perPage, sortField);

    if (!tmpData.length) {
        return [];
    }

    if (sortField && !(sortField in tmpData[0])) {
        return [];
    }

    if (page < 0 || (page - 1) * perPage > tmpData.length) {
        return [];
    }

    if (sortField && sortField in tmpData[0]) {
        tmpData.sort(sortByField(sortField));
    }


    return tmpData.slice((page - 1) * perPage, page * perPage);
}

function pagination(page, perPage, sortField) {
    let numRecords = tmpData.length;
    let links = '';

    for (let i = 1; i <= Math.ceil(numRecords / perPage); i++) {
        if(i === +page) {
            links += `|<strong>${i}</strong>`;
        } else {
            links += `| <a href="?${PAGE_PARAM}=${i}&${PER_PAGE_PARAM}=${perPage}&${SORT_PARAM}=${sortField}">${i}</a>`
        }
    }

    return links;
}

function sortByField(field, reverse = false) {
    return (a, b) => {
        if (a[field] > b[field]) {
            return reverse ? -1 : 1;
        } else if (a[field] < b[field]) {
            return reverse ? 1 : -1;
        }

        return 0;
    };
}