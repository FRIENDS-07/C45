class Form{

    constructor(){
        this.title = createElement('h1');
        this.play = createButton('Play');
    }

    hide(){
        this.title.hide();
        this.play.hide();
        doodle2.hide();
        monster1.hide();
        monster2.hide();
        monster3.hide();
        monster4.hide();
        monster5.hide();
        monster6.hide();
        spaceship.hide();
    }

    display(){

        this.title.html("Doodle Jump");
        this.title.position(70,150);
        this.play.position(140,220);
      
        doodle2 = createSprite(100,375);
        doodle2.addImage(doodle2Img);
        doodle2.scale = 0.8;
        doodle2.rotation = 340;

        monster1 = createSprite(400,530);
        monster1.addImage(monster1Img);

        monster2 = createSprite(150,550);
        monster2.addImage(monster2Img);

        monster3 = createSprite(330,270);
        monster3.addImage(monster3Img);

        monster4 = createSprite(30,100);
        monster4.addImage(monster4Img);

        monster5 = createSprite(120,550);
        monster5.addImage(monster5Img);

        monster6 = createSprite(400,530);
        monster6.addImage(monster6Img);

        spaceship = createSprite(400,150);
        spaceship.addImage(spaceshipImg);

        this.play.mousePressed(()=>{
            form.hide();
        })
        
    }

}