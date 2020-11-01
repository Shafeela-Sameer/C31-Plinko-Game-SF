class Particle{

    constructor(x,y,radius){

        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }

display(){


    var pos =this.body.position;
    var angle = this.body.angle;
   // ellipseMode(CENTER);
    //fill(this.color);
    //ellipse(pos.x, pos.y, 10,10);
    push();
             translate(pos.x, pos.y);
            rotate(angle);
             //imageMode(CENTER);
             ellipseMode(RADIUS); 
             fill(this.color); 
             ellipse(0,0,this.radius,this.radius);
             
             pop();


    }


}