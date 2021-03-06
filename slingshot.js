class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        this.bodyA=bodyA
        this.pointB=pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
           var pointA=this.sling.bodyA.position
           var pointB=this.pointB
           push()
           strokeWeight(7)
           stroke("rgb(66,30,11)")
           if(pointA.x<220){
            line(pointA.x-25,pointA.y,pointB.x,pointB.y)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
           }
        else{
        strokeWeight(3)
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
        image(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }
           pop()
        }
        }
        
    fly(){
        
        this.sling.bodyA=null
        
    }
    attach(bodyA){
                this.sling.bodyA=(bodyA)  
             
    }
}