class Box {
  constructor(x,y,width,height){
      var options={
          density:0.04,
          friction:1,
          restitution:0.08,
      
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.body)
  }
  display(){
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(this.body.angle);
  rectMode(CENTER);
  fill("White");
  rect(0,0,this.width,this.height);

  pop();

  }

}
