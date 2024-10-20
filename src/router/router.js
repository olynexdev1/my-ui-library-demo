// src/router/Router.js
import { render } from '../core/render';

class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadRoute();
    window.onpopstate = () => this.loadRoute();  // Handle back/forward navigation
  }

  navigate(path) {
    window.history.pushState(null, null, path);  // Change URL without page refresh
    this.loadRoute();  // Render the new route
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/404'];  // 404 page for unknown routes
    document.getElementById('root').innerHTML = '';  // Clear current content
    render(route.component(), document.getElementById('root'));  // Render the new component
  }
}

export const createRouter = (routes) => new Router(routes);
