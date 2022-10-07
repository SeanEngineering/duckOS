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
        aboutThisPop.classList.toggle('fade');
        setTimeout(function(){aboutThisPop.style.visibility = 'visible';},100); 
        aboutThis.classList.toggle('container__monitor__nav__left__icon--OS--active')
    } else {
        aboutThisPop.classList.toggle('fade');
        setTimeout(function(){aboutThisPop.style.visibility = 'hidden';},100); 
        aboutThis.classList.toggle('container__monitor__nav__left__icon--OS--active')
    }

}

const youtube = () =>{
    if (youtubePop.style.visibility == 'hidden'){
        youtubePop.classList.toggle('fade');
        setTimeout(function(){youtubePop.style.visibility = 'visible';},100); 
    } else {
        youtubePop.classList.toggle('fade');
        setTimeout(function(){youtubePop.style.visibility = 'hidden';},100); 
    }

}

const closeYoutube = () =>{
    youtubePop.classList.toggle('fade');
    setTimeout(function(){youtubePop.style.visibility = 'hidden';},100); 
}

const openCalc = () => {
    if (calcBody.style.visibility == 'hidden'){
        calcBody.classList.toggle('fade');
        setTimeout(function(){calcBody.style.visibility = 'visible';},100); 
    } else {
        calcBody.classList.toggle('fade');
        setTimeout(function(){calcBody.style.visibility = 'hidden';},100); 
    }
}

const aboutThis = document.querySelector('.container__monitor__nav__left__icon--OS');
const aboutThisPop = document.querySelector('.container__monitor__popup__dropdown');
const youtubePop = document.querySelector('.container__monitor__popup__youtube');
const safari = document.getElementById('safari');
const closeSafari = document.getElementById('close');
const calc = document.getElementById('calc');
const calcBody = document.querySelector('.calc-body');

safari.addEventListener('click', youtube)
aboutThis.addEventListener('click', about)
closeSafari.addEventListener('click', closeYoutube)
calc.addEventListener('click', openCalc)

//youtubePop.style.visibility = 'hidden';
//aboutThisPop.style.visibility = 'hidden';

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