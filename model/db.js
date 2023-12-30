const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './lanchonete.sqlite' })

sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado')
    })
    .catch((error) => console.log('Ocorreu um erro', error))

module.exports = sequelize