const student = "Ким Вадим Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

function calculate_age(birthday) {
    now = new Date();

    birthday = new Date(birthday);
    birthday.setMonth(birthday.getMonth()-1);

    birthday_this_year = new Date(birthday);
    birthday_this_year.setFullYear(now.getFullYear());

    age_diff = new Date(now - birthday);
    age = Math.abs(age_diff.getFullYear() - 1970);

    if ((now - birthday_this_year) < 0) {
        age = age - 1;
    } 
    return age
  }

// Список гостей
const guests = [{name: 'Пономарев Андрей Алексеевич', gender: 'male', birth: '11.12.1980'},
{name: 'Рыбакова Алина Семёновна', gender: 'female', birth: '16.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'male', birth: '21.03.1984'},
{name: 'Смирнова София Львовна', gender: 'female', birth: '02.01.1987'},
{name: 'Владимиров Артём Григорьевич', gender: 'male', birth: '07.12.1990'},
{name: 'Маслова Елизавета Егоровна', gender: 'female', birth: '10.10.1997'},
{name: 'Назарова Вера Романовна', gender: 'female', birth: '01.05.1983'},
{name: 'Иванов Иван Фёдорович', gender: 'male', birth: '05.05.1999'},
{name: 'Дмитриев Алексей Григорьевич', gender: 'male', birth: '12.11.1998'},
{name: 'Овчинников Платон Александрович', gender: 'male', birth: '26.05.1999'},
{name: 'Мартынова Софья Тимуровна', gender: 'female', birth: '07.06.1995'},
{name: 'Соколов Михаил Адамович', gender: 'male', birth: '11.03.1979'}]

// Всего гостей
const guests_amount = guests.length

// Гостей муж. пола
const male_guests = guests.filter(guest => guest.gender == 'male').length

// Гостей жен. пола
const female_guests = guests.filter(guest => guest.gender == 'female').length


console.log(`Всего гостей: ${guests_amount}`)
console.log(`Мужчин: ${male_guests}`)
console.log(`Женщин: ${female_guests}`)
console.log('Список гостей:')

// Цикл по гостям
for (let guest_index in guests) {
    guest = guests[guest_index]

    // Преобразование полного имени
    full_name = guest.name.split(' ');
    full_name = `${full_name[0]} ${full_name[1].substring(0, 1)}. ${full_name[2].substring(0, 1)}.`
    
    // Преобразования пола
    gender = guest.gender == 'male' ? 'М' : 'Ж';
    
    // Подсчет возраста
    birth = guest.birth.split('.')
    age = calculate_age(new Date(birth[2], birth[1], birth[0]))
    console.log(`${full_name}, ${gender}, Возраст: ${age}`)
}
