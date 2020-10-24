class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Dustbin=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.Dustbin)
    }
    display(){
     var pos=this.Dustbin.position
     rectMode(CENTER) 
     fill ("purple")
     image(this.image,pos.x,pos.y, this.width,this.height)
    }

    

}
