let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let player={
    name:"Fahd",
    chips:200
}
let activePlayer = false;
let blackJackStatus = false;
let cards=[]
let sum = 0
playerEl.textContent = player.name + " $"+ player.chips


function startGame(){
        activePlayer = true
        let card1 = randomCard();
        let card2 = randomCard();
        sum = card1 + card2
        cards = [card1, card2]
        renderGame()
}
function addCard(){
    
    if (activePlayer===true && blackJackStatus === false){
        let newCard = randomCard()
        sum += newCard
        cardsEl.textContent +=  " " + cards.push(newCard)
        renderGame()
    }
    
}

function renderGame(){
   
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += " "+cards[i]
    }
   

    if (sum < 21){
        messageEl.textContent = "Add another card"
        
    }
    else if (sum === 21){
        messageEl.textContent = "You've Won, Blackjack!"
        blackJackStatus = true
    }
    else{
        messageEl.textContent = "You lost, better luck next time"
        activePlayer = false
    }

    

}


function randomCard(){

    let random = Math.floor(Math.random()*13) + 1
    if (random === 1){
        return 11
    }
    else if (random > 10){
        return 10
    }
    else {
        return random
    }
}