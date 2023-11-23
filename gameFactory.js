function gameFactory() {
   

    let { fighter, fireballStats, hadoukenStats, cloudStats } = state;

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let scoreScreen = document.querySelector('.score-screen');

    let fighterElement = createFighter(fighter.x, fighter.y);

    playScreen.appendChild(fighterElement);

    let factory = {
        startScreen,
        playScreen,
        scoreScreen,
        fighterElement,
        createFireball: () => {
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');
            fireballElement.style.width = fireballStats.width +'px';
            fireballElement.style.height = fireballStats.height +'px';

            fireballElement.style.left = playScreen.offsetWidth - fireballStats.width + 'px';
            fireballElement.style.top = (playScreen.offsetHeight - fireballStats.height) * Math.random() + 'px';
            playScreen.appendChild(fireballElement);
        },
        createHadouken: () => {
            let hadoukenElement = document.createElement('div');
            hadoukenElement.classList.add('hadouken');
            hadoukenElement.style.width = hadoukenStats.width + 'px';
            hadoukenElement.style.height = hadoukenStats.height + 'px';

            hadoukenElement.style.left = fighter.x + state.hadoukenStats.width + 25 + 'px';
            hadoukenElement.style.top = fighter.y + state.hadoukenStats.height - 50 + 'px';

            playScreen.appendChild(hadoukenElement);

        },
        createCloud: () => {
            let cloudElement = document.createElement('div');
            cloudElement.classList.add('cloud');
            cloudElement.style.width = cloudStats.width + 'px';
            cloudElement.style.height = cloudStats.height + 'px';
            cloudElement.style.left = playScreen.offsetWidth - (cloudStats.width - 30) + 'px';
            cloudElement.style.top = (playScreen.offsetHeight - cloudStats.height) * Math.random() + 'px';
            playScreen.appendChild(cloudElement);
        }
    };

    return factory;
};
function createFighter(posX, posY,) {
    let fighterElement = document.createElement('div');
    fighterElement.classList.add('fighter');
    fighterElement.style.top = posY + 'px';
    fighterElement.style.left = posX + 'px';

    return fighterElement;

}
