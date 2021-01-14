class Box {
    constructor(x,y,width,height) {
      var options = {
         friction:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x ; 
      this.y = y ;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#41E0D0");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
