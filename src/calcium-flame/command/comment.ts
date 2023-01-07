import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Environment } from '../environment'
import { Command } from '.'

@customElement('cf-comment')
export class Comment extends LitElement implements Command {
  render() {
    return html`<p>プログラムの始まり</p>`
  }

  execute(env: Environment): void {
    env.jump(1)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-comment': Comment
  }
}
