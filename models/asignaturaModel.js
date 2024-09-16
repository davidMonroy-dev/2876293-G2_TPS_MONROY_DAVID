const mysql = require('mysql2');

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sena',
    database: 'proyecto_polo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos.');
});

module.exports = connection;
