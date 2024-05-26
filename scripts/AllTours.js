// Supongamos que esta es la api que se va consumir
const ApiTours = [
  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },


  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },

  {
    image: 'https://images.adsttc.com/media/images/5a4b/c9b5/b22e/38b5/fa00/00ac/newsletter/Screen_Shot_2018-01-02_at_12.05.08_PM.jpg?1514916273',
    name: "Visit the Sagrada Familia San Nicolas",
    price: "78.9 USD",
    raiting: 5,
    numOpinions: "1,000 opiniones acerca de este tour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima velit facilis iste dolores, quae molestias corporis recusandae culpa, ad obcaecati repellat molestiae, mollitia nihil expedita odit! Deserunt, eum. Officia, quae."
  },


];

// Funcion para crear el tour
function createCard(tour) {
  const fragment = document.createDocumentFragment();
  let card = document.createElement('article');
  card.classList.add('cards_highlights');
  card.innerHTML = `
    <div class="highlights_images">
        <img src="${tour.image}" alt="${tour.name}" />
    </div>
    <div class="about_travel">
        <h3 class="travel_name">${tour.name}</h3>
        <button class="button_price">
            <p>$${tour.price} USD</p>
        </button>
    </div>
    <div class="travel_opinions">
        <h2>${'<i class="fa-solid fa-star"></i>'.repeat(tour.raiting)}</h2>
    </div>
    <div class="num_opinions">
        <p>${tour.numOpinions} plazas disponibles</p>
    </div>
    <!-- Más información -->
    <div class="more_information">
        <div class="more_information_text">
            <h2>${'<i class="fa-solid fa-star"></i>'.repeat(tour.raiting)}</h2>
            <p>${tour.description}</p>
            <button class="travel_price_back">
                <p>$${tour.price} USD</p>
            </button>
        </div>
        <div class="contain_add_booking">
            <h3>${tour.name}</h3>
            <button>RESERVAR</button>
        </div>
    </div>
  `;
  fragment.appendChild(card);
  return fragment;
}

// Funcion asincrona para obtener la informacion sobre los tours
async function getLetterInformation() {
  try {
    const resolve = await fetch('ApiTours');
    // Si el status de la respuesta es distinto de 200 y 299, muestro un error
    if (!resolve.ok) {
      throw new Error(`Hubo un error: Status ${resolve.status}\nStatus Text ${resolve.statusText}`)
    }
    // Si el status de la respuesta esta entre 200 y 299 convierto la respuesta ah Json
    return resolve.json()
  }
  catch (error) {
    console.log(error)
  }
}

// Obtengo la informacion luego de que la promesa se haya resuelto
getLetterInformation()
  .then((promiseResolve) => {
    if (promiseResolve) {
      //Si la promesa se resolvio correctamente le paso como parametro ah showInformation la informacion de promiseResolve
      showInformation(promiseResolve);
    }
    // Si hubo un error al obtener los datos, muestro un mensage por consola 
    else {
      console.log("Hubo un error al obtener los datos")
    }
  })


/*Funcion para mostrar la informacion en tarjetas*/
function showInformation(card) {
  // Añadiendo el contenedor principal ah una constante para luego hacerle push al HTML
  const containMain = document.querySelector(".P_section_highlights")
  // El parametro que va tomar createCard va ser el de "el" elemento que esta iterando sobre el array de card
  card.forEach((el) => {
    const carta = createCard(el);
    containMain.appendChild(carta);
  })
}