const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Tu carpeta con index.html

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('./pedidos.db', (err) => {
  if (err) {
    return console.error('Error al conectar con la base de datos:', err.message);
  }
  console.log('Conectado a la base de datos SQLite.');
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    telefono TEXT,
    direccion TEXT,
    producto TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Ruta API para recibir pedidos
app.post('/api/pedidos', (req, res) => {
  const { nombre, telefono, direccion, producto } = req.body;

  const query = `INSERT INTO pedidos (nombre, telefono, direccion, producto) VALUES (?, ?, ?, ?)`;
  db.run(query, [nombre, telefono, direccion, producto], function (err) {
    if (err) {
      console.error('Error al insertar pedido:', err.message);
      return res.json({ success: false });
    }
    res.json({ success: true });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
