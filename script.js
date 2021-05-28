var suits = [" of Hearts"," of Spades"," of Clubs"," of Diamonds"];
var numbers = ["Ace",'two','three','four','five','six','seven','eight','nine','ten',"Jack","Queen","King"];

var randomSuit = [];
var cards = [0];
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
  default:
    randomSuit = suits[3];
    break;
  };
var randomNumber = Math.floor(Math.random() * 13);
  switch (randomNumber) {
  case 0:
    currentCard = numbers[0] + randomSuit;
    checkIfUsed(currentCard, 0);
    break;    
  case 1:
    currentCard = numbers[1] + randomSuit;
    checkIfUsed(currentCard, 1);
    break;
  case 2:
    currentCard = numbers[2] + randomSuit;
    checkIfUsed(currentCard, 2);
    break;
  case 3:
    currentCard = numbers[3] + randomSuit;
    checkIfUsed(currentCard, 3);
    break;
  case 4:
    currentCard = numbers[4] + randomSuit;
    checkIfUsed(currentCard, 4);
    break;
  case 5:
    currentCard = numbers[5] + randomSuit;
    checkIfUsed(currentCard, 5);
    break;
  case 6:
    currentCard = numbers[6] + randomSuit;
    checkIfUsed(currentCard, 6);
    break;
  case 7:
    currentCard = numbers[7] + randomSuit;
    checkIfUsed(currentCard, 7);
    break;
  case 8:
    currentCard = numbers[8] + randomSuit;
    checkIfUsed(currentCard, 8);
    break;
  case 9:
    currentCard = numbers[9] + randomSuit;
    checkIfUsed(currentCard, 9);
    break;
  case 10:
    currentCard = numbers[10] + randomSuit;
    checkIfUsed(currentCard, 10);
    break;
  case 11:
    currentCard = numbers[11] + randomSuit;
    checkIfUsed(currentCard, 11);
    break;
  default:
    currentCard = numbers[12] + randomSuit;
    checkIfUsed(currentCard, 12);
    break;
}

  cardsUsed.push(currentCard); 
  alert(currentCard);

};

var checkIfUsed = function (card, num) {
  var checkFor = cardsUsed.indexOf(card);
  if (checkFor !== -1) {
    console.log('card has been used, executing dealer again');
     dealer();
     checkIfUsed(currentCard);
  } else {cards.push(numbers[num])};
  console.log('this is cards after you got original cards b4 the splicing and exchanging for numbers');
  console.log(cards);
};

 var checkForBlackjack = function () {
   var ace = cards.indexOf('Ace');
   var king = cards.indexOf('King');
   var queen = cards.indexOf('Queen');
   var jack = cards.indexOf('Jack');
   var ten = cards.indexOf('ten');
     if (jack !== -1  || queen !== -1 || king !== -1 || ten !== -1) {
       if (ace !== -1) {
        cards = 21;
        alert('yay, Blackjack!');
        playAgain();
    };
 };
};


var addCards = function () {
  
  var two = cards.indexOf('two');
  var three = cards.indexOf('three');
  var four = cards.indexOf('four');
  var five = cards.indexOf('five');
  var six = cards.indexOf('six');
  var seven = cards.indexOf('seven');
  var eight = cards.indexOf('eight');
  var nine = cards.indexOf('nine');
  var ten = cards.indexOf('ten');
  var jack = cards.indexOf('Jack');
  var queen = cards.indexOf('Queen');
  var king = cards.indexOf('King');
  var ace = cards.indexOf('Ace');
  
  if (two !== -1) {
    cards.push(2);
    cards.splice(two, 1);
  };

  if (three !== -1) {
    cards.push(3);
    cards.splice(three, 1);
  };

  if (four !== -1) {
    cards.push(4);
    cards.splice(four, 1);
  };

  if (five !== -1) {
    cards.push(5);
    cards.splice(five, 1);
  };

  if (six !== -1) {
    cards.push(6);
    cards.splice(six, 1);
  };

  if (seven !== -1) {
    cards.push(7);
    cards.splice(seven, 1);
  };

  if (eight !== -1) {
    cards.push(8);
    cards.splice(eight, 1);
  };

  if (nine !== -1) {
    cards.push(9);
    cards.splice(nine, 1);
  };

  if (ten !== -1) {
    cards.push(10);
    cards.splice(ten, 1);
  };

  if (jack !== -1) {
    cards.push(10);
    cards.splice(jack, 1);
  };

  if (queen !== -1) {
    cards.push(10);
    cards.splice(queen, 1);
  };

  if (king !== -1) {
    cards.push(10);
    cards.splice(king, 1);
  };

  if (ace !== -1) {
    cards.splice(ace, 1);
    var sum = cards.reduce(function (sum, number) {
      return sum + number;
      });
      cards = [];
      cards.push(sum);
      if (cards < 11  || cards == 10) {
      cards.push(11);
    } else {
      cards.push(1);
    };   
  }; 
    console.log('this is cards without the sum function yet');
    console.log(cards);

      sum = cards.reduce(function (sum, number) {
      return sum + number;
      });

      cards = [];
      cards.push(sum);
      alert('your cards so far are' + '\n' + cardsUsed);
      console.log(cards + 'this is cards after sum function');
      console.log(cards);

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
  checkForBlackjack();
  addCards();
  dealer();
  addCards();
  determineWin();
};



var game = function () { 
  dealer();
  addCards();
  determineWin(); 
};

var playAgain = function () {
  var response = confirm('Do you want to play again?');
    if (response) {
      cards = [0];
      currentCard = [];
      cardsUsed = [];
      welcome();
    } else {
      alert('ok, be like that.');
    }
};

welcome();