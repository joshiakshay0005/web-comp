class LamplightLazy extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          border: 2px solid #ffc60d !important;
        }
      </style>
      This is a Web Component
    `;
  }
}
customElements.define('lamplight-lazy', LamplightLazy);