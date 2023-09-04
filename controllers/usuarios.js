const { response, request } = require('express');

const usuariosGet = ('/api', (req, res = response) => {
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
})

const usuariosPut = ('/api', (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    })
})

const usuariosPost = ('/api', (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre, 
        edad
    })
})

const usuariosDelete = ('/api', (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
})

const usuariosPatch = ('/api', (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
})

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}