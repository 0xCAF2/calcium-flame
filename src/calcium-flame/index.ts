import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { Statement } from './statement'
import './command/assign'
import { parse } from './parser'
import { Environment } from './environment'

@customElement('calcium-flame')
export class CalciumFlame extends LitElement {
  set code(val: string | Statement[]) {
    const oldVal = this._code
    this._code = this.load(val)
    this._env = new Environment()
    this.requestUpdate('code', oldVal)
  }

  @property()
  get code() {
    return this._code
  }

  render() {
    return html`
      <h1>calcium-flame</h1>
      <p>${this._env?.lineIndex ?? -1}</p>
      <div id="commands">
        ${map(this._code, (stmt) => html`${parse(stmt)}`)}
      </div>
      <div id="context"></div>
    `
  }

  private _code!: Statement[]

  private _env?: Environment

  private load(code: string | Statement[]): Statement[] {
    if (typeof code === 'string') {
      return JSON.parse(code) as Statement[]
    } else {
      return code
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calcium-flame': CalciumFlame
  }
}
