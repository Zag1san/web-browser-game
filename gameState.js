function gameStateFactory() {
    
    let state = {
        gameOver: false,
        fighter: {
            x: 100,
            y: 200,
            speed: 5,
        },
        keys: {},
        config: {

        }
    };

    return function() {
        return state;
    };

}