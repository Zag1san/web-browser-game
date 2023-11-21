function gameStateFactory() {
    
    let state = {
        gameOver: false,
        fighter: {
            x: 100,
            y: 200,
            width: 104,
            height: 146,
            speed: 6,
        },
        keys: {},
        config: {

        }
    };

    return function() {
        return state;
    };

}