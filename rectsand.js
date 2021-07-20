class RectSand{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rect(this.x, this.y, this.w,this,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var sandpos=this.body.position;		
			push()
			translate(rectsand.x, rectsandpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("white");
		    rect(0,0,this.w, this.h);
			pop()
			
	}

}