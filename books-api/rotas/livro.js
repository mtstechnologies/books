const {Router} = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router

//parei na aula 4_4 FORMACAO Full stack JavaScript crie um projeto com React e Node.js