# Página web HIMA

## Introducción

[HIMA] es un sitio web dedicado a ofrecer vuelos nacionales de excelente calidad para sus usuarios. Sin embargo, nos destacamos no solo por nuestra oferta de vuelos, sino también por brindar oportunidades laborales para aquellos que deseen convertirse en guías turísticos.

Si estás interesado en trabajar con nosotros como guía, [HIMA] te ofrece la plataforma perfecta para mostrar tus habilidades y conocimientos locales. Tendrás la oportunidad de crear y ofrecer tus propios tours a los usuarios, los cuales serán publicados en nuestro sitio web para que puedan ser reservados por los viajeros interesados.

Además, para garantizar una colaboración justa y transparente, [HIMA] tiene una política única: si generas una venta como guía, solo te pediremos que nos pagues el 15% de tu ganancia. Este modelo de negocio permite que tanto los guías como los usuarios se beneficien mutuamente, creando una experiencia de viaje auténtica y gratificante para todos.

Si estás buscando una experiencia de viaje única y personalizada, o si deseas compartir tus conocimientos y pasión por tu ciudad o región, [HIMA] es el lugar ideal tanto para los viajeros como para los guías turísticos. ¡Únete a nosotros y comienza a explorar el mundo de una manera nueva y emocionante!

## Descripción

La página web [HIMA] es una SPA ("Single Page Application") diseñada para proporcionar a los usuarios una experiencia de navegación fluida y rápida. En lugar de cargar páginas individuales, la aplicación carga dinámicamente el contenido necesario, minimizando el tiempo de carga y mejorando la experiencia del usuario.

## Tecnologías Utilizadas

- **Frontend:**
  - HTML5
  - CSS5
  - JavaScript
  - Webpack
  - Babel


- **Backend:**
  - Node.js


- **Base de Datos:**
  - MySQL


## Instalación y Ejecución

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. **Instala y configura Node.js** en tu entorno local.

2. **Clona el repositorio:** Una vez que hayas instalado Node.js, clona el repositorio ejecutando el siguiente comando en tu terminal:

 ```bash
   git clone https://github.com/Jhon-Develop/Front---tour.git
```

Instala Webpack: Después de clonar el proyecto, instala Webpack ejecutando el siguiente comando en tu terminal:

 ```bash
npm install webpack webpack-cli --save-dev
```

Inicia la aplicación: Una vez que hayas instalado Webpack, puedes iniciar la aplicación ejecutando el siguiente comando en tu terminal:

 ```bash
npm start
```
Una vez que la aplicación se esté ejecutando, podrás verla en acción abriendo tu navegador web y navegando a http://localhost:3000.

# Estructura del Proyecto

HIMA/
│
├── dist/                       # Carpeta de salida de archivos generados por Webpack
│
├── app/                        # Carpeta de código fuente
│   ├── assets/                 # Imágenes, fuentes, etc.
│   ├── components/             # Componentes reutilizables globales
│   │   ├── Layout/             # Dashboard
│   │   ├── asidenav/           # Menú lateral
│   │   └── footer/             # Pie de página de la página
│   ├── scenes/                 # Diferentes escenas para el dashboard
│   ├── styles/                 # Estilos globales
│   ├── index.js                # Archivo principal de JavaScript
│   ├── App.js                  # Archivo principal de nuestra app SPA
│   └── Router.js               # Archivo de configuración de rutas de nuestra app SPA
│   └── Api                     # Chart de Google (Sistema estadístico)
│
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── index.html                  # Archivo principal de HTML
├── package-lock.json           # Dependencias del proyecto con versiones
├── request.http                
├── package.json                # Dependencias del proyecto y scripts
├── webpack.config.js           # Archivo de configuración de Webpack
└── README.md                   # Documentación del proyecto

### Integrantes del Equipo

Este pagina web [HIMA] fue realizada por el siguiente equipo:

- **Frontend:**

- [Juan Pablo](https://github.com/JuanAgudelo1015)
- [Francisco Aguirre Agudelo](https://github.com/franciscoaguirredev)
- [Samuel Acevedo Ossa](https://github.com/samuelacevedo9307)

- **Backend:**

- [Jhon Edwin Asprilla](https://github.com/Jhon-Develop)
- [Alejandro Vergara Zapata](https://github.com/yeyo-san)
# Estructura del Proyecto
