//                Задание #1
function parseCount(valueToParse) {
    let result = Number.parseInt(valueToParse);
    if (isNaN(result)) throw new Error('Невалидное значение');
    else return result;
}

function validateCount(valueToParse) {
    try {
        return parseCount(valueToParse);
    } catch(error) {
        return error;
    }
}

// console.log(validateCount(NaN));

//                Задание #2

class Triangle {
    constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

        if (a+b < c || b+c < a || a+c < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        };
    };

        getPerimeter() {
            return this.a+this.b+this.c;
        }

        getArea() {
            let p = 0.5*this.getPerimeter();
            return Number(Math.sqrt((p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3));
        }
}
function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch {
        return new class errClass {
            getPerimeter = () => 'Ошибка! Треугольник не существует';
            getArea = () => 'Ошибка! Треугольник не существует';
        };
    };
};