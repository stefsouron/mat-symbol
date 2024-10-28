/* VERSION 0.0.1 */

const symbolNames = ["search", "home", "menu", "close", "settings", "check_circle", "favorite", "add", "delete", "arrow_back", "star", "chevron_right", "logout", "arrow_forward ios", "add_circle", "cancel", "arrow_back ios", "arrow_forward", "arrow_drop down", "more_vert", "check", "check_box", "open_in new", "toggle_on", "grade", "refresh", "check_box outline blank", "login", "chevron_left", "radio_button unchecked", "more_horiz", "download", "apps", "arrow_right alt", "radio_button checked", "filter_alt", "remove", "bolt", "arrow_upward", "toggle_off", "filter_list", "delete_forever", "autorenew", "key", "block", "sync", "arrow_downward", "sort", "add_box", "arrow_back ios new", "restart_alt", "shopping_cart checkout", "menu_open", "expand_circle down", "undo", "backspace", "arrow_circle right", "done_all", "arrow_right", "do_not disturb on", "open_in full", "manage_search", "double_arrow", "sync_alt", "done_outline", "zoom_in", "drag_indicator", "fullscreen", "keyboard_double arrow right", "star_half", "ios_share", "settings_accessibility", "reply", "arrow_drop up", "exit_to app", "unfold_more", "library_add", "cached", "terminal", "select_check box", "change_circle", "disabled_by default", "swap_horiz", "swap_vert", "close_fullscreen", "app_registration", "download_for offline", "dataset", "arrow_circle up", "arrow_circle left", "minimize", "file_open", "open_with", "add_task", "keyboard_double arrow left", "start", "keyboard_double arrow down", "create_new folder", "upload", "forward", "downloading", "compare_arrows", "settings_applications", "redo", "publish", "zoom_out", "arrow_left", "token", "person", "account_circle", "mail", "edit", "shopping_cart", "pin_drop", "description", "play_arrow", "local_shipping", "school", "phone_iphone", "dark_mode", "badge", "apartment", "house", "stadia_controller", "view_object track", "nest_gale wifi"]

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
    const size = this.getAttribute('size')
    const color = this.getAttribute('color') ?? 'inherit'
    iconElement.style.fontSize = this.#sizeMatchRegex.test(size) ? size : 'inherit'
    iconElement.style.color = color
    const givenName = this.textContent.toLowerCase().replace(/\s+/g, '_')
    iconElement.innerText = (symbolNames.includes(givenName)) ? givenName : 'home'
  }
}

customElements.define('mat-symbol', MaterialSymbol);
