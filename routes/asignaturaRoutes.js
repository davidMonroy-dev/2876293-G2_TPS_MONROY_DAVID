const express = require('express');
const router = express.Router();
const asignaturaController = require('../controllers/asignaturaController');

// Ruta para mostrar todos los registros
router.get('/', asignaturaController.getAllAsignaturas);

// Ruta para mostrar los IDs de cada asignatura
router.get('/getId', asignaturaController.getId);

// Ruta para agregar una nueva asignatura
router.post('/add', asignaturaController.addAsignatura);

router.post('/update/:id', asignaturaController.updateAsignatura);

// Ruta para actualizar una asignatura existente
router.put('/update/:id', asignaturaController.updateAsignatura);

// Ruta para eliminar una asignatura
router.delete('/delete/:id', asignaturaController.deleteAsignatura);

router.delete('/delete/:id', asignaturaController.deleteAsignatura);


// Ruta para eliminar una asignatura
router.post('/delete/:id', asignaturaController.deleteAsignatura);




module.exports = router;
