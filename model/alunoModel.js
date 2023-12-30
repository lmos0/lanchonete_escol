const { DataTypes } = require('sequelize')
const database = require('./db')
const Transacao = require('./transacoes')

const Aluno = database.define('alunos',
    {
        id_aluno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        nome_aluno: {
            type: DataTypes.STRING,
            allowNull: false
        },

        saldo_aluno: {
            type: DataTypes.DOUBLE
        }
    })
Aluno.hasMany(Transacao)
module.exports = Aluno