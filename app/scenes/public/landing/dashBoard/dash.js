import {article_img, menu_dashHero, place_dashHero, section_dashHero, table_one_hero, table_two_hero} from './/dash.css';

export const dashContent = `
    <section class=${section_dashHero}>
        <div class=${menu_dashHero}>
        <h2>Estadisticas Actuales </h2>
        </div>
        <div class=${place_dashHero}>
        <div class=${table_one_hero}>
            <!-- Aquí puedes agregar el contenido de la tabla 1 -->
        </div>
        <div class=${table_two_hero}>
            <!-- Aquí puedes agregar el contenido de la tabla 2 -->
        </div>
        </div>
    </section>
`
;