class Paddle{
    constructor(x){
        this.x = x;
        this.y = 200;
        this.w = 20;
        this.h = 200;
        this.vy = 0;
    }

    update(){
        if(this.y>= height -100 || this.y <=100){
            this.vy *= -1;
        }
    }

    change_dir(y){
        this.vy = y;
    }

    move(){
        this.y += this.vy;
    }

    show(){
        rect(this.x, this.y, this.w ,this.h);
    }
}