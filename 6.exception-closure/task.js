function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    } 
        return parsed;
}

function validateCount(value) {
    try {
        return parsed = parseCount(value)
    } catch (error) {
        return (error)
    } finally {
        console.log("it was worth to try");
    }
}

class Triangle {
    constructor (side1, side2, side3) {
        if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side3 + side2) <= side1) {
            throw new Error ("Треугольник с такими сторонами не существует")
        } else {
            this.side1 = side1
            this.side2 = side2
            this.side3 = side3 
        }
        }

    getPerimeter (side1, side2, side3) {
        if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side3 + side2) <= side1) {
            throw new Error ("Ошибка! Треугольник не существует")
        } else {
        console.log (this.side1 + this.side2 + this.side3)
        return (this.side1 + this.side2 + this.side3)
    }
    }

    getArea (side1, side2, side3) {
        if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side3 + side2) <= side1) {
            throw new Error ("Ошибка! Треугольник не существует")
        } else {
        const p = (this.side1 + this.side2 + this.side3) / 2;
        const a = Math.sqrt (p * (p - this.side1) * (p - this.side2) * (p - this.side3))
        console.log (parseFloat(a.toFixed(3)))
        return parseFloat(a.toFixed(3))
    }
    }
}
function getTriangle(side1, side2, side3) {
    try {
        const triangle = new Triangle (side1, side2, side3)
        console.log (triangle)
        return triangle
    } catch (Error) {
       const a = {
            getPerimeter() {
                return ("Ошибка! Треугольник не существует") 
            },
            getArea() {
                return ("Ошибка! Треугольник не существует") 
            } 
            }
    
            console.log(a.getPerimeter())
            console.log(a.getArea())
       return a
    }
}

