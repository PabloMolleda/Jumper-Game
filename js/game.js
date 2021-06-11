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

    keys: {
        rigth: 'ArrowRigth',
        left: 'ArrowLeft'
    },


    init() {
        this.createAll()
        this.setContext()
        this.setDimensions()
        this.start()
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


    },

    //  esta funcion es para crear los elementos, que luego metemos en start(). No tiene nada que ver con la de drawAll()

    createAll() {
        this.jumper = new Jumper(this.ctx, this.canvasSize.w, this.canvasSize.h, this.keys)
    },

    clearScreen() {

    },

    drawAll() {
        this.jumper.drawJumper()
    },

    moveAll() {

    },

    gameOver() {

    },

    win() {

    }















}
