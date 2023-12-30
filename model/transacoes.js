const { DataTypes } = require('sequelize')
const database = require('./db')

const Transacao = database.define('transacaoes', {

    id_transaction: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
)

module.exports = Transacao