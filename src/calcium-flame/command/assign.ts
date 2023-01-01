import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cf-assign')
export class Assign extends LitElement {
  @property()
  lhs = null

  render() {
    return html`<p>Assign</p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-assign': Assign
  }
}
