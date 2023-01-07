import { LitElement, html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { Statement } from './statement'
import './command/assign'
import './environment'
import { parse } from './parser'
import { Environment } from './environment'
import { Command } from './command'

@customElement('calcium-flame')
export class CalciumFlame extends LitElement {
  set code(val: string | Statement[]) {
    const oldVal = this._code
    this._code = this.load(val)
    this.requestUpdate('code', oldVal)
  }

  @property()
  get code() {
    return this._code
  }

  static styles = css`
    #buttons {
      position: fixed;
      top: 8px;
      left: 8px;
      display: flex;
      height: 48px;
    }
    #commands {
      margin-top: 60px;
    }
    .current {
      border: 4px solid dodgerblue;
    }
    .command {
      border: 4px solid transparent;
    }
  `

  firstUpdated(): void {
    this.step()
  }

  render() {
    return html`
      <div id="buttons">
        <button id="button-step" @click=${this.step}>Step</button>
        <button id="button-run">Run</button>
      </div>
      <div id="commands">
        ${map(
          this._code,
          (stmt) => html`<div class="command">${parse(stmt)}</div>`
        )}
      </div>
      <cf-environment id="env"></cf-environment>
      <div id="context"></div>
    `
  }

  step() {
    let div = this._commands.children[this._env.lineIndex]
    div.className = 'command'
    const cmd = div.children[0]
    ;(cmd as unknown as Command).execute(this._env!)
    div = this._commands.children[this._env.lineIndex]
    div.className = 'current'
  }

  private _code!: Statement[]

  @query('#commands')
  private _commands!: HTMLDivElement

  @query('#env')
  private _env!: Environment

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
