const { DataTypes } = require('sequelize')
const database = require('./db')
const Transacao = require('./transacoes')

const Lanche = database.define('lanches',
    {
        id_lanche: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome_lanche: {
            type: DataTypes.STRING,
            allowNull: false
        },

        preco_lanche: {
            type: DataTypes.DOUBLE
        }
    })

Lanche.hasMany(Transacao)
module.exports = Lanche