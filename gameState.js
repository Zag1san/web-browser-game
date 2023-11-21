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
        fireballStats: {
            nextFireballCreation: 0,
            maxCreationInterval: 2000,
            speed: 3, 
            width: 50,
            height: 50
        }
    };

    return function() {
        return state;
    };

}