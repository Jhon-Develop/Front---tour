import {
  formTour,
  formTourDescriptionTexArea,
  formTourCategory,
  formTourLength,
  formTourNumberPeople,
  formTourDivSchedule,
  formTourSchedule,
  formTourButtons
  
} from './fromTour.css'

export function createPage(){
  const $containerFormTour = `
  <form action="" method="POST" class=${formTour}>
    <h3 class="formTourTittle">Formulario de creación de Tour</h3>
    <div>
      <label for="">Ciudad: </label>
      <input type="text">
    </div>
    <div>
      <label for="">Nombre del Tour: </label>
      <input type="text">
    </div>
    <div>
      <label for="">Descripción: </label>
      <textarea maxlength="250" class=${formTourDescriptionTexArea}></textarea>
    </div>
    <div class=${formTourCategory}>
      <label for="">Categoría:</label>
      <input type="text">
    </div>
    <div class=${formTourLength}>
      <label for="">Duración (Horas):</label>
      <input type="number" min="1">
    </div>
    <div class=${formTourNumberPeople}>
      <label for="">Capacidad de personas: </label>
      <input type="number" min="1" class="numberPeople">
    </div>
    <div id=${formTourDivSchedule}>
      <label for="">Horario: </label>
      <div class=${formTourSchedule}>
        <input type="text" class="addScheduleInput">
        <button type="button" class="addSchedule" id="addSchedule">&#43;</button>
      </div>
    </div>
    <div class="formTourPrice">
      <label for="">Precio: </label>
      <input type="number">
    </div>
    <div class=${formTourButtons}>
      <button type="button">Cancelar</button>
      <button type="" id="saveForm">Guardar</button>
    </div>
  </form>
`;

  const logic = () =>{
    document.body.appendChild($containerFormTour);
    document.getElementById("formTourDivSchedule").addEventListener("click", (event) => {
      if (event.target && event.target.id === "addSchedule") {
        const $addAnotherSchedule = document.createElement("INPUT");
        $addAnotherSchedule.setAttribute("type", "text");
        $addAnotherSchedule.setAttribute("class", "addScheduleInput");
        $addAnotherSchedule.style.width="200px"
        $addAnotherSchedule.style.marginTop="10px"
        const $formTourDivSchedule = document.getElementById("formTourDivSchedule");
        $formTourDivSchedule.appendChild($addAnotherSchedule);
      }
    });

    const saveForm = document.getElementById("saveForm");

    saveForm.addEventListener("click", (event) => {
        event.preventDefault()
      const schedulesInputs = document.querySelectorAll('.addScheduleInput');
      const schedulesInputsValues = Array.from(schedulesInputs).map(e => e.value);
      console.log(schedulesInputsValues);
    
        let scheduleSaveDB=""

        for (const value of schedulesInputsValues) {
            if(value !==""){scheduleSaveDB+= ` ${value} -`}
        }
        scheduleSaveDB = scheduleSaveDB.slice(0, -1)
        console.log(scheduleSaveDB);
    });
  }

  return { html: $containerFormTour, logic }
}
