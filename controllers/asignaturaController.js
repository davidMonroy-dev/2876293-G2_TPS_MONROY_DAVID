const connection = require('../models/asignaturaModel');

// Obtiene todas las asignaturas
exports.getAllAsignaturas = (req, res) => {
    connection.query('SELECT * FROM asignatura', (err, results) => {
        if (err) throw err;
        res.render('index', { asignaturas: results });
    });
};

// Obtiene los IDs de todas las asignaturas
exports.getId = (req, res) => {
    connection.query('SELECT id FROM asignatura', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Agrega una nueva asignatura
exports.addAsignatura = (req, res) => {
    const { nombre, profesor } = req.body;
    const query = 'INSERT INTO asignatura (nombre, profesor) VALUES (?, ?)';
    connection.query(query, [nombre, profesor], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.updateAsignatura = (req, res) => {
    const { id } = req.params;
    const { nombre, profesor } = req.body;
    const query = 'UPDATE asignatura SET nombre = ?, profesor = ? WHERE id = ?';
    connection.query(query, [nombre, profesor, id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
};


// Elimina una asignatura
exports.deleteAsignatura = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM asignatura WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Asignatura eliminada con éxito' });
    });
};

