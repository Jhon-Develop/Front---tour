// Start francisco

// Finish francisco
// Start alejandro

// Finish alejandro
// Start juan_pablo
/**Paremetros del metodo addEventListener
 * - tipo de evento
 * - funcion ah ejecutar
 * - captura
 * Primero se esta verificando que el dom haya sido cargado para ejecutar
 * la funcion
 */
document.addEventListener('DOMContentLoaded', function () {
  const mainCards = document.querySelectorAll('.cards-highlights');
  /**En el primer forEach se esta iterando sobre todas las cartas principales
   * y se les esta asignando un escuchador de eventos
   */
  mainCards.forEach((card) => {
    // asignando el evento de click
    card.addEventListener('click', () => {
      //Vuelve y recorre el forEach de card es decir en las que no se hicieron click
      // y luego compara si la en las cards que no se hicieron click es diferente de la que hizo click
      // y si es diferente las oculta
      mainCards.forEach((e) => {
        if (e !== card) {
          e.querySelector('.more-information').style.display = 'none';
        }
      });
      const moreInformation = card.querySelector('.more-information');
      // Se esta verificando si el estilo de elemento actual es estrictamente igual ah bloque,
      // si esta condicion se cumple oculta todas las cards
      if (moreInformation.style.display === 'block') {
        moreInformation.style.display = 'none';
      }
      // Si los estilos de moreInformation en css estan actulmente ocultos (none) se cambia el estilo de visualizacion ah bloque
      else {
        moreInformation.style.display = 'block';
      }
    });
  });
});
// Finish juan_pablo
// Start samuel

// Finish samuel