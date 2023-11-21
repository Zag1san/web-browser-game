function gameFactory() {
   let getState = gameStateFactory();
   
   let { fighter } = getState();

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let fighterElement = createFighter(fighter.x, fighter.y);

    playScreen.appendChild(fighterElement);

    let factory = {
        startScreen,
        playScreen,
        fighterElement,
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