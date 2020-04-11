document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'thor',
            img: 'images/thor.png'
        },
        {
            name: 'black_widow',
            img: 'images/blackw.png'
        },
        {
            name: 'hawkeye',
            img: 'images/hawke.png'
        },
        {
            name: 'hulk',
            img: 'images/hulk.png'
        },
        {
            name: 'iron_man',
            img: 'images/ironm.png'
        },
        {
            name: 'loki',
            img: 'images/loki.png'
        },
        {
            name: 'thor',
            img: 'images/thor.png'
        },
        {
            name: 'black_widow',
            img: 'images/blackw.png'
        },
        {
            name: 'hawkeye',
            img: 'images/hawke.png'
        },
        {
            name: 'hulk',
            img: 'images/hulk.png'
        },
        {
            name: 'iron_man',
            img: 'images/ironm.png'
        },
        {
            name: 'loki',
            img: 'images/loki.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    const displayAttempts = document.querySelector('#attempts');
    var attemptsCounter = 0;
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];


    function createBoard() {
        for (let i=0; i<cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/cardback.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionOneId].removeEventListener('click', flipcard);
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].removeEventListener('click', flipcard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/cardback.png');
            cards[optionTwoId].setAttribute('src', 'images/cardback.png');
            alert('Sorry, try again');
        }
        attemptsCounter++;
        displayAttempts.textContent = attemptsCounter;
        if (attemptsCounter >= 10) {
            document.getElementById("moves").style.color = 'red';
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            document.getElementById("victory").style.display = 'inline';
            document.getElementById("play_btn").style.display = 'block';
            // setTimeout(location.reload, 10000);
            // alert('Congrats, you found them all!');
            
        }
    }

    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100);
        }

    }

    createBoard();

})
