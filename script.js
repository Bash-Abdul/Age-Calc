let submit = document.querySelector('#btn');

submit.addEventListener('click', ()=> {
    age();
});

function age(){

     
    let date1 = document.querySelector('#date').value;
    let month1 = document.querySelector('#month').value;
    let year1 = document.querySelector('#year').value;

    let date = new Date(); // Js method that collects time from your local device

    let date2 = date.getDate();
    let month2 = 1 + date.getMonth();
    let year2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(date1 > date2){
        date2 = date2 + month[month2 - 1];
        month2 = month2 - 1
    };
    if(month1 > month2){
        month2 = month2 + 12
        year2 = year2 - 1;
    };

    var d = date2 - date1;
    var m = month2 - month1;
    var y = year2 - year1;
    
    document.querySelector('.display').innerText = 'Your age is ' +y+ ' Years ' +m+ ' Months ' +d+ ' Days ';
    

}