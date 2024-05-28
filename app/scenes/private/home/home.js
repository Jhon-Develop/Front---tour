import {border_target_char, contain_characteristic_target, text_description_target,title_tour_description, place_dashboard_contain, table_stadistics, button_table_stadistics, section_description_targets, img_target_description, target_description_dash, contain_text_description} from './home.css';
export function homePage(){
    const $homeContent = `
    <div class=${place_dashboard_contain}>
        <div class=${section_description_targets}>
            <div class=${table_stadistics}>
            </div>
            <button class=${button_table_stadistics}>See More</button>
            <article class=${target_description_dash}>
                <div class=${img_target_description}>
                    <img src="" alt="">
                </div>
                <div class=${contain_text_description}>
                    <div class=${title_tour_description}>
                        <h3>Titulo tour</h3>
                    </div>
                    <div class="contain_text_description_target">
                        <div class=${text_description_target}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae labore id sit corrupti cumque in repudiandae minima laboriosam optio voluptates. Molestias mollitia possimus ipsum architecto quaerat tenetur eum ipsa porro!</p>
                        </div>
                    </div>
                    <div class=${contain_characteristic_target}>
                        <p class=${border_target_char}>Duracion: <span>5 hora</span> </p>
                        <p class=${border_target_char}">Fecha de inicio: <span>31/12/2024</span></p>
                        <p class=${border_target_char}">Cupos: <span>10</span></p>
                        <p>Categoria <span>soleado</span></p>
                    </div>
                </div>
            </article>
        </div>
    </div>
    `
    const logic = () =>{
        console.log("hola");
    }

    return {html: $homeContent, logic};
}