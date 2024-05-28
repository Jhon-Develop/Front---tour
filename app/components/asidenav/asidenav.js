import {button_ascend_admin,button_remove_admin, button_edit_admin, button_create_tour, button_my_tours, section_dashboard_admin, button_see_tours, menu_dash_admin, profile_menu_dash} from './asidenav.css'
export function asidenav(){
    const $content = `
    <section class=${section_dashboard_admin}>
        <div class=${menu_dash_admin}>
            <div class=${profile_menu_dash}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <h3>Hola Usuario</h3>
            </div>
            <h3>Menu Tours</h3>
            <h3>User</h3>
            <a class="button_see_tours">See Tours</a>
            <a class="button_my_tours">My Tours</a>
            <a href="/create" class="button_create_tour">Create</a>
            <a class="button_edit_admin">Edit / Remove</a>
            <a class="button_ascend_admin">User Ascend</a>
            <a href="/home" class="button_remove_admin">Home</a>
        </div>ñ
    </section>
    `
    const logic = () =>{
        console.log("hola");
    }

    return {html: $content, logic}
}