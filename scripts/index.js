// Start francisco
const $menuButton = document.querySelector(".menu-toggle");
const $menu = document.getElementById("nav-menu");
const ARIA_EXPANDED = "aria-expanded";

$menuButton.addEventListener("click", () => {
  const isMenuOpened = $menuButton.getAttribute(ARIA_EXPANDED) === "true"; // -> 'true' 'false'
  isMenuOpened ? closeMenu($menu) : openMenu($menu);
});

function openMenu() {
  $menuButton.setAttribute(ARIA_EXPANDED, "true");
}

function closeMenu() {
  $menuButton.setAttribute(ARIA_EXPANDED, "false");
}

//Modal Login
const $miCuenta = document.getElementById("miCuenta");

$miCuenta.onclick = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal-login");
  modal.innerHTML = `
                <div class="modal-content">
                  <h3 class="modal-login-tittle">Ingresa tus datos</h3>
                  <span class="close">&times;</span>
                  <input type="email" placeholder="Ingrese su correo" class="modal-login-input"></input>
                  <input type="text" placeholder="Ingrese la contraseña" class="modal-login-input"></input>
                  <button id="modal-login-btn" class="modal-login-btn" type="submit">Ingresar</button>
                  <h4 class="modal-login-tittle"><a href="#">Recuperar contraseña</a></h4>
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
  const $testiar = document.getElementById("modal-login-btn");

  $testiar.onclick = function () {
    alert("Acceso concedido");
  };
};

//Modal registrarse
const $registrarse = document.getElementById("registrarse");

$registrarse.onclick = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal-registrarse");
  modal.innerHTML = `
                <div class="modal-content">
                  <h3 class="modal-register-tittle">Registra tus datos</h3>
                  <span class="close">&times;</span>
                  <form method="POST"class="modal-register-form">
                    <input type="email" placeholder="Ingrese su correo" class="modal-login-input"></input>
                    <input type="text" placeholder="Ingrese la contraseña" class="modal-login-input"></input>
                    <h4 class="select-profile">Seleccione su perfil:</h4>
                    <div class="modal-register-form-div">
                      <label class="modal-register-form-label">
                        Turista
                        <input type="radio" id="tourist" name="profile" value="tourist" class="modal-register-input"></input>
                      </label>
                      <label class="modal-register-form-label">
                        Guía
                        <input type="radio" id="guide" name="profile" value="guide" class="modal-register-input">
                      </label>
                    </div>
                  </form>
                  <button id="login" class="modal-register-btn" type="submit">Registrarme</button>
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
// Finish francisco
// Start alejandro

// Finish alejandro
// Start juan_pablo

// Finish juan_pablo
// Start samuel

// Finish samuel
