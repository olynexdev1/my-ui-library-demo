// src/core/render.js
export function render(vNode, container) {
    const element = document.createElement(vNode.tag);
  
    // Set properties and events
    for (const [name, value] of Object.entries(vNode.props || {})) {
      if (name === 'children') continue;
      if (name.startsWith('on')) {
        element.addEventListener(name.substring(2).toLowerCase(), value);
      } else {
        element[name] = value;
      }
    }
  
    // Render children recursively
    vNode.props.children.forEach((child) => {
      if (typeof child === 'object') {
        render(child, element);
      } else {
        element.appendChild(document.createTextNode(child));
      }
    });
  
    container.appendChild(element);
  }
  