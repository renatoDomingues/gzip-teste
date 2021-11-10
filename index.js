
//Index.js server

//Import
const express = require('express')
const app = express()
const compression = require('compression')

//Vetor
const largeObject = []

//Criar e enviar para interface
for(let i=0; i<1000; i++){
    largeObject.push({
        name: 'renatoDomingues',
        address: 'address',
        anotherField: 'aaaaaa'
    })
}

//use
app.use(compression())

//get
/*app.get('/', (req, res) => res.send(largeObject))*/
//Fazer o arrow function
app.get('/', (req, res) => {

    res.header('Cache-Control', 'public, max-age=3600')
    res.send(largeObject)
})

//ligar server
app.listen(3000, () => console.log('Listening...'))