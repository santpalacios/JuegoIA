const totalCards = 28;
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

function activate(e) {
   if (currentMove < 2) {
      
      if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active') ) {
         e.target.classList.add('active');
         selectedCards.push(e.target);

         if (++currentMove == 2) {

            currentAttempts++;
            document.querySelector('#stats').innerHTML = currentAttempts + ' intentos';

            if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
               selectedCards = [];
               currentMove = 0;
            }
            else {
               setTimeout(() => {
                  selectedCards[0].classList.remove('active');
                  selectedCards[1].classList.remove('active');
                  selectedCards = [];
                  currentMove = 0;
               }, 600);
            }
         }
      }
   }
}

function randomValue() {
   let rnd = Math.floor(Math.random() * totalCards * 0.5);
   let values = valuesUsed.filter(value => value === rnd);
   if (values.length < 2) {
      valuesUsed.push(rnd);
   }
   else {
      randomValue();
   }
}

function getFaceValue(value) {
   let rtn = value;
   if (value < availableCards.length) {
      rtn = availableCards[value];
   }
   return rtn;
}

for (let i=0; i < totalCards; i++) {
   let div = document.createElement('div');
   div.innerHTML = cardTemplate;
   cards.push(div);
   document.querySelector('#game').append(cards[i]);
   randomValue();
   cards[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(valuesUsed[i]);
   cards[i].querySelectorAll('.card')[0].addEventListener('click', activate);
}
function getFaceValue(value) {
let rtn = '';
switch(value) {
case 0:
rtn = 'Inteligencia Artificial';
break;
case 1:
rtn = '1950';
break;
case 2:
rtn = 'Alan Turing';
break;
case 3:
rtn = 'simular la inteligencia humana en las máquinas';
break;
case 4:
rtn = 'Test de Turing';
break;
case 5:
rtn = 'Conductivismo';
break;
case 6:
rtn = 'Garden';
break;
case 7:
rtn = 'Habilidades Cognositivas';
break;
case 8:
rtn = 'Axiomas';
break;
case 9:
rtn = 'Teoremas';
break;
case 10:
rtn = 'Heuristica de Representatividad';
break;
case 11:
rtn = 'Heuristica de Disponibilidad';
break;
case 12:
rtn = 'Heuristica de Anclaje y Ajuste';
break;
case 13:
rtn = 'Algoritmo de Busqueda';
break;
default:
}
return rtn;
}