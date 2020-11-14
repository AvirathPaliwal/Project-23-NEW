class Line{
    constructor(x,y,width,height){
        var position={
            isStatic:true
        }
        this.lines=Bodies.rectangle(x,y,width,height,position)
        this.lines1=Bodies.rectangle(x-100,y-20,20,100,position)
        this.lines2=Bodies.rectangle(x+100,y-20,20,100,position);

        World.add(world,this.lines)
        World.add(world,this.lines1)
        World.add(world,this.lines2)

    this.w=width;
    this.h=height;

}

    display(){
        var pos=this.lines.position;
        var pos1=this.lines1.position;
        var pos2=this.lines2.position;
         fill("red")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h);
        rect(pos1.x,pos1.y,20,100);
        rect(pos2.x,pos2.y,20,100);
    }
}