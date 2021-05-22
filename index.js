// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }
    
    get diameter (){
        let diameter = this.radius * 2
        return diameter
    }

    get circumference () {
        let circumference = 2 * this.radius * Math.PI;
        return circumference
    }

    get area () {
        let area = Math.PI * (this.radius * this.radius)
        return area
    }

    set diameter(newDiameter){
        return this.radius = newDiameter / 2;
    }

    set circumference(newCircumference){
        return this.radius = newCircumference/(2*Math.PI)
    }

}