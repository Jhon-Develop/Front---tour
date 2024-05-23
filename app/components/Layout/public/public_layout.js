import { Navbar } from "../../navbar/navbar";


export function PublicLayout({pageContent,  params}) {
  const root = document.getElementById('root');

  const {html: navbarHtml, logic: navbarLogic} = Navbar()

  const routes = [
    "ruta1",
    "ruta2"
  ]
  
  root.innerHTML = `
    <div>
      <div>
        ${navbarHtml}
      </div>
      <div>
        ${pageContent.html}
      </div>
    </div>
    `;

    navbarLogic()
    pageContent.logic()

}
