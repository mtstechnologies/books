const express = require("express")

const rotaLivro = require("./rotas/livro")

const app = express()
//para que o express possa receber um body do tipo JSON
app.use(express.json())

app.use('/livros', rotaLivro)

const port = 8000


//traducao de listen = escultar
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})