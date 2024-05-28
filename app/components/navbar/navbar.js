import logo from "/app/assets/img/logo.png";
import {
  modalLogin,
  menuToggle,
  modal_login_btn,
  modal_register_form_label,
  modal_register_form_div,
  modal_register_btn,
  select_profile,
  modal_register_form,
  subMenu,
  modalLogin_tittle,
  modalRegister_tittle,
  submenu_btn,
  modalLogin_input,
  access,
  navMenu,
  close,
  modalContent,
  modalRegistrarse,
  navLogo,
} from "./navbar.css";

export function Navbar() {
  const navContent = `
    <nav>
    <button class=${menuToggle} aria-controls id="navMenu" aria-expanded="false">
        <span class="menu-toggle__icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF8DC"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </span>
    </button>

    <ul  id="navMenu" class=${navMenu}>
        <li><a href="#principales">Principales</a></li>
        <li><a href="#nosotros">Sobre nosotros</a></li>
        <li><a href="#destacados">Destacados</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>

    <div class=${navLogo}>
        <img src=${logo} alt="">
    </div>

    <div class=${access}>
        <button id=${submenu_btn}>Acceder</button>
        <ul class=${subMenu} id="submenu">
            <li><a href="#" id="miCuenta">Mi Cuenta</a></li>
            <li><a href="#" id="registrarse">Registrarse</a></li>
        </ul>
    </div>
    </nav>
`;

  //logic

  const logic = () => {
    const $menuButton = document.querySelector(".menuToggle");
    const $menu = document.getElementById("navMenu");
    const ARIA_EXPANDED = "aria-expanded";
    $menu.addEventListener("click", () => {
      const isMenuOpened = $menu.getAttribute(ARIA_EXPANDED) === "true"; // -> 'true' 'false'
      isMenuOpened ? closeMenu($menu) : openMenu($menu);
    });

    function openMenu() {
      $menu.setAttribute(ARIA_EXPANDED, "true");
    }

    function closeMenu() {
      $menu.setAttribute(ARIA_EXPANDED, "false");
    }

    //Modal Login
    const $miCuenta = document.getElementById("miCuenta");

    $miCuenta.onclick = function () {
      const modal = document.createElement("div");
      modal.classList.add(modalLogin);
      modal.innerHTML = `
                <div class=${modalContent}>
                  <h3 class=${modalLogin_tittle}>Ingresa tus datos</h3>
                  <span class="close" id=${close} >&times;</span>
                  <input type="email" placeholder="Ingrese su correo" class=${modalLogin_input}></input>
                  <input type="text" placeholder="Ingrese la contraseña" class=${modalLogin_input}></input>
                  <button id="modal_login_btn" class=${modal_login_btn} type="submit">Ingresar</button>
                  <h4 class=${modalLogin_tittle}><a href="#">Recuperar contraseña</a></h4>
                </div>
            `;

      document.body.appendChild(modal);

      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");

      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modal);
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.removeChild(modal);
        }
      };
      const $testiar = document.getElementById("modal_login_btn");

      $testiar.onclick = function () {
        alert("Acceso concedido");
      };
    };

    //Modal registrarse
    const $registrarse = document.getElementById("registrarse");

    $registrarse.onclick = () => {
      const modal = document.createElement("div");
      modal.classList.add(modalRegistrarse);
      modal.innerHTML = `
                <div class=${modalContent}>
                  <h3 class=${modalRegister_tittle}>Registra tus datos</h3>
                  <span class="close" id=${close}>&times;</span>
                  <form method="POST"class=${modal_register_form}>
                    <input type="email" placeholder="Ingrese su correo" class=${modalLogin_input}></input>
                    <input type="text" placeholder="Ingrese la contraseña" class=${modalLogin_input}></input>
                    <h4 class=${select_profile}>Seleccione su perfil:</h4>
                    <div class=${modal_register_form_div}>
                      <label class=${modal_register_form_label}>
                        Turista
                        <input type="radio" id="tourist" name="profile" value="tourist"></input>
                      </label>
                      <label class=${modal_register_form_label}>
                        Guía
                        <input type="radio" id="guide" name="profile" value="guide">
                      </label>
                    </div>
                  </form>
                  <button id="login" class=${modal_register_btn} type="submit">Registrarme</button>
                </div>
            `;

      document.body.appendChild(modal);

      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");

      closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modal);
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.removeChild(modal);
        }
      };
    };
  };

  return { html: navContent, logic}
}
