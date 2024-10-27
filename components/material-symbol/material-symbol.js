export class MaterialSymbol extends HTMLElement {
  #iconElement = null;

  constructor() {
    super();
    this.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <span class="material-symbols-outlined"></span>
    `;
  }

  connectedCallback() {
    this.#iconElement = this.querySelector('.material-symbols-outlined');
    this.#iconElement.innerText = this.getAttribute('name') || 'home';
  }
}

customElements.define('material-symbol', MaterialSymbol);
