import logo from "/app/assets/img/logo.png";
import { navigateTo } from "/app/Router.js";
import { formValidator } from "/app/helpers/form-validator.js";

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
    const $menuButton = document.querySelector(`.${menuToggle}`);
    const $menu = document.getElementById("navMenu");
    const ARIA_EXPANDED = "aria-expanded";
    $menuButton.addEventListener("click", () => {
      const isMenuOpened = $menu.getAttribute(ARIA_EXPANDED) === "true";
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
          <input type="email" id="loginEmail" placeholder="Ingrese su correo" class=${modalLogin_input}></input>
          <input type="password" id="loginPassword" placeholder="Ingrese la contraseña" class=${modalLogin_input}></input>
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

      const access = document.getElementById("modal_login_btn");

      access.addEventListener("click", async (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (!formValidator(email, password)) {
          alert("Please fill in all fields");
          return;
        }

        try {
          const response = await fetch("http://192.168.1.5:4000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          const { token } = await response.json();
          localStorage.setItem("token", token);
          navigateTo("/home");
        } catch (error) {
          console.error("Error during login:", error);
          alert("Invalid credentials");
        }
      });
    };

    // Modal registrarse
    const $registrarse = document.getElementById("registrarse");

    $registrarse.onclick = () => {
      const modal = document.createElement("div");
      modal.classList.add(modalRegistrarse);
      modal.innerHTML = `
                <div class=${modalContent}>
                  <h3 class=${modalRegister_tittle}>Registra tus datos</h3>
                  <span class="close" id=${close}>&times;</span>
                  <form method="POST" class=${modal_register_form}>
                    <input type="text" id="registerUsername" placeholder="Ingrese su nombre de usuario" class=${modalLogin_input}></input>
                    <input type="email" id="registerEmail" placeholder="Ingrese su correo" class=${modalLogin_input}></input>
                    <input type="password" id="registerPassword" placeholder="Ingrese la contraseña" class=${modalLogin_input}></input>
                    <h4 class=${select_profile}>Seleccione su perfil:</h4>
                    <div class=${modal_register_form_div}>
                      <label class=${modal_register_form_label}>
                        User
                        <input type="radio" id="user" name="profile" value="User"></input>
                      </label>
                      <label class=${modal_register_form_label}>
                        Guide
                        <input type="radio" id="guide" name="profile" value="Guide">
                      </label>
                    </div>
                  </form>
                  <button id="register" class=${modal_register_btn} type="submit">Registrarme</button>
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

      const registerBtn = document.getElementById("register");
      registerBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const role = document.querySelector(
          'input[name="profile"]:checked'
        ).value;

        if (!formValidator(username, email, password)) {
          alert("Please fill in all fields");
          return;
        }

        await registerUser(username, email, password, role);
      });
    };
  };

  return { html: navContent, logic };
}

async function login(email, password) {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    const data = await response.json();
    console.log(data);
    return data.token;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}

async function registerUser(username, email, password, role) {
  const url = "http://192.168.1.5:4000/auth/register";
  const data = {
    username,
    email,
    password,
    role,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    const responseData = await response.json();
    console.log("Usuario registrado exitosamente:", responseData);
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
  }
}
