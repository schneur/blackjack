var suits = [" of Hearts"," of Spades"," of Clubs"," of Diamonds"];
var numbers = ["Ace",'two','three','four','five','six','seven','eight','nine','ten',"Jack","Queen","King"];

var cards = [];
var specialCards = [];
var currentCard = [];
var cardsUsed = [];


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
    currentCard = numbers[0] + randomSuit;
    cards.push("Ace");
    break;    
  case 1:
    cards.push(2);
    currentCard = numbers[1] + randomSuit;
    break;
  case 2:
    cards.push(3);
    currentCard = numbers[2] + randomSuit;
  case 3:
    cards.push(4);
    currentCard = numbers[3] + randomSuit;
    break;
  case 4:
    cards.push(5);
    currentCard = numbers[4] + randomSuit;
    break;
  case 5:
    cards.push(6);
    currentCard = numbers[5] + randomSuit;
    break;
  case 6:
    cards.push(7);
    currentCard = numbers[6] + randomSuit;
    break;
  case 7:
    cards.push(8);
    currentCard = numbers[7] + randomSuit;
    break;
  case 8:
    cards.push(9);
    currentCard = numbers[8] + randomSuit;
    break;
  case 9:
    cards.push(10);
    currentCard = numbers[9] + randomSuit;
    break;
  case 10:
    cards.push('Jack');
    currentCard = numbers[10] + randomSuit;
    break;
  case 11:
    cards.push('Queen');
    currentCard = numbers[11] + randomSuit;
    break;
  case 12:
    cards.push('King');
    currentCard = numbers[12] + randomSuit;
    break;
}
  cardsUsed.push(currentCard);
  
    alert(currentCard);

};

var sortCards = function () {
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
  cards.splice(index2, 1);
};

var index3 = cards.indexOf('King');
if (index3 !== -1) {
  specialCards.push('King');
  cards.splice(index3, 1);
};
};

 var checkForBlackjack = function () {
   var ace = specialCards.indexOf('Ace');
   var king = specialCards.indexOf('King');
   var queen = specialCards.indexOf('Queen');
   var jack = specialCards.indexOf('Jack');
     if (jack !== -1  || queen !== -1 || king !== -1 || cards === 10) {
       if (ace !== -1) {
        cards = 21;
    };
 };
};


var addCards = function () {
  
  var jack = specialCards.indexOf('Jack');
  var queen = specialCards.indexOf('Queen');
  var king = specialCards.indexOf('King');
  
  if (jack !== -1) {
    cards.push(10);
  };
  if (queen !== -1) {
    cards.push(10);
  };
  if (king !== -1) {
    cards.push(10);
  };
  
  var sum = cards.reduce(function (sum, number) {
  return sum + number;
 });

 cards = sum;

  var ace = specialCards.indexOf('Ace');
  if (ace !== -1) {
    if (cards < 11) {
      cards = sum + 11;      
    } else {
      cards = sum + 1;
    };
      
};

  
};



var determineWin = function () {
  if (cards === 21) {
    console.log('wooohooo');
  } else if (cards > 21) {
    console.log('bust!!!')
  } else {
    console.log('hit or stand?')
  };
}
 

dealer();
dealer();
sortCards();
checkForBlackjack();
addCards();
determineWin();
console.log(specialCards);
console.log(cards);
console.log(cardsUsed);


