class Footer {
  constructor() {
    this.element = document.createElement('footer');
    this.element.className = 'footer-home';
    this.element.innerHTML = `
      <div class="contain_map_footer">
        <div class="map-footer"></div>
      </div>
      <div class="section_info_footer">
        <div class="column_info_footer">
          <div class="info_contact">
            <ul>
              <li>Contactos</li>
              <li>Sobre nosotros</li>
              <li>Destinos principales</li>
              <li>Toures Destacados</li>
            </ul>
          </div>
          <div class="contain_info_adress">
            <div class="info_adress">
              <ul>
                <li>Linea Nacional</li>
                <li>018000 42 22 22</li>
                <li>Correo de contacto:</li>
                <li>hima@gmail.com</li>
              </ul>
            </div>
            <div class="social_media_footer">
              <div>
                <!-- Aquí va el código SVG de tus redes sociales -->
              </div>
              <div>
                <p>Copyright © 2024  Hima Company. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    document.body.appendChild(this.element);
  }
}

module.exports = Footer;