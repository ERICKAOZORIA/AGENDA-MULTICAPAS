document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('dataContainer').innerText = data.message;
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
});

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Datos desde el servidor habilitado para CORS' });
});

// Servir los archivos estáticos del cliente
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

