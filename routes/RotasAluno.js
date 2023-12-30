const express = require('express')
const router = express.Router()
const { registrarAluno, mostrarAlunos, criarTransacao } = require('../controller/alunosController')
const { registrarLanche, mostrarLanche } = require('../controller/lanchesController')


router.get('/alunos', mostrarAlunos)

router.post('/alunos', registrarAluno)

router.get('/produtos', mostrarLanche)

router.post('/produtos', registrarLanche)

router.get('/transacao', criarTransacao)

module.exports = router