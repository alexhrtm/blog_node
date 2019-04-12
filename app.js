// Carregando módulos
    const express = require('express')
    const bodyParser = require('body-parser')
    const handlebars = require('express-handlebars')
    //const mongoose = require('mongoose')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')

// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongoose

    // Public
        // "Onde estão os arquivos estáticos"
        app.use(express.static(path.join(__dirname, 'public')))

// Rotas
    app.use('/admin', admin)
// Outros
const PORT = 8081
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`))