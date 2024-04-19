class CustomButton extends HTMLElement {
  connectedCallback() {
    const shadowDom = this.attachShadow({ mode: 'open' })
    const slot = this.ownerDocument.createElement('slot')
    const button = this.ownerDocument.createElement('button')

    button.onclick = () =>
      this.url &&
      window.open(this.url, {
        target: '_blank'
      })

    button.appendChild(slot)
    shadowDom.appendChild(button)
  }
}

customElements.define('custom-button', CustomButton)
