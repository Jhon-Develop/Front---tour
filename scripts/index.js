// Start francisco

// Finish francisco
// Start alejandro

// Finish alejandro
// START JUAN PABLO
/**Paremetros del metodo addEventListener
 * _ tipo de evento
 * _ funcion ah ejecutar
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
      // Si se hace click en una tarjeta oculta las demas
      cardMain.forEach((e) => {
        if (e !== card) {
          e.querySelector('.more_information').style.display = 'none';
        }
      });
      // Obtengo la tarjeta en la que se hizo click
      const details = card.querySelector('.more_information');
      //Si la tarjeta ya esta mostrada la escondo
      if (details.style.display === 'block') {
        details.style.display = 'none';
      }
      // Si la tarjeta esta oculta (none) la muestro
      else {
        details.style.display = 'block';
      }
    });
  });
});
// Finish juan_pablo
// Start samuel

// Finish samuel