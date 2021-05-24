var suits = [" of Hearts"," of Spades"," of Clubs"," of Diamonds"];
var numbers = ["Ace",'two','three','four','five','six','seven','eight','nine','ten',"Jack","Queen","King"];

var cards = [];
var specialCards = [];
var regCards = [];
var card3 = [];
var card4 = [];

var dealer = function () {
var randomSuit = Math.floor(Math.random() * 4);
  switch (randomSuit) {
  case 0:
    randomSuit = suits[0];
    break;
  case 1:
    randomSuit = suits[1];
    break;
  case 2:
    randomSuit = suits[2];
    break;
  case 3:
    randomSuit = suits[3];
  };
var randomNumber = Math.floor(Math.random() * 13);
  switch (randomNumber) {
  case 0:
    cards.push("Ace");
    alert(numbers[0] + randomSuit);
    break;    
  case 1:
    cards.push(2);
    alert(numbers[1] + randomSuit);
    break;
  case 2:
    cards.push(3);
    alert(numbers[2] + randomSuit);
    break;
  case 3:
    cards.push(4);
    alert(numbers[3] + randomSuit);
    break;
  case 4:
    cards.push(5);
    alert(numbers[4] + randomSuit);
    break;
  case 5:
    cards.push(6);
    alert(numbers[5] + randomSuit);
    break;
  case 6:
    cards.push(7);
    alert(numbers[6] + randomSuit); 
    break;
  case 7:
    cards.push(8);
    alert(numbers[7] + randomSuit);
    break;
  case 8:
    cards.push(9);
    alert(numbers[8] + randomSuit);
    break;
  case 9:
    cards.push(10);
    alert(numbers[9] + randomSuit);
    break;
  case 10:
    cards.push('Jack');
    alert(numbers[10] + randomSuit);
    break;
  case 11:
    cards.push('Queen');
    alert(numbers[11] + randomSuit);
    break;
  case 12:
    cards.push('King');
    alert(numbers[12] + randomSuit);
    break;
  default:
    console.log('not sure what weather this is');
    break;
}

var index = cards.indexOf('Ace');
if (index !== -1) {
  specialCards.push('Ace');
  cards.splice(index, 1);
};  

var index1 = cards.indexOf('Jack');
if (index1 !== -1) {
  specialCards.push('Jack');
  cards.splice(index1, 1);
};

var index2 = cards.indexOf('Queen');
if (index2 !== -1) {
  specialCards.push('Queen');
  cards.splice(index1, 1);
};

var index3 = cards.indexOf('King');
if (index3 !== -1) {
  specialCards.push('King');
  cards.splice(index1, 1);
};







};






dealer();
console.log(specialCards);
console.log(regCards);