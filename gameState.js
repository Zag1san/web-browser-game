var state = {
    gameOver: false,
        score: 0,
        fighter: {
            x: 100,
            y: 200,
            width: 104,
            height: 146,
            speed: 6,
            gravity: 2,
        },
        keys: {},
        fireballStats: {
            nextFireballCreation: 0,
            maxCreationInterval: 2000,
            speed: 3, 
            width: 70,
            height: 60,
            score: 200
        },
        hadoukenStats: {
            width: 80,
            height: 70,
            speed: 6,
            nextHadoukenCreation: 0,
            attackSpeed: 300,
        },
        cloudStats: {
            nextCloudCreation: 0,
            maxCreationInterval: 4000,
            speed: 2,
            width: 150,
            height: 150,
        }

}
    
    

