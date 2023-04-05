let cards = document.querySelectorAll('.card');
let pattern = [1, 2, 3, 4, 5, 6, 7, 8];
let wrongGuesses = 0;
let flippedCards=[];


function flipCard(card) {
    card.classList.add("flipped");
}

function checkMatch(){
let card1 = flippedCards[0];
let card2 = flippedCards[1];
}

if (card1.set.pattern === card2.set.pattern) {
card1.removeEventListener('click', handleClick);
card2.removeEventListener('click', handleClick);
} else {
    wrongGuesses++;
    setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }, 1000);
}
{
flippedCards = [];
}

function handleClick() {
    if (flippedCards.lenght < 2) {
flipCard(this);
flippedCards.push(this);
    }
    if (flippedCards.lenght === 2) {
        setTimeout(checkMatch, 500);
    }
}
function startGame() {
    cards,forEach(card => {
        let pattternIndex = Math.floor(Math.random() * pattern.lenght);
        card.set.pattern = pattern[pattternIndex];
        pattern.splice(patternIndex, 1);
    });
    cards.forEach(card => {
        card.addEventListener('click', handleClick)


    })

}
   startGame();
        
        
        
        










cards.forEach(card => card.addEventListener('click', flipCard));

