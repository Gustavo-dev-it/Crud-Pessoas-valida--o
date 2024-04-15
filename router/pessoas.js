const express = require('express')
const router = express.Router()

// lista mockada
let listaPessoas = [
    {
        id: 1,
        nome: "Jose",
        idade: 20,
        email: "jose@gmail.com",
        telefone: "61912010002"

    },
    {
        id: 2,
        nome: "Maria",
        idade: 22,
        email: "Maria@gmail.com",
        telefone: "61932010002"
    }



]

// READ -> Buscar todas as Pessoas
router.get('/pessoas', (req, res) => {
    res.status(200).json(listaPessoas)
    listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        res.json(pessoa)
        res.status(200).json(produto)
    } else {
        res.status(404).json({ Mensagem: "Pessoa não encontrada!" })
    }
    res.json(pessoa)
})

// READ -> Buscar as Pessoas pelo ID
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})

// CREATE -> Criar uma Pessoa
router.post('/pessoas', (req, res) => {
    const novaPessoa = req.body
    if (!novaPessoa.nome || !novaPessoa.idade || !novaPessoa.email || !novaPessoa.telefone) {
        res.status(400).json({ Mensagem: "Todos os dados devem ser informados" })
    } else {
        const pessoa = {
            id: Math.round(Math.random()* 1000),
            nome: novaPessoa.nome,
            idade: novaPessoa.idade,
            email: novaPessoa.email,
            telefone: novaPessoa.telefone
        }
        listaPessoas.push(pessoa)
        res.status(201).json(
            {
                pessoa,
                Mensagem: "Pessoa cadastrada com sucesso!"
            })

    }
})

// DELETE  -> Deletar uma Pessoa
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    if(index == -1 ) {
res.status(404).json({Mensagem: "Pessoa não encontrada!"})
    } else {
        listaPessoas.splice(index, 1)
        res.status(200).json({ mensagem: "Pessoa excluida com sucesso" })
    }
   
})

// UPDATE -> Alterar uma Pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novaPessoa = req.body

    if (!novaPessoa.nome || !novaPessoa.idade || !novaPessoa.email || !novaPessoa.telefone) {
        res.status(400).json({ Mensagem: "Todos os dados devem ser informados" })
    } else {

        const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

        if (index == -1) {
            res.status(404).json({ Mensagem: "Pessoa não encontrado!" })
        } else {
            const pessoaAlterada = {
                id: id,
                nome: novaPessoa.nome,
                idade: novaPessoa.idade,
                email: novaPessoa.email,
                telefone: novaPessoa.telefone
            }


        listaPessoas[index] = pessoaAlterada
        res.status(200).json
            (
                {
                    Mensagem: "Pessoa alterada com sucesso!",
                }

            )

        }
    }
})





module.exports = router