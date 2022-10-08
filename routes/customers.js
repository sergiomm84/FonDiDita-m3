const router = require('express').Router();


const {
    getCustomers,
    getCustomerbyId,
    insertCustomer,
    signUp,
    logIn,
    encriptarTodo,
} = require('../controllers/customers');
const auth = require('../config/auth');

/**
 * 
 * @swagger 
 * /customers/:
 * get:
 *  summary: Creación y consulta de clientes (customers)
 *  produces: 
 *      - application/json
 *  responses: 
 *      200:
 *          description: Todos los clientes
 *          type: json
 */
router.get('/', getCustomers);
router.get('/getbyId/:id', getCustomerbyId);
router.post('/insert',auth.isAdmin, insertCustomer);
router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.get('/encriptar', auth.isAdmin, encriptarTodo);



module.exports = router;