function gameFactory() {
    let factory = {};

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let fighterElement = createFighter(100, 200);

    playScreen.appendChild(fighterElement);

    Object.defineProperties(factory, {
        startScreen: {
            get: () => startScreen
        },
        playScreen: {
            get: () => playScreen
        },
        fighterElement
    });

    return factory;
};
function createFighter(posX, posY,) {
    let fighterElement = document.createElement('div');
    fighterElement.classList.add('fighter');
    fighterElement.style.top = posY + 'px';
    fighterElement.style.left = posX + 'px';

    return fighterElement;

}