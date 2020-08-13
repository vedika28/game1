class Player {

    constructor(x,y,w,h) {

        this.body=createSprite(x,y,w,h);
        //this.body.addImage("");
    }

    behaviour() {
        if (keyDown("space")) {
            this.body.velocityY=-10;
        }
        this.body.velocityY+=1;
    }   
    
}