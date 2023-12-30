const Lanches = require('../model/lancheModel')

const registrarLanche = async (req, res) => {
    try {
        await Lanches.create({
            nome_lanche: req.body.produto,
            preco_lanche: req.body.preco

        })
        res.redirect('/produtos')
    }
    catch (error) {
        console.log('Deu ruim', erro)
        res.status(500).send('Erro ao cadastrar o produto')
    }
}

const mostrarLanche = async (req, res) => {
    try {
        const lanches = await Lanches.findAll()
        res.render('lanches.ejs', { lanches })
    }
    catch (error) {
        console.error('Erro ao recuperar lanches')
        res.status(500).send('Falhou')
    }
}

module.exports = { registrarLanche, mostrarLanche }