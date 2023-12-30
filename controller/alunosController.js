const Aluno = require('../model/alunoModel')
const Alunos = require('../model/alunoModel')
const Lanche = require('../model/lancheModel')
const Transacao = require('../model/transacoes')

const registrarAluno = async (req, res) => {
    try {
        await Alunos.create({
            nome_aluno: req.body.aluno,
            saldo_aluno: req.body.saldo
        })

        res.redirect('/alunos')

    }


    catch (erro) {
        console.log('Deu ruim', erro)
        res.status(500).send('Erro ao Registrar Aluno')

    }
}

const mostrarAlunos = async (req, res) => {
    try {
        const alunos = await Alunos.findAll()
        res.render('alunos.ejs', { alunos })
    }
    catch (error) {
        console.error('Error ao recuperar os alunos', error)
        res.status(500).send('Falhou')
    }
}

const criarTransacao = async (req, res) => {
    const { alunoId, lancheId, quantidade } = req.body

    try {
        const aluno = await Aluno.findByPk(alunoId)
        const lanche = await Lanche.findByPk(lancheId)

        if (!aluno || !lanche) {
            return res.status(404).send('Não foi possível encontrar')
        }

        const custoTotal = quantidade * lanche.preco_lanche

        if (aluno.saldo_aluno < custoTotal) {
            return res.status(400).send('Saldo Insuficiente')
        } // checar

        const transacao = await Transacao.create({
            quantidade
        })
        await aluno.addTransaction(transacao)
        await lanche.addTransaction(transacao)
        await aluno.update({ saldo_aluno: aluno.saldo_aluno - custoTotal })

        res.render('transacao.ejs', {
            transacao,
            aluno,
            lanche,
            custoTotal
        })
    }
    catch (error) {
        console.error('Erro ao completar transação', error)
        res.status(500).send('deu ruim')
    }

}

module.exports = { registrarAluno, mostrarAlunos, criarTransacao }