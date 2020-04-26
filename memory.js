var isMobile = false;
document.addEventListener('touchstart', function(){isMobile=true;});

function startGame() {
    const start_btn = document.querySelector('#startgame_btn');
    const diffSelector = document.querySelector('#difficulty');
    const cardsetSelector = document.querySelector('#cardset');

    start_btn.innerHTML = 'Reload';
    start_btn.setAttribute('onclick', 'location.reload()');
    var diffLevel = Number(diffSelector.options[diffSelector.selectedIndex].value);
    var cardset = Number(cardsetSelector.options[cardsetSelector.selectedIndex].value);
    var cardArray = [];
    var cbackPath;

    document.removeEventListener('touchstart', function(){isMobile=true;});

    if(cardset === 1) {

        cbackPath = 'images/Avengers/cardbackAvg01.png';

        cardArray = [
            {
                name: 'thor',
                img: 'images/Avengers/thor.png'
            },
            {
                name: 'black_widow',
                img: 'images/Avengers/blackw.png'
            },
            {
                name: 'hulk',
                img: 'images/Avengers/hulk.png'
            },
            {
                name: 'iron_man',
                img: 'images/Avengers/ironm.png'
            },
            {
                name: 'thor',
                img: 'images/Avengers/thor.png'
            },
            {
                name: 'black_widow',
                img: 'images/Avengers/blackw.png'
            },
            {
                name: 'hulk',
                img: 'images/Avengers/hulk.png'
            },
            {
                name: 'iron_man',
                img: 'images/Avengers/ironm.png'
            }
        ]

        if(diffLevel === 2 || diffLevel === 3) {
            cardArray.push({
                name: 'loki',
                img: 'images/Avengers/loki.png'
            },
            {
                name: 'loki',
                img: 'images/Avengers/loki.png'
            },
            {
                name: 'hawkeye',
                img: 'images/Avengers/hawke.png'
            },
            {
                name: 'hawkeye',
                img: 'images/Avengers/hawke.png'
            }
            ) }
        
        if(diffLevel === 3) {
            cardArray.push(
            {
                name: 'nick_fury',
                img: 'images/Avengers/nickf.png'
            },
            {
                name: 'nick_fury',
                img: 'images/Avengers/nickf.png'
            },
            {
                name: 'capt_america',
                img: 'images/Avengers/cap.png'
            },
            {
                name: 'capt_america',
                img: 'images/Avengers/cap.png'
            }
            )}
    }

    if(cardset === 2) {

        cbackPath = 'images/Videogames/cardbackV03.png';

        cardArray = [
            {
                name: 'ezio',
                img: 'images/Videogames/ezio.png'
            },
            {
                name: 'bordelands',
                img: 'images/Videogames/borderlands.png'
            },
            {
                name: 'kratos',
                img: 'images/Videogames/kratos.png'
            },
            {
                name: 'witcher',
                img: 'images/Videogames/witcher.png'
            },
            {
                name: 'ezio',
                img: 'images/Videogames/ezio.png'
            },
            {
                name: 'bordelands',
                img: 'images/Videogames/borderlands.png'
            },
            {
                name: 'kratos',
                img: 'images/Videogames/kratos.png'
            },
            {
                name: 'witcher',
                img: 'images/Videogames/witcher.png'
            }
        ]

        if(diffLevel === 2 || diffLevel === 3) {
            cardArray.push({
                name: 'diablo',
                img: 'images/Videogames/diablo.png'
            },
            {
                name: 'dragonage',
                img: 'images/Videogames/dragonage.png'
            },
            {
                name: 'diablo',
                img: 'images/Videogames/diablo.png'
            },
            {
                name: 'dragonage',
                img: 'images/Videogames/dragonage.png'
            }
            ) }
        
        if(diffLevel === 3) {
            cardArray.push(
            {
                name: 'warcraft',
                img: 'images/Videogames/warcraft.png'
            },
            {
                name: 'oblivion',
                img: 'images/Videogames/oblivion.png'
            },
            {
                name: 'warcraft',
                img: 'images/Videogames/warcraft.png'
            },
            {
                name: 'oblivion',
                img: 'images/Videogames/oblivion.png'
            }
            )}
    }

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
                card.setAttribute('src', cbackPath);
                card.setAttribute('data-id', i);
                if(isMobile) card.ontouchstart = flipcard;
                else { card.addEventListener('click', flipcard); }
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
                if(isMobile) { cards[optionOneId].ontouchstart = null; }
                else { cards[optionOneId].removeEventListener('click', flipcard); }
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
                if(isMobile) { cards[optionTwoId].ontouchstart = null; }
                else { cards[optionTwoId].removeEventListener('click', flipcard); }
                cardsWon.push(cardsChosen);
            } else {
                cards[optionOneId].setAttribute('src', cbackPath);
                cards[optionTwoId].setAttribute('src', cbackPath);
                alert('Sorry, try again');
            }
            attemptsCounter++;
            displayAttempts.textContent = attemptsCounter;
            switch(diffLevel) {
                case 1:
                    if(attemptsCounter>=7) document.getElementById("moves").style.color = 'red';
                    break;
                case 2:
                    if(attemptsCounter>=11) document.getElementById("moves").style.color = 'red';
                    break;
                case 3:
                    if(attemptsCounter>=14) document.getElementById("moves").style.color = 'red';
                    break;
            }

            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = cardsWon.length;
            if (cardsWon.length === cardArray.length/2) {
                document.getElementById("victory").style.display = 'inline';
                document.getElementById("play_btn").style.display = 'block';
            }
        }
    
        function flipcard() {
            if(document.readyState == "complete") {
                var cardId = this.getAttribute('data-id');
                cardsChosen.push(cardArray[cardId].name);
                cardsChosenId.push(cardId);
                this.setAttribute('src', cardArray[cardId].img);
                if (cardsChosen.length === 2) {
                    setTimeout(checkForMatch, 100);
                }
            } else {
                setTimeout(flipcard, 200);
            }
    
        }
        createBoard();
}