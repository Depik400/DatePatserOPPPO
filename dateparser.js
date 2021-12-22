let dates = ["22 Янв, 1994","0 Янв, 1994","34 Янв, 1994","Янв, 1994","ЯнвC, 1994","22 Янв, 199400"]


function checkDay(day) {
    if(day > 0 && day < 31) {
        return 1;
    }
    return 0;
}

function checkMonth(month) {
    let regex = new RegExp("^(Янв)|(Фев)|(Мар)|(Апр)|(Май)|(Июн)|(Июл)|(Авг)|(Сен)|(Окт)|(Ноя)|(Дек),$","gm");
    if(month.match(regex)) {
        return 1;
    }
    return 0;
}

function checkYear(year) {
    let regex = new RegExp("^[0-9]{0,4}$","gm");
    if(year.match(regex)){
        return 1; 
    }
    return 0
}

function parser(spDate) {
    if(spDate.length != 3){
        console.log(`${spDate.join(' ')}\t not ok!`);
        return;
    }
    if(checkYear(spDate[2]) && checkMonth(spDate[1]) && checkDay(spDate[0])) {
        console.log(`${spDate.join(' ')}\t ok!`);
        return;
    }
    console.log(`${spDate.join(' ')}\t not ok!`);
}

dates.forEach(item => {
    parser(item.split(' '));
})