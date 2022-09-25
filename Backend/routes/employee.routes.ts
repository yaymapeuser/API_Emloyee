// Requiring module
const express = require('express');
// Creating router object
const router = express.Router();

const employee = require('../controllers/employee.controller');

// Handling request
router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

// Exporting router object
module.exports = router;