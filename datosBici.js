
// Importar el módulo 'fs' (sistema de archivos) nativo de Node.js
const fs = require('fs');

// Definir la función para leer el archivo bicicletas.json y convertirlo a un array
function obtenerBicicletas(rutaArchivo, callback) {
  fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
      return callback(err, null);
    }
    try {
      // Parsear el contenido JSON y convertirlo en un array
      const bicicletasArray = JSON.parse(data);
      callback(null, bicicletasArray);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}

// Exportar la función
module.exports = obtenerBicicletas;
