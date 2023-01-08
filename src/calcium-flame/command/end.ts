import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Environment } from '../environment'
import { Command } from '.'

@customElement('cf-end')
export class End extends LitElement implements Command {
  render() {
    return html`<p>プログラムの終わり</p>`
  }

  execute(_: Environment): void {
    // do nothing
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-end': End
  }
}
