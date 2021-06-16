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
    enemies: [],
    powerBalls: [],
    framesCounter: 0,
    score: 0,
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

        this.interval = setInterval(() => {
            this.scoreCount()
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

    createAllPlatforms() {


        if (this.framesCounter % 20 === 0) {

            const lastPlatformPosition = this.platforms[this.platforms.length - 1].platformPos.y
            this.platforms.push(new Platform(this.ctx, lastPlatformPosition - 180, 100, 1, '#d4d7d4', this.canvasSize))

        }

        if (this.framesCounter % 20 === 0) {
            this.enemies.push((this.ctx, 0, 100, 5, this.canvasSize))
        }

        // if (this.framesCounter % 20 === 0) {
        //     this.powerBalls.push(new Powerballs(this.ctx, this.powerBalls.powerBallsPos.x - 180, 100, 5, this.canvasSize))

        // }

    },

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
        //this.enemies = this.enemies.filter(elm => elm.canvasSize.h >= 0)
        //this.powerBalls = this.powerBalls.filter(elm => elm.canvasSize.h >= 0)
    },

    drawAll() {
        this.platforms.forEach(elm => elm.createPlatform())
        this.enemies.forEach(elm => elm.createEnemies())
        //this.powerBalls.forEach(elm => elm.createPowerBalls())
        this.jumper.drawJumper()

    },

    moveAll() {
        this.platforms.forEach(elm => elm.move())
        //this.enemies.forEach(elm => elm.move())
        //this.powerBalls.forEach(elm => elm.move())
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

        // this.enemies.some(elm => {
        //     if (this.jumper.jumperPos.x + this.jumper.jumperSize.w >= elm.enemiesPos.x &&
        //         this.jumper.jumperPos.y + this.jumper.jumperSize.h >= elm.enemiesPos.y &&
        //         this.jumper.jumperPos.x <= elm.enemiesPos.x + elm.enemiesize.w &&
        //         this.jumper.jumperPos.y + this.jumper.jumperSize.h - 10 <= elm.enemiesPos.y + elm.enemiesSize.h) {
        //         this.jumper.jump()
        //     }
        // })

        // this.powerBalls.some(elm => {
        //     if (this.jumper.jumperPos.x + this.jumper.jumperSize.w >= elm.powerBallsPos.x &&
        //         this.jumper.jumperPos.y + this.jumper.jumperSize.h >= elm.powerBallsPos.y &&
        //         this.jumper.jumperPos.x <= elm.powerBallsPos.x + elm.powerBallsSize.w &&
        //         this.jumper.jumperPos.y + this.jumper.jumperSize.h - 10 <= elm.powerBallsPos.y + elm.powerBallsSize.h) {
        //         this.jumper.jump()

        //     }
        // })
    },
    scoreCount() {
        let scoreElement = document.getElementById('score');
        if (this.platforms[0].platformPos.y > this.jumper.jumperPos.y + 10) {
            this.score++;
        }
        scoreElement.innerHTML = ("SCORE: " + this.score / 50)

        console.log(this.score)
        console.log(scoreElement)


    },

    gameOver() {
        if (this.jumper.jumperPos.y > this.canvasSize.h - this.jumper.jumperSize.h - 5) {
            clearInterval(this.interval)
        }
    },

    win() {

    }



}
