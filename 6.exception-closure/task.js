function parseCount(item) {
/*      let answr = Number.parseFloat(item);
    if (!answr) {
        throw new Error('Невалидное значение');
    } else {
        return answr;
    } */

/*     if (Number.parseFloat(item)) {
        let a = Number.parseFloat(item);
        return Number(a.toFixed(3));
    } else {
        throw new Error('Невалидное значение');
    } */

     try {
        if (Number.parseFloat(item)) {
            return Number.parseFloat(item);
        } else {
            throw new Error('Невалидное значение');
        }
    } catch (error) {
        console.log(item);
        throw new Error('Невалидное значение');
    } 
}


class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }




    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        let p = (this.a + this.b + this.c) / 2;
        let answer = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); 
        return Number(answer.toFixed(3));
    }

}


/* function getTriangle(a, b, c) {
    let newTriangle = new Triangle(a, b, c);
    try {
        if (newTriangle.a > newTriangle.b + newTriangle.c || newTriangle.b > newTriangle.a + newTriangle.c || newTriangle.c > newTriangle.a + newTriangle.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
        return newTriangle;
        }
    } catch (Error) {
        console.log ('Ошибка! Треугольник не существует');
        newTriangle.perimeter = 'Ошибка! Треугольник не существует'
        newTriangle.area = 'Ошибка! Треугольник не существует'
    }  finally {
        console.log(newTriangle.area);
        console.log(newTriangle.perimeter);
    }
} */


try {
    function getTriangle(a, b, c) {
        let newTriangle = new Triangle(a, b, c);
 
        return newTriangle;
        
    }
} catch (error) {
    console.log ('Ошибка! Треугольник не существует');
}


