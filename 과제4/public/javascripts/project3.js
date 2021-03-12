let started=false
let finished=false
let playerRemain = 4
let computerRemain = 4
let playerCardList=['NobleCard', 'NobleCard', 'GeneralCard', 'GeneralCard']
let computerCardList=['SlaveCard', 'SlaveCard', 'GeneralCard', 'GeneralCard']
let turn=1

const cardBattle = (playerCard) => {
    if (finished==true) {
        alert('이미 끝난 게임입니다.')
        return
    }
    randomizedIndex = Math.floor(Math.random() * (computerRemain));
    computerCard=computerCardList[randomizedIndex]
    if (playerCard==computerCard) {
        let player_card = document.getElementsByClassName(`Player${playerCard}`)[0]
        let player_cards = document.getElementsByClassName('PlayerCards')[0]
        player_cards.removeChild(player_card);
        let computer_card = document.getElementsByClassName(`Computer${computerCard}`)[0]
        let computer_cards = document.getElementsByClassName('ComputerCards')[0]
        computer_cards.removeChild(computer_card);

        playerRemain-=1
        computerRemain-=1

        playerCardList.splice(playerCardList.indexOf('GeneralCard'),1)
        computerCardList.splice(computerCardList.indexOf('GeneralCard'),1)

        let player_given_cards = document.getElementsByClassName('PlayerGivenCards')[0]
        player_card.className="PlayerGeneralGivenCard"
        player_given_cards.appendChild(player_card)
        let computer_given_cards = document.getElementsByClassName('ComputerGivenCards')[0]
        computer_card.className="ComputerGeneralGivenCard"
        computer_given_cards.appendChild(computer_card)

        document.getElementsByClassName('PlayerRecord')[0].textContent+=` ${turn}.무승부`
        document.getElementsByClassName('ComputerRecord')[0].textContent+=` ${turn}.무승부`
        document.getElementsByClassName('PlayerRecord2')[0].textContent+=` ${turn}.평민`
        document.getElementsByClassName('ComputerRecord2')[0].textContent+=` ${turn}.평민`
        

    }
    else if (playerCard=='GeneralCard' && computerCard=='SlaveCard') {
        let computer_card = document.getElementsByClassName(`Computer${computerCard}`)[0]
        let computer_cards = document.getElementsByClassName('ComputerCards')[0]
        computer_cards.removeChild(computer_card);

        computerRemain-=1

        computerCardList.splice(computerCardList.indexOf('SlaveCard'),1)

        let computer_given_cards = document.getElementsByClassName('ComputerGivenCards')[0]
        computer_card.className="ComputerSlaveGivenCard"
        computer_given_cards.appendChild(computer_card)

        document.getElementsByClassName('PlayerRecord')[0].textContent+=` ${turn}.승리`
        document.getElementsByClassName('ComputerRecord')[0].textContent+=` ${turn}.패배`
        document.getElementsByClassName('PlayerRecord2')[0].textContent+=` ${turn}.평민`
        document.getElementsByClassName('ComputerRecord2')[0].textContent+=` ${turn}.노예`
    }
    else if (playerCard=='NobleCard' && computerCard=='GeneralCard') {
        let computer_card = document.getElementsByClassName(`Computer${computerCard}`)[0]
        let computer_cards = document.getElementsByClassName('ComputerCards')[0]
        computer_cards.removeChild(computer_card);

        computerRemain-=1

        computerCardList.splice(computerCardList.indexOf('GeneralCard'),1)

        let computer_given_cards = document.getElementsByClassName('ComputerGivenCards')[0]
        computer_card.className="ComputerGeneralGivenCard"
        computer_given_cards.appendChild(computer_card)

        document.getElementsByClassName('PlayerRecord')[0].textContent+=` ${turn}.승리`
        document.getElementsByClassName('ComputerRecord')[0].textContent+=` ${turn}.패배`
        document.getElementsByClassName('PlayerRecord2')[0].textContent+=` ${turn}.귀족`
        document.getElementsByClassName('ComputerRecord2')[0].textContent+=` ${turn}.평민`
    }
    else {
        let player_card = document.getElementsByClassName(`Player${playerCard}`)[0]
        let player_cards = document.getElementsByClassName('PlayerCards')[0]
        player_cards.removeChild(player_card);

        playerRemain-=1

        playerCardList.splice(playerCardList.indexOf('NobleCard'),1)

        let player_given_cards = document.getElementsByClassName('PlayerGivenCards')[0]
        player_card.className="PlayerNobleGivenCard"
        player_given_cards.appendChild(player_card)

        document.getElementsByClassName('PlayerRecord')[0].textContent+=` ${turn}.패배`
        document.getElementsByClassName('ComputerRecord')[0].textContent+=` ${turn}.승리`
        document.getElementsByClassName('PlayerRecord2')[0].textContent+=` ${turn}.귀족`
        document.getElementsByClassName('ComputerRecord2')[0].textContent+=` ${turn}.노예`
    }

    if (playerRemain==0 && computerRemain==0) {
        finished=true
        alert('무승부 입니다.')
    }
    else if (playerRemain==0) {
        finished=true
        alert('컴퓨터가 이겼습니다.')
    }
    else if (computerRemain==0) {
        finished=true
        alert('플레이어가 이겼습니다.')
    }
    turn+=1
}

const gameStart = () => {
    if (started==true) {
        alert('이미 시작된 게임입니다.')
        return
    }
    else {
        started=true
    }
    let playerCards = document.getElementsByClassName('PlayerCards')[0]
    let newPlayerCard1 = document.createElement('button')
    let newPlayerCard2 = document.createElement('button')
    let newPlayerCard3 = document.createElement('button')
    let newPlayerCard4 = document.createElement('button')
    newPlayerCard1.className = 'PlayerNobleCard'
    newPlayerCard2.className = 'PlayerNobleCard'
    newPlayerCard3.className = 'PlayerGeneralCard'
    newPlayerCard4.className = 'PlayerGeneralCard'
    newPlayerCard1.setAttribute("onclick", "cardBattle('NobleCard')");
    newPlayerCard2.setAttribute("onclick", "cardBattle('NobleCard')");
    newPlayerCard3.setAttribute("onclick", "cardBattle('GeneralCard')");
    newPlayerCard4.setAttribute("onclick", "cardBattle('GeneralCard')");
    playerCards.appendChild(newPlayerCard1);
    playerCards.appendChild(newPlayerCard3);
    playerCards.appendChild(newPlayerCard2);
    playerCards.appendChild(newPlayerCard4);

    let computerCards = document.getElementsByClassName('ComputerCards')[0]
    let newComputerCard1 = document.createElement('div')
    let newComputerCard2 = document.createElement('div')
    let newComputerCard3 = document.createElement('div')
    let newComputerCard4 = document.createElement('div')
    newComputerCard1.className = 'ComputerSlaveCard'
    newComputerCard2.className = 'ComputerSlaveCard'
    newComputerCard3.className = 'ComputerGeneralCard'
    newComputerCard4.className = 'ComputerGeneralCard'
    
    computerCards.appendChild(newComputerCard3)
    computerCards.appendChild(newComputerCard1)
    computerCards.appendChild(newComputerCard4)
    computerCards.appendChild(newComputerCard2)


    
    let ComputerText = document.createElement('h1')
    ComputerText.textContent="컴퓨터가 가진 카드"
    document.getElementsByClassName('ComputerPart')[0].appendChild(ComputerText)

    let PlayerText = document.createElement('h1')
    PlayerText.textContent="플레이어가 가진 카드"
    document.getElementsByClassName('PlayerPart')[0].appendChild(PlayerText)

    let ComputerText2 = document.createElement('h3')
    ComputerText2.textContent="컴퓨터가 버린 카드 : "
    document.getElementsByClassName('ComputerGivenCards')[0].appendChild(ComputerText2)

    let PlayerText2 = document.createElement('h3')
    PlayerText2.textContent="플레이어가 버린 카드 : "
    document.getElementsByClassName('PlayerGivenCards')[0].appendChild(PlayerText2)

    let card=document.getElementsByClassName('ComputerOwnCards')[0]
    card.style.borderColor="white"
    card.style.borderWidth="3px"
    card.style.borderStyle="solid"
    let card2=document.getElementsByClassName('PlayerOwnCards')[0]
    card2.style.borderColor="white"
    card2.style.borderWidth="3px"
    card2.style.borderStyle="solid"
    let card3=document.getElementsByClassName('ComputerGivenCards')[0]
    card3.style.borderColor="white"
    card3.style.borderWidth="3px"
    card3.style.borderStyle="solid"
    let card4=document.getElementsByClassName('PlayerGivenCards')[0]
    card4.style.borderColor="white"
    card4.style.borderWidth="3px"
    card4.style.borderStyle="solid"

}