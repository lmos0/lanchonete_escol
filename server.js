const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const rotaAlunos = require('./routes/RotasAluno')

const PORT = process.env.PORT || 3000

const database = require('./model/db')
const Lanche = require('./model/lancheModel')
const Aluno = require('./model/alunoModel')

app.use(express.urlencoded({ extended: false }))

app.use('/', rotaAlunos)
app.set('view engine', 'ejs')



app.listen(PORT, () => {
    console.log('Lanchonente no Ar')
})

// database.sync({ force: true })

