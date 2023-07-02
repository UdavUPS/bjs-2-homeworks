function parseCount(item) {
    if (Number.parseFloat(item)) {
        return Number.parseFloat(item);
    } else {
        throw new Error('Невалидное значение');
    }
}

function validateCount(elem) {
    try {
        return parseCount(elem);
    } catch (error) {
        return error;
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
        let p = this.perimeter / 2;
        let answer = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); 
        return Number(answer.toFixed(3));
    }

}


function getTriangle(a, b, c) {
    try {
        let newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch (error) {
        return {
            get perimeter () {
                return 'Ошибка! Треугольник не существует';
            },
             get area () {
                return 'Ошибка! Треугольник не существует';
            }

        }
    }
}
