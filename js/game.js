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
        rigth: 'ArrowRigth',
        left: 'ArrowLeft'
    },


    init() {
        this.setContext()
        this.setDimensions()
        this.start()
        this.createAll()
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

        this.createAll()


        setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()
            this.drawAll()
            this.moveAll()
            this.createAll()

        }, 100)

    },

    //  esta funcion es para crear los elementos, que luego metemos en start(). No tiene nada que ver con la de drawAll()

    createAll() {
        this.jumper = new Jumper(this.ctx, this.keys)


        if (this.framesCounter % 25 === 0) {
            this.platforms.push(new Platform(this.ctx, 0, 2, this.canvasSize))
            this.platforms.push(new Platform(this.ctx, 0, 2, this.canvasSize))
        }
// al meter otro if, podemos cambiar la frecuencia con la que salen las plataformas
        if (this.framesCounter % 45 === 0) {
            this.platforms.push(new Platform(this.ctx, 0, 6, this.canvasSize))
        }
        
    },



    clearScreen() {

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.platforms = this.platforms.filter(elm => elm.canvasSize.h >= 0)

    },

    drawAll() {
        this.jumper.drawJumper()
        this.platforms.forEach(elm => elm.createPlatform())
    },

    moveAll() {
        this.platforms.forEach(elm => elm.move())
    },

    gameOver() {

    },

    win() {

    }















}
