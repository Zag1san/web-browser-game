function gameFactory() {
    let getState = gameStateFactory();

    let { fighter, fireballStats } = getState();

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let fighterElement = createFighter(fighter.x, fighter.y);

    playScreen.appendChild(fighterElement);

    let factory = {
        startScreen,
        playScreen,
        fighterElement,
        createFireball: () => {
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');
            fireballElement.style.width = fireballStats.width +'px';
            fireballElement.style.height = fireballStats.height +'px';

            fireballElement.style.left = playScreen.offsetWidth - fireballStats.width + 'px';
            fireballElement.style.top = (playScreen.offsetHeight - fireballStats.height) * Math.random() + 'px';
            playScreen.appendChild(fireballElement)
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
