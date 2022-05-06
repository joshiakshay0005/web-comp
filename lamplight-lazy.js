class LamplightLazy extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<div class="border padding-all-2">This is a Web Component</div>`;
  }
}
customElements.define('lamplight-lazy', LamplightLazy);