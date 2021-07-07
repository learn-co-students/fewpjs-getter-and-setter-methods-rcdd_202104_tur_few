// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }


    get diameter(){
        return this.radius * 2
    }

    set diameter(){
        this.radius = this.radius * 2


    }


    get circumference(){
        return (this.radius * 2) * pi
    }

    set circumference(circumference ){
        this.radius =  circumference / (pi * 2 )
    
    }


    get area(){
        return pi * (this.radius * this.radius)
    }


    set area(){
        this.radius =Math.sqrt(area / pi )
    }






}