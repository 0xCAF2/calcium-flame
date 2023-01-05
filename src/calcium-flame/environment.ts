import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('cf-environment')
export class Environment extends LitElement {
  @property()
  indent = 0

  @property()
  lineIndex = 0

  render() {
    return html`<p>${this.lineIndex}</p>`
  }

  jump(deltaIndex: number): void {
    this.lineIndex += deltaIndex
  }

  shift(deltaIndent: number): void {
    this.indent += deltaIndent
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-environment': Environment
  }
}
