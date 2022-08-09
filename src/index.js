import './style.css';

function component() {
  const element = document.createElement('div');
  element.textContent = "To-Do";
  return element;
}

document.body.appendChild(component());
