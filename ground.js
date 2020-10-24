class Ground {
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(
            400,690,800,10,options
        )
    World.add(world,this.ground)
    
    
    }
    display(){
        var pos= this.ground.position
        rectMode(
            CENTER
        )
        rect(pos.x,pos.y,800,10)
    }
}