// Diameter = radius • 2            -> Radius = Dia / 2
// Circumference = π • diameter     -> Radius = (π * Radius * 2) / (π * 2)
// Area = π • radius2               -> Radius = SQRT(Area / π)
// https://www.yusufsezer.com.tr/javascript-get-ve-set/

class Circle{
    constructor(radius){
        this.radius = radius
    }



    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }



    get circumference(){
        return Math.PI * this.diameter 
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI * 2)
    }



    get area(){
        return Math.PI * this.radius * this.radius
    }

    set area(area){
        this.radius = Math.sqrt( area / Math.PI )
    }
}