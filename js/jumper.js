class Jumper {
    constructor(ctx, canvasWidth, canvasHeight, keys) {

        this.jumperCtx = ctx
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.jumperPos = { x: undefined, y: undefined }
        this.jumperSize = { w: undefined, h: undefined }
        this.keys = keys
        this.imageInstance = undefined
        this.setListeners()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.scr = `img/ball-png.png`
    }


    setListeners() {
        document.onkeydown = e => {
            e.key === this.keys.left ? this.jumperCtx.moveLeft() : null
            e.key === this.keys.rigth ? this.jumperCtx.moveRigth() : null

        }
    }

    moveLeft() {
        this.jumperPos.x -= 20 // poner cambio de posición bien
    }

    moveRigth() {
        this.jumperPos.y += 20 // poner cambio de posición bien

        // vamos a meter una imagen directamente
    }

    drawJumper() {
        this.ctx.drawImage(this.imageInstance, this.jumperPos.x, this.jumperPos.y, this.jumperSize.w, this.jumperSize.h)
    }





}