let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let valor = lines.shift();

const tempo = [
    {'h': 0},
    {'m': 0},
    {'s': 0}
]
while (valor > 0){
    if(valor >= 3600){
        tempo[0]['h'] += 1;
        valor -= 3600;
    }else if(valor >= 60){
        tempo[1]['m'] += 1;
        valor -= 60;
    }else if(valor >= 1){
        tempo[2]['s'] += 1;
        valor -= 1;
    }
}

console.log(`${tempo[0]['h']}:${tempo[1]['m']}:${tempo[2]['s']}`);
