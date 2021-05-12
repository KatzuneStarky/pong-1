let p_l;
let p_r;

let ball;
let score1 = 0;
let score2 = 0; 

function setup(){
    createCanvas(800, 500);
    rectMode(CENTER);
    p_l = new Paddle(20);
    p_r = new Paddle(780);
    ball = new Ball();
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        p_r.change_dir(-2);
    }

    if(keyCode == DOWN_ARROW){
        p_r.change_dir(2);
    }

    if(keyCode == 87){
        p_l.change_dir(-2);
    }

    if(keyCode == 83){
        p_l.change_dir(2);
    }
}

function draw(){
    background(30);
    textSize(20);
    fill(255);
    line(400, 0, 400, height);
    text("Jugador 1", 250, 25);
    text("Puntos: " + score1, 250, 50);

    text("Jugador 2", 450, 25);
    text("Puntos: " + score2, 450, 50);
    p_l.show();
    p_r.show();
    
    p_l.move();
    p_l.update();
    p_r.move();
    p_r.update();

    ball.show();
    ball.move();
    ball.update();

    if(ball.x>= width){
        score1 ++;
        ball.reset();
    }

    if(ball.x<=0){
        score2 ++;
        ball.reset();
    }

    //colision
    if(ball.x>=780 && ball.y>= (p_r.y+50) && ball.y>= (p_r.y)){
        ball.vx *= -1;
    }

    if(ball.x>=20 && ball.y>= (p_l.y + 50) && ball.y>= (p_l.y - 50)){
        ball.vx *= -1;
    }
}