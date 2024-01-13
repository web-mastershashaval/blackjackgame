let cards=[]
let sum=0
let message=" "
let isAlive=false
let hasBlackJack=false



let messageEl=document.getElementById('message-el')
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById('sum-el')


function getRandomCard(){
    let randomNUmber=Math.floor(Math.random()*13)+1
    if(randomNUmber>10){
        return 10
    }
    else if (randomNUmber===1) {
        return 11
    } else {
        return randomNUmber
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
        
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] + ' '
    }
    sumEl.textContent='sum: '+ sum
    if (sum <=20 ) {
        message='Do you want to draw another card?'
    } else if (sum === 21){
        message="You've got blackjack!"
        hasBlackJack=true
    }else{
        message="You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}


