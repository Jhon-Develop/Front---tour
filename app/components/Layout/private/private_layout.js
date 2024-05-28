import { asidenav } from "../../asidenav/asidenav";
import {
    container,
    navbar,
    content,
    foot
} from './private_layout.css'
import { footerContent } from "../../footer/footer";

export function PrivateLayout({pageContent, params}){
    const root = document.getElementById('root'); 

    const {html: asidenavHtml, logic: asidenavLogic} = asidenav();

    root.innerHTML = `
    <div class=${container}>
        <div class${navbar}>
            ${asidenavHtml}
        </div>
        <div class=${content}>
            ${pageContent.html}
        </div>
        <div class=${foot}>
            ${footerContent}
        </div>
    </div>`

    asidenavLogic()
    pageContent.logic()
}