import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getDescription } from '../expression/getDescription'
import { Expression } from '../type/expression'
import { Reference } from '../type/reference'

@customElement('cf-assign')
export class Assign extends LitElement {
  @property()
  lhs!: Reference

  @property()
  rhs!: Expression

  render() {
    return html`<p>
      ${html`${this.lhs.description}`} = ${getDescription(this.rhs)}
    </p>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-assign': Assign
  }
}
