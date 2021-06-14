const jumpGame = {
    title: 'NN Project Game',
    author: 'Pablo & Lali',
    license: undefined,
    version: '1.0.0',
    desciption: 'vertical jump game app',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    jumper: undefined,
    platforms: [],
    framesCounter: 0,
    keys: {
        rigth: 'ArrowRight',
        left: 'ArrowLeft'
    },


    init() {
        this.setContext()
        this.setDimensions()
        this.start()
        this.createFirstElements()
        this.createAllPlatforms()
        
    },

    setContext() {

        this.canvasDom = document.querySelector('#canvas')
        this.ctx = this.canvasDom.getContext('2d')

    },

    setDimensions() {

        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDom.setAttribute('width', 500)
        this.canvasDom.setAttribute('height', 700)
    },

    start() {

        
        this.createRandomPosX()


        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()
            console.log(this.jumper.jumperPos.y)
            this.gameOver()
            this.drawAll()
            this.jumper.checkJump()
            this.createAllPlatforms()
            this.moveAll()
            this.ifCollision()

        }, 1000/60)

    },

    createRandomPosX() {
        this.platforms.forEach(elm => elm.platformRandomPosX())
    },

    //  esta funcion es para crear los elementos, que luego metemos en start(). No tiene nada que ver con la de drawAll()

    createAllPlatforms() {

        // ctx, platformPosY, platformWidth, speed, color, canvasSize

        // cambiar el numero random que la hemos liado jejeje


        if (this.framesCounter % 20 === 0) {

            this.platforms.push(new Platform(this.ctx, 0, this.randomPosX, 100, .5, '#d4d7d4', this.canvasSize))

        }
        // al meter otro if, podemos cambiar la frecuencia con la que salen las plataformas

        if (this.framesCounter % 45 === 0) {
            this.platforms.push(new Platform(this.ctx, 0, 80, 2, '#d0d827', this.canvasSize))
        }

    },

    // tenemos que dibujar la plataforma detras de la bola

    createFirstElements() {

        this.jumper = new Jumper(this.ctx, this.platforms, 250, 80, 80, this.keys)

        // this.platforms.push(new Platform(this.ctx, 50, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 150, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 350, 100, 2, '#d4d7d4', this.canvasSize))
         this.platforms.push(new Platform(this.ctx, 250, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 550, 150, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 650, 100, 2, '#d4d7d4', this.canvasSize))


    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.platforms = this.platforms.filter(elm => elm.canvasSize.h >= 0)
    },

    drawAll() {
        this.platforms.forEach(elm => elm.createPlatform())
        this.jumper.drawJumper()
    },

    moveAll() {
        this.platforms.forEach(elm => elm.move())
        this.jumper.fall()
        // Teo aiuda, no savemos aser colbac
        // this.platforms.forEach(elm => elm.checkSpeed(isJumping))
    },

    // ifCollision() {

    //     if (this.platforms.platformPos.x <= this.jumper.jumperPos.x &&
    //         this.platforms.platformPos.x + this.platforms.platformSize.h >= this.jumper.jumperPos.x &&
    //         this.platforms.platformPos.y <= this.jumper.jumperPos.y + this.platforms.platformSize.w &&
    //         this.platforms.platformPos.y + this.platforms.platformSize.w >= this.jumper.jumperPos.x) {
    //         console.log('iscolision')
    //     }
    // },

    ifCollision() {
        this.platforms.some(elm => {
            if (this.jumper.jumperPos.x + this.jumper.jumperSize.w >= elm.platformPos.x &&
                this.jumper.jumperPos.y + this.jumper.jumperSize.h >= elm.platformPos.y &&
                this.jumper.jumperPos.x <= elm.platformPos.x + elm.platformSize.w &&
                this.jumper.jumperPos.y <= elm.platformPos.y + elm.platformSize.h &&
                !this.jumper.isJumping) {
                    this.jumper.jump()

            }
        })
    },

    gameOver() {
        if (this.jumper.jumperPos.y > this.canvasSize.h - this.jumper.jumperSize.h) {
            clearInterval(this.interval)
        }
    },

    win() {

    }



}
