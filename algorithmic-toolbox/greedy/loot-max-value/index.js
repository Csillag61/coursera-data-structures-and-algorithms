const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    const unitValues = [];
    let total = 0;

    for (let i = 0; i < count; i++) {
        unitValues.push({ weight: weights[i], value: values[i] / weights[i] });
    }

    unitValues.sort((a, b) => b.value - a.value);

    for (let i = 0; i < unitValues.length; i++) {
        if (capacity === 0) { break; }

        const weight = Math.min(capacity, unitValues[i].weight);

        capacity -= weight;
        unitValues[i].weight -= weight;
        total += unitValues[i].value * weight;
    }

    return parseFloat(total.toFixed(4));
}

module.exports = max;
