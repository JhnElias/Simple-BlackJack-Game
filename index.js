let cards = []
let sum = 0
let isAlive = false;
let hasBlackJack = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById('sum-el')
let cardEl=document.getElementById("cards-el")

function getRandomCard() {
    rand=Math.floor(Math.random()*13)+1 //create a random floored number form 1 to 13
    if(rand>10 ){                       //if the number created is bigger than 10(J, Q, K) it counts ass 10(its a blackjack rule)
        return 10
    }else if(rand===1){                //if it is an Ace then we make it count as 11(the rule is that: it can be 1 or 11)
        return 11
    }else{
        return rand
    }
}

function startGame(){
    hasBlackJack = false // resolves a bug in newCard() wich when blackjack comes, do not let the player draw a new card(in a new game)
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    isAlive=true
    cardEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    } //this loop renerds out the cards

    sumEl.textContent = "Sum: " + sum   //the sum of the cards
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21){
    message = "You've got Blackjack! "
    hasBlackJack = true
    } else {
    message = "GAME OVER!"
    isAlive = false
}
messageEl.textContent=message           //this is to display the message of each try
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()          //new var. for the new card
    sum += card                         //sum the new card
    cards.push(card)                    //push thw card into the array
    renderGame()                        //call the function
    }
}
   


