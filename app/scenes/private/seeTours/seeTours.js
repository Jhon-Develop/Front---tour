
export function seeTours(){
    const cards = "cards"; // Define la variable cards antes de usarla

    const $content = /*html*/ `
        <div id="${cards}" class="container">
            <h1>hola</h1>
        </div>
    `;

    document.addEventListener("DOMContentLoaded", () => {
        const containMain = document.getElementById(cards); // Utiliza cards aquí
        console.log(containMain);
    });

    const logic = () => {
       console.log("hola");
    }

    return {html: $content, logic}
}