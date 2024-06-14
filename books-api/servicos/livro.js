const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //[{id:2, nome: "livro topzeira 2"}]

    const livroFiltrado = livros.filter( livro => livro.id === id)[0]
    return livroFiltrado
}
module.exports = {
    getTodosLivros,
    getLivroPorId
}