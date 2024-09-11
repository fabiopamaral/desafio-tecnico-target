let fibonacci = [0, 1]

let index = 0

function finbonacciSequence(num) {
    while (true) {
        const nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
        fibonacci.push(nextValue)
        if (nextValue > 1000) break
        index++
    }

    if (fibonacci.includes(num)) {
        return console.log(`${num} faz parte da sequência de Fibonacci`)
    } else {
        return console.log(`${num} não pertence a sequência de Fibonacci.`)
    }
}

const randomNumber = Math.floor(Math.random() * 10000)
finbonacciSequence(randomNumber)