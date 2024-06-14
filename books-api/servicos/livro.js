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

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function editarLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoAlterado = {...livrosAtuais[indiceModificado], ...modificacoes}
    //livrosAtuais[indiceModificado] -> {id: "2", nome: "topezeira 1"}
    //modificacoes -> {nome: "ultra topezeira 1"}
    livrosAtuais[indiceModificado] = conteudoAlterado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    editarLivro,
    deleteLivroPorId
}