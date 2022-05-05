class LamplightLazy extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
      This is a lazy loaded Web Component. Thanks for reading!
    `;
  }
}
customElements.define('lamplight-lazy', LamplightLazy);