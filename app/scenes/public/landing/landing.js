import './style.css'

export async function landingPage() {
    const root = document.getElementById('root');

    root.innerHTML =`
        <section id="mainDestinations">
        <h1>
            Principales Destinos
        </h1>

        <div>
            <form action="" id="searchBar">
                <input class="inputUser" type="search" placeholder="¿A donde quieres viajar hoy?">
                <input class="searchWhitInputUser" type="submit" value="Buscar">
                <span id="arrow" class="material-symbols-outlined">
                    arrow_right_alt
                </span>
            </form>
        </div>

            <div id="places">
            <a href="" class="containerPLaces" id="c_1">

                <h2>
                    Barcelona
                </h2>

            </a>
            <a href="" class="containerPLaces" id="c_2">

                <h2>
                    Barcelona
                </h2>

            </a>
            <a href="" class="containerPLaces"  id="c_3">

                <h2>
                    Barcelona
                </h2>

            </a>
            <a href="" class="containerPLaces"  id="c_4">

                <h2>
                    Barcelona
                </h2>

            </a>
            <a href="" class="containerPLaces"  id="c_5">
                
                <h2>
                    Barcelona
                </h2>

            </a>

            <a href="" class="containerPLaces"  id="c_6">

                <h2>
                    Barcelona
                </h2>

            </a>

            <a href="" class="containerPLaces"  id="c_7">

                <h2>
                    Barcelona
                </h2>

            </a>
        </div>
      </section>
    `
    ;
        
}

console.log("la puta madre");