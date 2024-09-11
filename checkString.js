const readline = require('node:readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function checkString() {
    rl.question(('Informe uma palavra:\n'), (answer) => {
        if (answer.toLowerCase().includes('a')) {
            let counter = 0
            for (const letter of answer) {
                if (letter.toLowerCase() === 'a') counter++
            }
            console.log(`A palavra informada contém a letra "a" ${counter} vezes.`)
        } else {
            console.log('A palavra informada não contém a letra "a".')
        }
        rl.close()
    })
}

checkString()
