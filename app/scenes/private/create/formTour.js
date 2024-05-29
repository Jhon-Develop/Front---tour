import {
  formTour,
  formTourDescriptionTexArea,
  formTourCategory,
  formTourNumberPeople,
  formTourDivSchedule,
  formTourButtons
} from './fromTour.css';

export function createPage() {
  const $containerFormTour = `
    <form id="createTourForm" class="${formTour}">
      <h3 class="formTourTittle">Formulario de creación de Tour</h3>
      <div>
        <label for="city">Ciudad: </label>
        <input type="text" id="city" required>
      </div>
      <div>
        <label for="name">Nombre del Tour: </label>
        <input type="text" id="name" required>
      </div>
      <div>
        <label for="description">Descripción: </label>
        <textarea maxlength="250" id="description" class="${formTourDescriptionTexArea}" required></textarea>
      </div>
      <div class="${formTourCategory}">
        <label for="category_name">Categoría:</label>
        <input type="text" id="category_name" required>
      </div>
      <div class="${formTourNumberPeople}">
        <label for="capacity">Capacidad de personas: </label>
        <input type="number" min="1" id="capacity" required>
      </div>
      <div class="${formTourCategory}">
        <label for="date">Fecha:</label>
        <input type="date" id="date" required>
      </div>
      <div class="${formTourCategory}">
        <label for="rating">Rating:</label>
        <input type="number" min="1" max="5" id="rating" required>
      </div>
      <div class="formTourPrice">
        <label for="price">Precio: </label>
        <input type="number" id="price" required>
      </div>
      <div class="${formTourButtons}">
        <button type="button">Cancelar</button>
        <button type="submit" id="saveForm">Guardar</button>
      </div>
    </form>
  `;

  const logic = () => {
    // Añadir el formulario al body solo si no existe ya
    if (!document.getElementById('createTourForm')) {
      const container = document.createElement('div');
      container.innerHTML = $containerFormTour;
      document.body.appendChild(container);
    }

    // Evento para el envío del formulario
    const saveForm = document.getElementById("createTourForm");
    saveForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Verificar el token
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Token no proporcionado");
        return;
      }

      const isTokenValid = validateToken(token);
      if (!isTokenValid) {
        alert("Token inválido o expirado");
        return;
      }

      // Obtener los valores del formulario
      const city = document.getElementById('city').value;
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const category_name = document.getElementById('category_name').value;
      const capacity = document.getElementById('capacity').value;
      const price = document.getElementById('price').value;
      const date = document.getElementById('date').value;
      const rating = document.getElementById('rating').value;

      // Validar formulario
      if (!city || !name || !description || !category_name || !capacity || !price || !date || !rating) {
        alert("Por favor llene todos los campos requeridos");
        return;
      }

      // Crear objeto de datos
      const tourData = {
        city,
        name,
        description,
        category_name,
        available: true, // Asumiendo que el tour siempre está disponible al crearse
        price: parseFloat(price),
        rating: parseFloat(rating),
        date,
        capacity: parseInt(capacity, 10)
      };

      try {
        const response = await fetch('http://192.168.89.27:4000/tours', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(tourData)
        });

        const result = await response.json();

        if (response.ok) {
          alert("Tour creado exitosamente");
        } else {
          alert(`Error al crear el tour: ${result.message}`);
        }
      } catch (error) {
        console.error('Error al crear el tour:', error);
        alert('Error en el servidor');
      }
    });
  };

  const validateToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired;
    } catch (e) {
      console.error('Error al validar el token:', e);
      return false;
    }
  };

  // Asegurarse de que el DOM esté completamente cargado antes de ejecutar la lógica
  document.addEventListener("DOMContentLoaded", logic);

  return { html: $containerFormTour, logic };
}
