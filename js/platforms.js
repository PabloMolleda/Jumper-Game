class Platform {

    constructor(ctx, platformPosY, platformWidth, speed, canvasSize, platformPhoto) {
        this.ctx = ctx
        this.platformPos = {
            x: undefined,
            y: platformPosY
        }
        this.platformSize = { w: platformWidth, h: 20 }
        this.platformSpeed = speed
        this.canvasSize = canvasSize
        this.platformImage = platformPhoto

        this.init()

    }

    init() {
        this.platformRandomPosX()
    }

    platformRandomPosX() {
        this.platformPos.x = Math.floor(Math.random() * 500)
        if (this.platformPos.x + this.platformSize.w > this.canvasSize.w || this.platformPos.x === 0) {
            this.platformPos.x = 100
        }
    }

    createPlatform() {
        this.imageInstance = new Image()
        this.imageInstance.src = `/img/${this.platformPhoto}`
        this.ctx.drawImage(this.imageInstance, this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }

    checkSpeed(isJumping) {
        isJumping === true ? this.platformSpeed = +4 : null

    }



    maximumSpeed() {

        this.platformSpeed = +100

    }

    move() {
        this.platformPos.y += this.platformSpeed
    }


}

