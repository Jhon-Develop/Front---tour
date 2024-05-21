class DashHero {
  constructor() {
    this.element = document.createElement('section');
    this.element.className = 'section-dashHero';
    this.element.innerHTML = `
      <div class="menu-dashHero">
        <h2>Estadisticas Actuales </h2>
      </div>
      <div class="place-dashHero">
        <div class="table_one_hero">
          <!-- Aquí puedes agregar el contenido de la tabla 1 -->
        </div>
        <div class="table_two_hero">
          <!-- Aquí puedes agregar el contenido de la tabla 2 -->
        </div>
      </div>
    `;
  }

  render() {
    document.body.appendChild(this.element);
  }
}

module.exports = DashHero;