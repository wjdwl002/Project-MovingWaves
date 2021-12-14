class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        //창 크기 조절 시 리사이즈
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        //애니메이션 시작
        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.wave.resize(this.stageWidth, this.stageHeight);
    }

    animate(t){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;
    }

    update(){
        this.cur += this.speed;
        this.y = this.fixedY + Math(sin(this.cur) * this.max);
    }
}

class Wave{
    constructor(){
        
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth /2;
        this.centerY = stageHeight /2; 

        this.init();
    }

    init(){
        this.point = new Point(this.centerX, this.centerY)
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = '#ff0000'
    }
}

window.onload = () => {
    const app = new App();
}

const app = new App();