const express = require('express');
const path = require('path');
const asignaturaRoutes = require('./routes/asignaturaRoutes');

const app = express();
const port = 3000;

// Configura EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usa las rutas definidas en asignaturaRoutes
app.use('/', asignaturaRoutes);

//archivos estaticos
app.use(express.static('public'));


// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
