
const { Router } = require('express');
const { usersGet, 
        usersPost, 
        usersPut, 
        usersDelete } = require('../controllers/user');

const router = Router();

router.get('/2', (req, res) => {
    res.json({
        ok: true,
        msg: 'get API'
    });
});

router.get('/', usersGet);

router.put('/', usersPut);

router.post('/', usersPost);

router.delete('/', usersDelete);


module.exports = router;