import {
  target_description_dash,
  img_target_description,
  contain_text_description,
  title_tour_description,
  text_description_target,
  contain_characteristic_target,
  container,
  editButton,
  formTour,
  formTourDescriptionTexArea,
  formTourCategory,
  formTourLength,
  formTourNumberPeople,
  formTourDivSchedule,
  formTourSchedule,
  formTourButtons
  
} from "./edit.css";

export function editPage() {
  const cards = "cards"; // Define la variable cards antes de usarla

  const $content = `
        <div id="${cards}" class=${container}>
            
        </div>
    `;

  // Espera a que se cargue el DOM antes de acceder a los elementos
  document.addEventListener("DOMContentLoaded", () => {
    const containMain = document.getElementById(cards); // Utiliza cards aquí
    console.log(containMain);
  });

  const logic = () => {
    // Función asincrónica para obtener la información sobre los tours
    async function getLetterInformation() {
      try {
        const resolve = await fetch(
          "http://192.168.89.27:4000/tours/:id",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Si el status de la respuesta es distinto de 200 y 299, muestro un error
        if (!resolve.ok) {
          throw new Error(
            `Hubo un error: Status ${resolve.status}\nStatus Text ${resolve.statusText}`
          );
        }

        // Si el status de la respuesta esta entre 200 y 299 convierto la respuesta a JSON
        return resolve.json();
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    }

    //Aqui ejecutamos la logica cuando haya respuesta positiva de la base de dato
    getLetterInformation().then((promiseResolve) => {
      if (promiseResolve) {
        // Si la promesa se resuelve correctamente, le paso la información a showInformation
        showInformation(promiseResolve.slice(1, 5));
      } else {
        console.log("Hubo un error al obtener los datos");
      }
    });

    function showInformation(card) {
      const containMain = document.getElementById(cards);
      const fragment = document.createDocumentFragment();
      card.forEach((el) => {
        const carta = editToures(el);
        fragment.appendChild(carta);
      });
      containMain.appendChild(fragment);
    }

    function editToures(data) {
      let card = document.createElement("article");
      card.classList.add(target_description_dash); // No necesitas interpolación aquí

      card.innerHTML = /*html*/ `
                <div class="${img_target_description}">
                    <img src="" alt="">
                </div>
                <div class="${contain_text_description}">
                    <div class="${title_tour_description}">
                        <h3>${data.name}</h3>
                    </div>
                    <div class="contain_text_description_target">
                        <div class="${text_description_target}">
                            <p>${data.description}</p>
                        </div>
                    </div>
                    <div class="${contain_characteristic_target}">
                        <p class="border_target_char">${data.duracion}<span>5 hora</span> </p>
                        <p class="border_target_char">${data.duracion}<span>31/12/2024</span></p>
                        <p class="border_target_char">${data.duracion}<span>10</span></p>
                        <p>Categoria <span>soleado</span></p>
                    </div>
                </div>

                 <input class="${editButton}"  type="button"  value="Editar">
                `;

      const $editButton = card.querySelector(`.${editButton}`);
      console.log($editButton);

      $editButton.addEventListener("click", (data) => {
        const _container = document.querySelector(`.${container}`);

        _container.innerHTML = /*html*/ `
                    <form action="" method="POST" class=${formTour}>
                        <h3 class="formTourTittle">Formulario para editar el Tour</h3>
                    <div>
                        <label for="">Ciudad:</label>
                        <input type="text" value=${data.city}>
                    </div>
                    <div>
                        <label for="">Nombre:</label>
                        <input type="text" value="${data.name}">
                    </div>
                    <div>
                        <label for="">$Descripcion:</label>
                        <textarea maxlength="250" class=${formTourDescriptionTexArea}></textarea>
                    </div>
                    <div class=${formTourCategory}>
                        <label for="">Categoría:</label>
                        <input type="text" value=${data.category}>
                    </div>
                    <div class=${formTourLength}>
                        <label for="">Duración (Horas):</label>
                        <input type="number" min="1" >
                    </div>
                    <div class=${formTourNumberPeople}>
                        <label for="">Capacidad de personas: </label>
                        <input type="number" min="1" class="numberPeople" value=${data.capacity}>
                    </div>
                    <div id=${formTourDivSchedule}>
                        <label for="">Horario: </label>
                    <div class=${formTourSchedule}>
                        <input type="text" class="addScheduleInput" value=${data.date} >
                        <button type="button" class="addSchedule" id="addSchedule">&#43;</button>
                    </div>
                    </div>
                    <div class="formTourPrice">
                    <label for="">Precio: </label>
                    <input type="number" value=${data.price}>
                    </div>
                    <div class=${formTourButtons}>
                    <button type="button">Cancelar</button>
                    <button class="load" type="" id="saveForm">Guardar</button>
                    </div>
                </form>


                `;
      });
      return card;
    }
  };

  return { html: $content, logic };
}
