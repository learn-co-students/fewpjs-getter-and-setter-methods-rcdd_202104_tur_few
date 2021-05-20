// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
   
    set diameter(diameter) {
      this.radius = diameter/2;
    }
   
    get diameter() {
      return this.diameter = this.radius*2
    }

    set circumference(circumference) {
        this.radius = circumference/(2*Math.PI);
    }
     
    get circumference() {
        return this.circumference = this.radius*2*Math.PI
    }    
  
    set area(area) {
        this.radius = Math.sqrt(area/(Math.PI));
    }
     
    get area() {
        return this.area = this.radius**2*Math.PI
    }





}