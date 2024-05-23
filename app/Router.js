import { PublicLayout } from "./components/Layout/public/public_layout";
import { routes } from "./helpers/routes";

const API_URL = 'http://localhost:4000/api/auth/verify-token';

// Verificar token con la API
async function verifyToken(token) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage}`);
      }
  
      const data = await response.json();
      return [data.valid, data];
    } catch (error) {
      console.error('Token verification failed:', error);
      return [false, { message: error.message }];
    }
  }
  
  // Navegar a una nueva ruta
export function navigateTo(path) {
    window.history.pushState({}, '', window.location.origin + path);
    Router();
  }


  
export async function Router() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
  
    // Verificar autenticación antes de decidir qué componente mostrar
    if (path === '/landing') {
      const token = localStorage.getItem('token');
      if (token) {
        const [isValid] = await verifyToken(token);
        if (isValid) {
          navigateTo('/dashboard');
          return;
        }
      }
    }
  
    // Comprobar rutas públicas y privadas
    const publicRoute = routes.public.find((r) => r.path === path);
    const privateRoute = routes.private?.find((r) => r.path === path);
  
    if (publicRoute) {
      const pageContent = publicRoute.component();
      PublicLayout({pageContent, params})
    } else if (privateRoute) {
      checkAuth(path, params);
    } else {
      console.warn('Ruta no encontrada:', path);
      navigateTo('/landing');
    }
  }
  
  // Manejar el evento de retroceso/avance en el navegador
  window.onpopstate = Router;
  