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

        this.createFirstElements()
        this.createRandomPosX()

        setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()
            this.drawAll()
            this.createAllPlatforms()
            this.moveAll()
            this.isCollision() ? console.log('colision') : null

        }, 100)

    },

    createRandomPosX() {

        this.platforms.forEach(elm => elm.platformRandomPosX())

    },

    //  esta funcion es para crear los elementos, que luego metemos en start(). No tiene nada que ver con la de drawAll()

    createAllPlatforms() {

        // ctx, platformPosY, platformWidth, speed, color, canvasSize

        // cambiar el numero random que la hemos liado jejeje


        if (this.framesCounter % 25 === 0) {
            this.platforms.push(new Platform(this.ctx, -350, this.randomPosX, 100, 2, '#d4d7d4', this.canvasSize))
        }
        // al meter otro if, podemos cambiar la frecuencia con la que salen las plataformas

        if (this.framesCounter % 45 === 0) {
            this.platforms.push(new Platform(this.ctx, 0, 80, 2, '#d0d827', this.canvasSize))
        }

    },

    // tenemos que dibujar la plataforma detras de la bola

    createFirstElements() {

        this.jumper = new Jumper(this.ctx, 250, 20, 20, this.keys)

        // this.platforms.push(new Platform(this.ctx, 50, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 150, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 350, 100, 2, '#d4d7d4', this.canvasSize))
        // this.platforms.push(new Platform(this.ctx, 250, 100, 2, '#d4d7d4', this.canvasSize))
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
        this.jumper.jump()
    },

    isCollision() {
        return this.platforms.some(obs => {
            return (
            this.jumper.jumperPos.x + this.jumper.jumperSize.w >= obs.platformPos.x &&
            this.jumper.jumperPos.x + this.jumper.jumperSize.h >= obs.platformPos.y &&
            this.jumper.jumperPos.x <= obs.platformPos.x + obs.platformSize.w
            )
        })
      },


    gameOver() {

    },

        win() {

}



}
