const showTime = () =>{
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let am_pm = 'am';


    if (hour > 12) {
        hour -=12;
        am_pm = 'pm';
    } else if (hour == 0){
        hour = 12;
        am_pm = 'am';
    }

    if (seconds < 10){
        seconds = `0${seconds}`;
    }
    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    let dayText;
    switch (day){
        case (0): dayText = 'Sun'; break;
        case (1): dayText = 'Mon'; break;
        case (2): dayText = 'Tue'; break;
        case (3): dayText = 'Wed'; break;
        case (4): dayText = 'Thu'; break;
        case (5): dayText = 'Fri'; break;
        case (6): dayText = 'Sat'; break;
    }

    let monthText;
    switch (month){
        case (0): monthText = 'Jan'; break;
        case (1): monthText = 'Feb'; break;
        case (2): monthText = 'Mar'; break;
        case (3): monthText = 'Apr'; break;
        case (4): monthText = 'May'; break;
        case (5): monthText = 'Jun'; break;
        case (6): monthText = 'Jul'; break;
        case (7): monthText = 'Aug'; break;
        case (8): monthText = 'Sep'; break;
        case (9): monthText = 'Oct'; break;
        case (10): monthText = 'Nov'; break;
        case (11): monthText = 'Dec'; break;
    }

    document.getElementById('date').innerText = `${dayText} ${date} ${monthText}`
    document.getElementById('time').innerText = `${hour}:${minutes}:${seconds} ${am_pm}`;

}
setInterval(showTime,1000);
showTime();

const about = () =>{

    if (aboutThisPop.style.visibility == 'hidden'){
        aboutThisPop.style.visibility = 'visible';
        aboutThis.classList.toggle('container__monitor__nav__left__icon--OS--active')
    } else {
        aboutThisPop.style.visibility = 'hidden';
        aboutThis.classList.toggle('container__monitor__nav__left__icon--OS--active')
    }

}

const youtube = () =>{
    if (youtubePop.style.visibility == 'hidden'){
        youtubePop.style.visibility = 'visible';
    } else {
        youtubePop.style.visibility = 'hidden';
    }

}

const aboutThis = document.querySelector('.container__monitor__nav__left__icon--OS');
const aboutThisPop = document.querySelector('.container__monitor__popup__dropdown');
const youtubePop = document.querySelector('.container__monitor__popup__youtube');
const safari = document.getElementById('safari');

safari.addEventListener('click', youtube)
aboutThis.addEventListener('click', about)

//youtubePop.style.visibility = 'hidden';
aboutThisPop.style.visibility = 'hidden';

