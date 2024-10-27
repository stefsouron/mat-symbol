export class MaterialSymbol extends HTMLElement {
  #iconElement = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <span class="material-symbols-outlined"></span>
    `;
  }

  connectedCallback() {
    this.#iconElement = this.shadowRoot.querySelector('.material-symbols-outlined');
    this.#iconElement.innerText = this.getAttribute('name') || 'home';
  }
}

customElements.define('mat-symbol', MaterialSymbol);
