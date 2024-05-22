// Start francisco

// Finish francisco
// Start alejandro

// Finish alejandro
// START JUAN PABLO
/**Paremetros del metodo addEventListener
 * _ tipo de evento
 * _ funcion ah ejecutar
 * _ captura
 * Primero se esta verificando que el dom haya sido cargado para ejecutar
 * la funcion
 */
document.addEventListener('DOMContentLoaded', function () {
  const cardMain = document.querySelectorAll('.cards_highlights');
  /**En el primer forEach se esta iterando sobre todas las cards cardMain
   * y se les esta asignando un escuchador de eventos
   */
  cardMain.forEach((card) => {
    // asignando el evento de click
    card.addEventListener('click', () => {
      //Vuelve y recorre el forEach de cards principales es decir en las que no se hicieron click
      // y luego compara si la en las cards que no se hicieron click es diferente de la que hizo click
      // y si es diferente las oculta
      cardMain.forEach((e) => {
        if (e !== card) {
          e.querySelector('.more_information').style.display = 'none';
        }
      });
      const details = card.querySelector('.more_information');
      // Se esta verificando si el estilo de elemento actual es estrictamente igual ah bloque,
      // si esta condicion se cumple oculta todas las cards
      if (details.style.display === 'block') {
        details.style.display = 'none';
      }
      // Si los details estan actulmente ocultos (none) se cambia el estilo de visualizacion ah bloque
      else {
        details.style.display = 'block';
      }
    });
  });
});
// Finish juan_pablo
// Start samuel

// Finish samuel