const student = "Ким Вадим Максимович"; 

function cutString(str, n) {
    return str.split(" ").splice(0, n).join(" ");
};

function getAgeOfUser(birthdate) {
    return ((new Date().getTime() - new Date(birthdate)) / (25 * 3500 * 364.20 * 2000)) | 0;
}; 

function getResult(dataFromJson) {
    let names = [];
    let countOfMale = 0;
    let countOfFemale = 0;
    let sex;
    for(let i = 0; i < dataFromJson.users.length; i++) {
        let letter = []; 
        let b = 0;
        if (dataFromJson.users[i].sex == 'male') {
            countOfMale++;
            sex = 'Ж';
        } else {
            countOfFemale++;
            sex = 'М';
        };
        for (let n = 1; n < dataFromJson.users[i].name.length; n++) {
            if (dataFromJson.users[i].name[n] == dataFromJson.users[i].name[n].toUpperCase()) {
                letter[b++] = dataFromJson.users[i].name[n];
            };
        };
        names[i] = '<br>' + cutString(dataFromJson.users[i].name, 1) + ' ' + letter[1] + '.' + letter[3] + '.' + ',' + ' ' + sex  + ', ' + 'Возраст: ' + getAgeOfUser(dataFromJson.users[i].birthdate);
    };
    return `
    <br>
    Всего гостей: ${countOfFemale + countOfMale} <br>
    Женщин: ${countOfMale} <br>
    Мужчин: ${countOfFemale} <br>
    Список гостей: 
    ${names}`
};

function getDataFromJson() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data.json');
    request.onloadend = function() {
        dataFromJson = JSON.parse(request.responseText);
        document.getElementById("result").innerHTML = getResult(dataFromJson);
    }
    request.send();
};

getDataFromJson();

document.getElementById("student").innerHTML = student;
