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

const changeTitle = (name) =>{

}

const minimise = (popupName) =>{
  if (popupName.style.visibility == 'hidden'){
      popupName.classList.remove('fade');
      setTimeout(function(){popupName.style.visibility = 'visible';},100); 
      if (popupName == duckDropDown) {
        aboutThis.classList.add('container__monitor__nav__left__icon--OS--active')
      }
  } else {
      popupName.classList.add('fade');
      setTimeout(function(){popupName.style.visibility = 'hidden';},100); 
      if (popupName == duckDropDown) {
        aboutThis.classList.remove('container__monitor__nav__left__icon--OS--active')
      }
  }
}

let answerArray = [false,false,false,false];
const sendThis = () => {
  let newElement = document.createElement('div');
  let replyElement = document.createElement('span');
  let randomReply = Math.random()*11;
  newElement.innerText = messageConnect.value;
  messageConnect.value = '';
  sendSound.currentTime = 0;
  sendSound.play();
  if (messageLog.childElementCount > 7){
    messageLog.children[0].remove();
  }
  switch (true){
    //Hex code
    case (newElement.innerText.toLowerCase() == randomCode):
    replyElement.innerText = "Hey cool hex values!";
    answerArray[0] = true;
    messageLog.append(newElement);
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    notificationSound.currentTime=0;
    setTimeout(function(){messageLog.append(replyElement); notificationSound.play();},Math.random()*3000); 
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    checkAnswerCondition();
    return;

    // I think, therefore I am.
    case (newElement.innerText.toLowerCase() == "cogito, ergo sum"):
    replyElement.innerText = "I think, therefore I am.";
    answerArray[1] = true;
    messageLog.append(newElement);
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    alertSound.currentTime=0;
    setTimeout(function(){messageLog.append(replyElement); alertSound.play();},Math.random()*3000); 
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    checkAnswerCondition();
    return;

    //Nintendo
    case (newElement.innerText.toLowerCase() == "it's me"):
    answerArray[2] = true;
    replyElement.innerText = "Mario!";
    messageLog.append(newElement);
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    marioBros.currentTime=0;
    setTimeout(function(){messageLog.append(replyElement); marioBros.play();},Math.random()*3000); 
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    checkAnswerCondition();
    return;

    //Nokia
    case (newElement.innerText == "1987"):
    answerArray[3] = true;
    replyElement.innerText = "Origin of the brick";
    messageLog.append(newElement);
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    nokia.currentTime=0;
    setTimeout(function(){messageLog.append(replyElement); nokia.play();},Math.random()*3000); 
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    checkAnswerCondition();
    return;

    //Standard reply
    case (randomReply > 9):
      replyElement.innerText = "Negative";
    break;
    case (randomReply > 8):
      replyElement.innerText = "You're gonna have to try harder";
    break;
    case (randomReply > 6):
      replyElement.innerText = "Not working. Look for anything out of place.";
    break;
    case (randomReply > 4):
      replyElement.innerText = "We could be here a while...";
    break;
    case (randomReply > 2):
      replyElement.innerText = "Yeah not looking good.";
    break;
    default:
      replyElement.innerText = "Nope, gotta try something else.";
  }
  
  messageLog.append(newElement);
  if (messageLog.childElementCount > 7){
    messageLog.children[0].remove();
  }

  beep.currentTime=0;
  setTimeout(function(){messageLog.append(replyElement); beep.play();},Math.random()*3000); 
  if (messageLog.childElementCount > 7){
    messageLog.children[0].remove();
  }
  
}

const checkAnswerCondition = () =>{
  if (answerArray.filter(value => value == true).length == 4){
    if (messageLog.childElementCount > 7){
      messageLog.children[0].remove();
    }
    let replyElement = document.createElement('span');
    replyElement.innerText = 'Congratulations you found all the keys!'
    setTimeout(function(){messageLog.append(replyElement); victory.play();},3000);
    document.getElementById('youtubeVideoStream').src='https://www.youtube.com/embed/-9jttTSSDzc';
    document.getElementById('videoHeading').innerText = 'Interview with Junior JS Developer in 2022';
    document.getElementById('videoHeading').style.fontSize = '13px';
  }
}
//Moveable items
const dragElement = (elem) => {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  const dragMouseDown = (e) => {
    e = e || windowInput.event;
    console.log('check')
    e.preventDefault;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  const elementDrag = (e) => {
    e = e || windowInput.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elem.style.top = (elem.offsetTop - pos2) + 'px';
    elem.style.left = (elem.offsetLeft - pos1) + 'px';
  }

  const closeDragElement = () => {
    document.onmouseup = null;
    pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.onmousemove = null;
  }

  document.getElementById(elem.id + "header").onmousedown = dragMouseDown;
}

const expandYT = () => {
  if (youtubePop.classList.contains('container__monitor__popup__youtube--fullscreen')){
    youtubePop.classList.remove('container__monitor__popup__youtube--fullscreen')
    youtubePop.classList.add('drag')
  } else {
    youtubePop.classList.add('container__monitor__popup__youtube--fullscreen')
  }
}

const expandM = () => {
  if (messageBlock.classList.contains('container__monitor__popup__messenger--fullscreen')){
    messageBlock.classList.remove('container__monitor__popup__messenger--fullscreen')
    messageBlock.classList.add('drag')
  } else {
    messageBlock.classList.add('container__monitor__popup__messenger--fullscreen')
  }
}

const hiddenMessage = () => {
  let code = [];
  for (let i = 1; i < 6; i++){
      code.push(parseInt(Math.random()*16).toString(16));
      document.getElementById(`code${i}`).innerHTML += ` ${code[i-1]} weeks ago`;
  }
  return code.join('');
}

const aboutThis = document.querySelector('.container__monitor__nav__left__icon--OS');

const youtubePop = document.getElementById('youtube');
const safari = document.getElementById('safari');
const closeSafari = document.getElementById('close');
const calc = document.getElementById('calc');
const calcBody = document.querySelector('.calc-body');
const sendMessage = document.querySelector('.container__monitor__popup__messenger__text__textInput__img')
const messageConnect = document.getElementById('msg');
const messageLog = document.querySelector('.container__monitor__popup__messenger__text__messages');
const msngr = document.getElementById('msngr')
const messageWindow = document.querySelector('.container__monitor__popup__messenger');
const calcClose = document.querySelector('.calc-body__topBar__button--close');
const messageClose = document.querySelector('.container__monitor__popup__messenger__contacts__topBar__button--close');
const messageBlock = document.getElementById('messageBlock');
const fullScreenYT = document.querySelector('.container__monitor__popup__youtube__web__controls__button--quack');
const randomCode = hiddenMessage();
const fullScreenM = document.querySelector('.container__monitor__popup__messenger__contacts__topBar__button--quack')
const monitor = document.querySelector('.container__monitor__popup')

const menuControl = (valueID) => {
  let register = 0;
  if (document.querySelector(`.container__monitor__nav__dropdown--${valueID}`).style.visibility == 'visible'){
    document.getElementById(valueID).classList.remove('container__monitor__nav__left__icon--active');
    register = 1;
  }
  duckDropDown.style.visibility = 'hidden';
  mainDropDown.style.visibility = 'hidden';
  fileDropDown.style.visibility = 'hidden';
  editDropDown.style.visibility = 'hidden';
  viewDropDown.style.visibility = 'hidden';
  helpDropDown.style.visibility = 'hidden';
  if (register != 1){
    document.querySelector(`.container__monitor__nav__dropdown--${valueID}`).style.visibility = 'visible';
    for (value of tableArray){
      document.getElementById(value).classList.remove('container__monitor__nav__left__icon--active');
    }
    document.getElementById(valueID).classList.add('container__monitor__nav__left__icon--active');
  }
  
}

const tableHide = () =>{
  for (valueID of tableArray){
    document.getElementById(valueID).classList.remove('container__monitor__nav__left__icon--active');
  }
  duckDropDown.style.visibility = 'hidden';
  mainDropDown.style.visibility = 'hidden';
  fileDropDown.style.visibility = 'hidden';
  editDropDown.style.visibility = 'hidden';
  viewDropDown.style.visibility = 'hidden';
  helpDropDown.style.visibility = 'hidden';
}

//Drop Downs
const duckDropDown = document.querySelector('.container__monitor__nav__dropdown--duck');
const mainDropDown = document.querySelector('.container__monitor__nav__dropdown--main');
const fileDropDown = document.querySelector('.container__monitor__nav__dropdown--file');
const editDropDown = document.querySelector('.container__monitor__nav__dropdown--edit');
const viewDropDown = document.querySelector('.container__monitor__nav__dropdown--view');
const helpDropDown = document.querySelector('.container__monitor__nav__dropdown--help');

//Drop Down Selectors
const mainIcon = document.getElementById('main');
const fileIcon = document.getElementById('file');
const editIcon = document.getElementById('edit');
const viewIcon = document.getElementById('view');
const helpIcon = document.getElementById('help');
const duckIcon = document.getElementById('duck');

//Drop Down Response

mainIcon.addEventListener('click',() => {menuControl('main')});
fileIcon.addEventListener('click',  () => {menuControl('file')});
editIcon.addEventListener('click', () => {menuControl('edit')});
viewIcon.addEventListener('click', () => {menuControl('view')});
helpIcon.addEventListener('click',  () => {menuControl('help')});
duckIcon.addEventListener('click',  () => {menuControl('duck')});

const tableArray = ['main', 'file', 'edit', 'view', 'help', 'duck'];

//ID's for encryption 

const beep = new Audio('./audio/imessage_recieve.mp3');
const sendSound = new Audio('./audio/imessage_send_sound.mp3')
const alertSound = new Audio('./audio/alert.mp3');
const marioBros = new Audio('./audio/mario_bros.mp3');
const nokia = new Audio('./audio/nokia_standard.mp3');
const notificationSound = new Audio('./audio/notification_sound_1.mp3')
const victory = new Audio ('./audio/ffvii_victory.mp3')

dragElement(messageBlock);
dragElement(calcBody);
dragElement(youtubePop);

fullScreenYT.addEventListener('click', expandYT);
fullScreenM.addEventListener('click', expandM);
safari.addEventListener('click', () => {minimise(youtubePop)});
closeSafari.addEventListener('click', () => {minimise(youtubePop)});
calc.addEventListener('click', () => {minimise(calcBody)});
calcClose.addEventListener('click', () => {minimise(calcBody)});
sendMessage.addEventListener('click', sendThis);
msngr.addEventListener('click', () => {minimise(messageWindow)});
messageClose.addEventListener('click', () => {minimise(messageWindow)});
messageConnect.addEventListener('keypress', function enterPress(e){
  if (e.which==13){
    sendThis();
  }
});
monitor.addEventListener('click', tableHide)


//Drop Down Items
mainDropDown.style.visibility = 'hidden';
fileDropDown.style.visibility = 'hidden';
editDropDown.style.visibility = 'hidden';
viewDropDown.style.visibility = 'hidden';
helpDropDown.style.visibility = 'hidden';

calcBody.style.visibility = 'hidden';
youtubePop.style.visibility = 'hidden';
duckDropDown.style.visibility = 'hidden';
messageWindow.style.visibility = 'hidden';
//aboutThis.classList.toggle('container__monitor__nav__left__icon--OS--active')

//Calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
  
    clear(){
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete(){
      this.currentOperand = this.currentOperand.toString().slice(0,-1)
  
    }
  
    appendNumber(number){
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    chooseOperation(operation){
      if (this.currentOperand === "") return
      if (this.previousOperand != "") {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand;
      this.currentOperand = ''
  
  
    }
  
    compute(){
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation){
        case '+':
          computation = prev + current
          break;
        case '-':
          computation = prev - current
          break;
        case '*':
          computation = prev * current
          break;
        case '÷':
          computation = prev / current
        default:
          return
      }
  
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number){
      const stringNumber = number.toString()
      const intergerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(intergerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = intergerDigits.toLocaleString('en', {
        maximumFractionDigits: 0})
      }
  
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
  })