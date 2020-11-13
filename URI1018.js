const { Console } = require('console');

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let dinheiro = lines[0];
let cedula = parseInt(lines.shift());

let cedulas = [
    {'100': 0},
    {'50': 0},
    {'20': 0},
    {'10': 0},
    {'5': 0},
    {'2': 0},
    {'1': 0}
]

while (cedula > 0){
    if(cedula >= 100){
        cedulas[0]['100'] += 1;
        cedula -= 100;
    }else if(cedula >= 50){
        cedulas[1]['50'] += 1;
        cedula -= 50;
    }else if(cedula >= 20){
        cedulas[2]['20'] += 1;
        cedula -= 20;
    }else if(cedula >= 10){
        cedulas[3]['10'] += 1;
        cedula -= 10;
    }else if(cedula >= 5){
        cedulas[4]['5'] += 1;
        cedula -= 5;
    }else if(cedula >= 2){
        cedulas[5]['2'] += 1;
        cedula -= 2;
    }else if(cedula >= 1){
        cedulas[6]['1'] += 1;
        cedula -= 1;
    }
}
console.log(dinheiro);

console.log(`${cedulas[0]['100']} nota(s) de R$ 100,00`);
console.log(`${cedulas[1]['50']} nota(s) de R$ 50,00`);
console.log(`${cedulas[2]['20']} nota(s) de R$ 20,00`);
console.log(`${cedulas[3]['10']} nota(s) de R$ 10,00`);
console.log(`${cedulas[4]['5']} nota(s) de R$ 5,00`);
console.log(`${cedulas[5]['2']} nota(s) de R$ 2,00`);
console.log(`${cedulas[6]['1']} nota(s) de R$ 1,00`);
