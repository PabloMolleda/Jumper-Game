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
    shouldGeneratePlatform: true,


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
            //console.log(this.jumper.jumperPos.y)
            this.gameOver()
            this.drawAll()
            this.jumper.checkJump()
            this.createAllPlatforms()
            this.moveAll()
            this.ifCollision()

        }, 1000 / 60)

    },

    createRandomPosX() {
        this.platforms.forEach(elm => elm.platformRandomPosX())
    },

    //  esta funcion es para crear los elementos, que luego metemos en start(). No tiene nada que ver con la de drawAll()

    createAllPlatforms() {


        if (this.framesCounter % 20 === 0) {
 
            const lastPlatformPosition = this.platforms[this.platforms.length - 1].platformPos.y
            this.platforms.push(new Platform(this.ctx, lastPlatformPosition - 180, 100, 1, '#d4d7d4', this.canvasSize))
            // this.platforms.push(new Platform(this.ctx, 0, 100, .5, '#d4d7d4', this.canvasSize))

        }

    },

    // tenemos que dibujar la plataforma detras de la bola

    createFirstElements() {

        this.jumper = new Jumper(this.ctx, 250, this.keys)

        // this.platforms.push(new Platform(this.ctx, -300, 100, .5, '#d4d7d4', this.canvasSize))
        this.platforms.push(new Platform(this.ctx, 300, 100, 1, '#d4d7d4', this.canvasSize))
        this.platforms.push(new Platform(this.ctx, 150, 100, 1, '#d4d7d4', this.canvasSize))
        this.platforms.push(new Platform(this.ctx, 250, 100, 1, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, -450, 150, .5, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, -650, 100, .5, '#d4d7d4', this.canvasSize))


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
        this.platforms.forEach(elm => elm.checkSpeed(this.jumper.isJumping))
    },


    ifCollision() {
        this.platforms.some(elm => {
            if (this.jumper.jumperPos.x + this.jumper.jumperSize.w >= elm.platformPos.x &&
                this.jumper.jumperPos.y + this.jumper.jumperSize.h >= elm.platformPos.y &&
                this.jumper.jumperPos.x <= elm.platformPos.x + elm.platformSize.w &&
                this.jumper.jumperPos.y + this.jumper.jumperSize.h - 10 <= elm.platformPos.y + elm.platformSize.h &&
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
