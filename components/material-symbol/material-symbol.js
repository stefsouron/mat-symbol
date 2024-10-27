export class MaterialSymbol extends HTMLElement {
  #iconElement = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <span class="material-symbols-outlined"></span>
    `
  }

  connectedCallback() {
    /* The components auto-adds (once) the needed stylesheet
       to the document's head, or it doesn't work. */
    const isStyleSheetAdded = Boolean(document.getElementById('material-symbols-stylesheet'))
    if (!isStyleSheetAdded) {
      const docLink = document.createElement('link')
      docLink.id = 'material-symbols-stylesheet'
      docLink.rel = 'stylesheet'
      docLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
      document.head.appendChild(docLink)
    }
    this.#iconElement = this.shadowRoot.querySelector('.material-symbols-outlined')
    this.#iconElement.innerText = this.textContent || 'home'
  }
}

customElements.define('mat-symbol', MaterialSymbol);
