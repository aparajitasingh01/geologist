const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);

    rectsand1 = new RectSand(505,450,10);
    rectsand2 = new RectSand(510,450,10);
    rectsand3 = new RectSand(515,450,10);
    rectsand4 = new RectSand(520,450,10);
    rectsand5 = new RectSand(525,450,10);
    rectsand6 = new RectSand(515,445,10);
    rectsand7 = new RectSand(520,445,10);
    rectsand8 = new RectSand(525,445,10);
    rectsand9 = new RectSand(530,445,10);
    rectsand10 = new RectSand(535,445,10);


}

function draw(){
    background("white");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();

    hammer.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();

    rectsand1.display();
    rectsand2.display();
    rectrectsand3.display();
    rectsand4.display();
    rectsand5.display();
    rectsand6.display();
    rectsand7.display();
    rectsand8.display();
    rectsand9.display();
    rectsand10.display();
}