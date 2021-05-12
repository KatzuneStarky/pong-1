class Ball{
    constructor(){
        this.x = 200;
        this.y = 100;
        this.w = 50;
        this.vx = 3;
        this.vy = 3;
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;
    }

    reset(){
        this.x = 100;
        this.y = 100;
    }

    update(){
        if(this.y >= height || this.y <=0){
            this.vy *= -1;
        }
    }

    show(){
        ellipse(this.x, this.y, this.w);
    }
}