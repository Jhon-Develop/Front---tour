const $booking = document.getElementById("booking");

$booking.onclick = () => {
  const $modalPayment = document.createElement("DIV");
  $modalPayment.classList.add("modalPayment");
  $modalPayment.innerHTML = `
  <div class="modalContent">
    <span class="close">&times;</span>
    <h3 class="modalPaymentTittle">Información de la reserva y pago</h3>
    <form action="" class="formPayment">
        <div>
            <h3 class="">Guatapé (Completo)</h3>
        </div>
        <div>
            <p class="nameTourist">Pepito Pérez</p>
        </div>
        <div>
            <p>Valor por persona: <span class="priceTour">$79.99</span></p>
        </div>
        <div>
            <label>Horario:</label>
            <select name="" id="">
                <option value="" selected disabled>Seleccionar</option>
                <option value="">Martes 8:00 am</option>
                <option value="">Jueves 10:00 am</option>
            </select>
        </div>
        <div>
            <label>Número de personas: </label>
            <input type="number" min="1">
        </div>
        <div class="formDivValueTotal">
            <h2>Total</h2>
            <h2>$79.99</h2>
        </div>
        <div>
            <label for="">Numero de tarjeta</label>
            <input type="number">
        </div>
        <div>
            <label for="" >CVC</label>
            <input type="number">
        </div>
        <div>
            <label for="">Fecha de la tarjeta (Año-Mes-Día)</label>
            <input type="date" min="2024-06-01">
        </div>
        <div class="formDivButtons">
            <button>Cancelar</button>
            <button>Pagar</button>
        </div>
    </form>
  </div>`;
  document.body.appendChild($modalPayment);

  $modalPayment.style.display = "block";

  const closeBtn = $modalPayment.querySelector(".close");

  closeBtn.onclick = function () {
    $modalPayment.style.display = "none";
    document.body.removeChild($modalPayment);
  };

  window.onclick = function (event) {
    if (event.target === $modalPayment) {
      $modalPayment.style.display = "none";
      document.body.removeChild($modalPayment);
    }
  };
};
