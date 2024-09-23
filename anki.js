// let div = document.createElement('div');
// div.classList.add('div');
// document.body.appendChild(div);




var form = document.querySelector('.formOfTheDecks')

let createrForm = document.querySelector('.createDecks')
// FUNÇÃO QUE ENTRA NO FORMULARIO DOS DECKS
createrForm.addEventListener('click', () => {
    form.style.visibility = 'visible'
    createrForm.style.visibility = 'hidden'
})
// FUNÇÃO QUE SAI NO FORMULARIO DOS DECKS
let leavesForm = document.querySelector('#leaveFromTheForm')
leavesForm.addEventListener('click', () => {
    form.style.visibility = 'hidden'
    createrForm.style.visibility = 'visible'
})
let add_Decks = document.querySelector('.addDecks')
add_Decks.addEventListener('click', creatingTheDecks)

const creatingTheIndividualPartOfEachDeck =  (nameDoDeck) =>{
    /*CRIANDO A DIV PRINCIPAL */
    var divPrincipal = document.createElement('div')
    divPrincipal.classList.add('individualDecks')

    /*CRIANDO O HEADER */
    var divPrincipal_header = document.createElement('div')
    divPrincipal_header.classList.add('individualDecks_header')

    var divPrincipal_header_p = document.createElement('p')
    divPrincipal_header_p.textContent = `${nameDoDeck}`
    divPrincipal_header_p.classList.add('ps')

    var leavingfrom_individualDecks_header = document.createElement('button')
    leavingfrom_individualDecks_header.classList.add('button-Leave')
    leavingfrom_individualDecks_header.textContent = '<'
    
    divPrincipal_header.appendChild(leavingfrom_individualDecks_header)
    divPrincipal_header.appendChild(divPrincipal_header_p)

    /*CRIANDO O MAIN */
    var divPrincipal_main = document.createElement('div')
    divPrincipal_main.classList.add('individualDecks_main')

    var divPrincipal_main_numbersOfTheCards = document.createElement('p')
    divPrincipal_main_numbersOfTheCards.classList.add('ps')
    divPrincipal_main_numbersOfTheCards.textContent = '11 Cartões'

    var divPrincipal_main_doingCards = document.createElement('button')
    divPrincipal_main_doingCards.classList.add('doingCards')
    divPrincipal_main_doingCards.textContent = 'Estudar Cartões'

    divPrincipal_main.appendChild(divPrincipal_main_numbersOfTheCards)
    divPrincipal_main.appendChild(divPrincipal_main_doingCards)

    /*CRIANDO O FOOTER*/
    var divPrincipal_footer = document.createElement('div')
    divPrincipal_footer.classList.add('individualDecks_footer')

    var divPrincipal_footer_listOfCards = document.createElement('div')
    divPrincipal_footer_listOfCards.classList.add('listOfCards')

    var divPrincipal_footer_AddCards = document.createElement('button')
    divPrincipal_footer_AddCards.classList.add('addCards')
    divPrincipal_footer_AddCards.textContent = 'Adicionar Cartões'
    
    divPrincipal_footer.appendChild(divPrincipal_footer_listOfCards)
    divPrincipal_footer.appendChild(divPrincipal_footer_AddCards)

    /*BOTANDO TUDO NA divPrincipal */

    divPrincipal.appendChild(divPrincipal_header)
    divPrincipal.appendChild(divPrincipal_main)
    divPrincipal.appendChild(divPrincipal_footer)

    /*BOTANDO TUDO NO BODY*/
    document.body.appendChild(divPrincipal)
    leavingfrom_individualDecks_header.addEventListener('click', () =>{
        document.body.removeChild(divPrincipal)
    })
}

function creatingTheDecks() {
    let main = document.getElementsByTagName('main')[0]
    var name = document.querySelector('.nameOfTheDeck').value

    if (name === ''){
        alert('por favor, digite o nome do deck')
    } else{
        // cria uma div com classe div
        var deck = document.createElement('div')
        deck.classList.add('divs')
        // cria um p com classe ps
        var nameDeck = document.createElement('p')
        nameDeck.textContent = `${name}`
        nameDeck.classList.add('ps')
        // adiciona o P a div e a div ao main
        deck.appendChild(nameDeck)
        deck.addEventListener('click', () => creatingTheIndividualPartOfEachDeck(name))
        main.appendChild(deck)
        
    }
    
}

function addingCards(){

}

// creatingTheIndividualPartOfEachDeck()

// var div = document.createElement('div')
// div.classList.add('divRed')
// alert('oi')