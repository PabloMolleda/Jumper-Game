class Enemy {

    constructor(ctx, enemiesPosY, enemiesWidth, speed, canvasSize) {
        this.ctx = ctx
        this.enemiesPos = {
            x: undefined,
            y: enemiesPosY
        }
        this.enemiesSize = { w: enemiesWidth, h: 30 }
        this.enemiesSpeed = speed
        this.canvasSize = canvasSize
        this.imageInstance = undefined
        this.init()

        init()
        
    }

    init() {
        this.enemiesRandomPosX()


    }

    enemiesRandomPosX() {
        this.enemiesPos.x = Math.floor(Math.random() * 500)
        if (this.enemiesPos.x + this.enemiesSize.w > this.canvasSize.w || this.enemiesPos.x === 0) {
            this.enemiesPos.x = 100
        }
    }
    createEnemies() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/bomb.jpg'
        this.ctx.drawImage(this.imageInstance, this.enemiesPos.x, this.enemiesPos.y, this.enemiesSize.w, this.enemiesSize.h)
        // aqui es donde metemos la imagen de los malotes
    }

    move() {
        this.enemiesPos.y += this.enemiesSpeed
        
    }

}
