
// Importar la función del módulo datosBici.js
const obtenerBicicletas = require('./datosBici.js');

// Definir la ruta del archivo bicicletas.json
const rutaArchivo = './bicicletas.json';

// Crear el objeto literal dhBici
const dhBici = {
  bicicletas: [],

  // Función para cargar las bicicletas desde el archivo JSON
  cargarBicicletas: function () {
    obtenerBicicletas(rutaArchivo, (err, bicicletas) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }
      this.bicicletas = bicicletas;
      console.log('Bicicletas cargadas con éxito.');
      this.mostrarBicicletas();
    });
  },

  // Funcionalidad para buscar bicicleta por id
  buscarBici: function (id) {
    const resultado = this.bicicletas.filter(bici => bici.id === id);
    return resultado.length > 0 ? resultado[0] : null;
  },

  // Funcionalidad para vender una bicicleta
  venderBici: function (id) {
    const bici = this.buscarBici(id);
    if (bici) {
      bici.vendida = "sí";
      return bici;
    } else {
      return 'Bicicleta no encontrada';
    }
  },

  // Funcionalidad para obtener bicicletas para la venta
  biciParaLaVenta: function () {
    return this.bicicletas.filter(bici => bici.vendida === "false");
  },

  // Funcionalidad para obtener el total de ventas
  totalDeVentas: function () {
    return this.bicicletas
      .filter(bici => bici.vendida === "true")
      .reduce((total, bici) => total + bici.precio, 0);
  },

  // Funcionalidad para mostrar todas las bicicletas
  mostrarBicicletas: function () {
    this.bicicletas.forEach(bicicleta => {
      console.log('Marca:', bicicleta.marca);
      console.log('Modelo:', bicicleta.modelo);
      console.log('Rodado:', bicicleta.rodado);
      console.log('Año de fabricación:', bicicleta.anio);
      console.log('Color:', bicicleta.color);
      console.log('Peso:', bicicleta.peso, 'kg');
      console.log('Tipo:', bicicleta.tipo);
      console.log('Precio:', bicicleta.precio);
      console.log('Vendida:', bicicleta.vendida);
      console.log('--------------------------');
    });
  }
};

// Cargar las bicicletas y realizar las pruebas de funcionalidad
dhBici.cargarBicicletas();

// Comprobar las funcionalidades después de un pequeño retraso para asegurarse de que las bicicletas se carguen
setTimeout(() => {
  console.log('Bicicleta con ID 1:', dhBici.buscarBici(1));
  console.log('Vender bicicleta con ID 2:', dhBici.venderBici(2));
  console.log('Bicicletas para la venta:', dhBici.biciParaLaVenta());
  console.log('Total de ventas realizadas:', dhBici.totalDeVentas());
}, 1000);
  
  