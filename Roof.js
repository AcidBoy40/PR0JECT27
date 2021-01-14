class Roof
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x,
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display()
    {
        var roofpos = this.body.position;

        push();
        rectMode(CENTER);
        fill("black");
        rect(roofpos.x,roofpos.y,this.width,this.height);
        pop();

    }
}