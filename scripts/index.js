// Start francisco

// Finish francisco
// Start alejandro

// Finish alejandro
// START JUAN PABLO
/**Paremetros del metodo addEventListener
 * - tipo de evento
 * - funcion ah ejecutar
 * - captura
 * Primero se esta verificando que el dom haya sido cargado para ejecutar
 * la funcion
 */
document.addEventListener('DOMContentLoaded', function () {
  const tarjetasPrincipales = document.querySelectorAll('.cards-highlights');
  /**En el primer forEach se esta iterando sobre todas las tarjetas tarjetasPrincipales
   * y se les esta asignando un escuchador de eventos
   */
  tarjetasPrincipales.forEach((tarjeta) => {
    // asignando el evento de click
    tarjeta.addEventListener('click', () => {
      //Vuelve y recorre el forEach de tarjetas principales es decir en las que no se hicieron click
      // y luego compara si la en las tarjetas que no se hicieron click es diferente de la que hizo click
      // y si es diferente las oculta
      tarjetasPrincipales.forEach((e) => {
        if (e !== tarjeta) {
          e.querySelector('.more-information').style.display = 'none';
        }
      });
      const detalles = tarjeta.querySelector('.more-information');
      // Se esta verificando si el estilo de elemento actual es estrictamente igual ah bloque,
      // si esta condicion se cumple oculta todas las tarjetas
      if (detalles.style.display === 'block') {
        detalles.style.display = 'none';
      }
      // Si los detalles estan actulmente ocultos (none) se cambia el estilo de visualizacion ah bloque
      else {
        detalles.style.display = 'block';
      }
    });
  });
});
// Finish juan_pablo
// Start samuel

// Finish samuel