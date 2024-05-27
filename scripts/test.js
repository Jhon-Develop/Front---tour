
const myArray = [
  {
    image:'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: 'Visit the Sagrada Familia San Nicolas',
    price: '78.9 USD',
    raiting: 5,
    numOpinions: '1,000 opiniones acerca de este tour',
    description:
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae.',
  },

  {
    image:'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: 'Visit the Sagrada Familia San Nicolas',
    price: '78.9 USD',
    raiting: 5,
    numOpinions: '1,000 opiniones acerca de este tour',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae.',
  },

  {
    image:'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: 'Visit the Sagrada Familia San Nicolas',
    price: '78.9 USD',
    raiting: 5,
    numOpinions: '1,000 opiniones acerca de este tour',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae.',
  },
];


// Funcion para crear la carta
function createCard(card) {
  const fragment = document.createDocumentFragment();
  const $card = document.createElement('article');
  $card.innerHTML = `
<div class="cards_highlights">
                    <div class="highlights_images">
                        <img src="${card.image}"alt="" />
                    </div>
                    <div class="about_travel">
                        <h3 class="travel_name">
                            ${card.name}
                        </h3>
                        <button class="button_price">
                            <p>${card.price}</p>
                        </button>
                    </div>
                    <div class="travel_opinions">
                        <h2>${'<i class="fa-solid fa-star"></i>'.repeat(
                          card.raiting
                        )}</h2>
                    </div>
                    <div class="num_opinions">
                        <p>${card.numOpinions}</p>
                    </div>
                    <!--Mas informacion-->
                    <div class="more_information">
                        <div class="more_information_text">
                        <h2>${'<i class="fa-solid fa-star"></i>'.repeat(
                          card.raiting
                        )}</h2>
                            <p>
                            ${card.description}
                            </p>
                            <button class="travel_price_back">
                                <p>${card.price}</p>
                            </button>
                        </div>
                        <div class="contain_add_booking">
                            <h3>${card.name}</h3>
                            <button>RESERVAR</button>
                        </div>
                    </div>
                </div>`;

 fragment.appendChild($card);
 return fragment
}

// Verificar si las cartas ya se han mostrado
let cardsDisplayed = false;

//Funcion para mostrar todas las cartas
function showCard(){
  // Verificar si las cartas no se han mostrado 
  if (!cardsDisplayed){
    // Seleccionar el contenedor principal para agregar las cartas creadas
    const $myContain = document.querySelector('.P_section_highlights');
    // El parametro que va tomar createCard va ser el de "card" que esta iterando sobre el array de card
    myArray.forEach((card) => {
      const $createCard = createCard(card);
      $myContain.appendChild($createCard);
      console.log($myContain);
    });
    // Marcar que las cartas ya se han mostrado y cambiar el valor de cardsDisplayed
    cardsDisplayed = true;
  }
}
// Al boton le añado un addEventListener y le paso como funcion showCard
document.querySelector(".see_more").addEventListener('click',showCard);