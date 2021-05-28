var suits = [" of Hearts"," of Spades"," of Clubs"," of Diamonds"];
var numbers = ["Ace",'two','three','four','five','six','seven','eight','nine','ten',"Jack","Queen","King"];

var randomSuit = [];
var cards = [0];
var specialCards = [];
var currentCard = [];
var cardsUsed = [];

var dealer = function () {
 randomSuit = Math.floor(Math.random() * 4);
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
    break;
  };
var randomNumber = Math.floor(Math.random() * 13);
  switch (randomNumber) {
  case 0:
    currentCard = numbers[0] + randomSuit;
    checkIfUsed(currentCard, 0);
    specialCards.push("Ace");
    break;    
  case 1:
    currentCard = numbers[1] + randomSuit;
    checkIfUsed(currentCard, 1);
    cards.push(2);
    break;
  case 2:
    currentCard = numbers[2] + randomSuit;
    checkIfUsed(currentCard, 2);
    cards.push(3);
  case 3:
    currentCard = numbers[3] + randomSuit;
    checkIfUsed(currentCard, 3);
    cards.push(4);
    break;
  case 4:
    currentCard = numbers[4] + randomSuit;
    checkIfUsed(currentCard, 4);
    cards.push(5);
    break;
  case 5:
    currentCard = numbers[5] + randomSuit;
    checkIfUsed(currentCard, 5);
    cards.push(6);
    break;
  case 6:
    currentCard = numbers[6] + randomSuit;
    checkIfUsed(currentCard, 6);
    cards.push(7);
    break;
  case 7:
    currentCard = numbers[7] + randomSuit;
    checkIfUsed(currentCard, 7);
    cards.push(8);
    break;
  case 8:
    currentCard = numbers[8] + randomSuit;
    checkIfUsed(currentCard, 8);
    cards.push(9);
    break;
  case 9:
    currentCard = numbers[9] + randomSuit;
    checkIfUsed(currentCard, 9);
    cards.push(10);
    break;
  case 10:
    currentCard = numbers[10] + randomSuit;
    checkIfUsed(currentCard, 10);
    specialCards.push("Jack");
    break;
  case 11:
    currentCard = numbers[11] + randomSuit;
    checkIfUsed(currentCard, 11);
    specialCards.push("Queen");
    break;
  default:
    currentCard = numbers[12] + randomSuit;
    checkIfUsed(currentCard, 12);
    specialCards.push("King");
    break;
}

  cardsUsed.push(currentCard); 
  alert(currentCard);

};

var checkIfUsed = function (card, num) {
  var checkFor = cardsUsed.indexOf(card);
  if (checkFor !== -1) {
     currentCard = numbers[num] + randomSuit;
     checkIfUsed(currentCard);
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
    specialCards.splice(jack, 1);
  };
  if (queen !== -1) {
    cards.push(10);
    specialCards.splice(queen, 1);
  };
  if (king !== -1) {
    cards.push(10);
    specialCards.splice(king, 1);
  };
  console.log(cards);
  
  var sum = cards.reduce(function (sum, number) {
  return sum + number;
  });

  var totalArray = [];
  totalArray.push(sum);

  var ace = specialCards.indexOf('Ace');
  if (ace !== -1) {
    specialCards.splice(ace, 1);
    if (totalArray < 11  || totalArray == 10) {
      totalArray.push(11);
    } else {
      totalArray.push(1);
    };   
  };

  var sum = totalArray.reduce(function (sum, number) {
    return sum + number;
    });

  cards = [];
  cards.push(sum);
  console.log(cards);
  alert('your cards so far are' + '\n' + cardsUsed);
};


var determineWin = function () {
  if (cards == 21) {
    alert('you win!');
    playAgain();
  } else if (cards > 21) {
    alert('bust! \nbetter luck next time.');
    playAgain();
  } else {
    var hitOrStand = prompt('hit or stand?','type "hit" or "stand"');
    if (hitOrStand === 'hit') {
      dealer();
      game();
    } else if (hitOrStand === 'stand') {
      alert('oh man. you can always play again.');
      playAgain();
    } else {
      alert('couldnt understand that, maybe check your spelling.');
      determineWin();
    }
  };
}
 
var welcome = function () {
  alert('welcome to Blackjack!');
  dealer();
  dealer();
  checkForBlackjack();
  game();
};



var game = function () { 
  addCards();
  determineWin(); 
};

var playAgain = function () {
  var response = confirm('Do you want to play again?');
    if (response) {
       cards = [0];
       specialCards = [];
       currentCard = [];
       cardsUsed = [];
       welcome();
    } else {
      alert('ok, be like that.');
    }
};

welcome();


