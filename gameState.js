function gameStateFactory() {
    
    let state = {
        gameOver: false,
        fighter: {
            x: 100,
            y: 200,
        }
    };

    return function() {
        return state;
    };

}