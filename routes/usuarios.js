const {Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');
const { esRolValido, emailExiste, existeUsuarioPorid } = require('../helpers/db-validators');
const role = require('../models/role');

const {validarCampos, validarJWT, esAdminRole, tieneRole} = require('../middlewares')

const router = Router();

router.get('/', usuariosGet) // Primero se envia la ruta, segundo los middlewares y tercero los controladores

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorid),
    check('rol').custom(esRolValido),
    validarCampos
],  usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
    // check('rol', 'no es un rol permitido').isIn('ADMIN_ROLE', 'USER_ROLE'),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost)

router.delete('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE', 'NOSE_ROLE'),
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorid),
    validarCampos
], usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router;