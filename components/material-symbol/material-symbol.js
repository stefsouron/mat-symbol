import symbolNames from './material-symbols-name.js'

export class MaterialSymbol extends HTMLElement {
  #sizeMatchRegex = /^-?\d+(\.\d+)?(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)?$/

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
    const iconElement = this.shadowRoot.querySelector('.material-symbols-outlined')
    const size = this.getAttribute('size') ?? ''
    const color = this.getAttribute('color') ?? 'inherit'
    iconElement.style.fontSize = this.#sizeMatchRegex.test(size) ? size : '1.5rem'
    iconElement.style.color = color
    const givenName = this.textContent.toLowerCase().replace(/\s+/g, '_')
    iconElement.innerText = (symbolNames.includes(givenName)) ? givenName : 'home'
  }
}

customElements.define('mat-symbol', MaterialSymbol);
