const { response } = require('express');

const usersGet = (req, res = response) => {
    
    res.status(200).json({
        msg: 'get API - Controller'
    });
}

const usersPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre, 
        edad
    });
}

const usersPut = (req, res = response) => {
    res.json({
        msg: 'put API'
    });
}

const usersPatch = (req, res = response) => {
    
    res.status(200).json({
        msg: 'patch API'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

module.exports = {
    usersGet
}
