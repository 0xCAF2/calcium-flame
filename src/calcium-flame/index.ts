import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import Statement from './statement'
import { index, keyword } from './constant'

@customElement('calcium-flame')
export class CalciumFlame extends LitElement {
  @property()
  code!: Statement[]

  @state()
  private _lineIndex = 0

  private _createCmd(stmt: Statement) {
    const kw = stmt[index.statement.keyword]
    switch (kw) {
      case keyword.command.assign:
        return html`<p>Assign</p>`
      default:
        return html`<p>Not implemented</p>`
    }
  }

  render() {
    return html`
      <h1>calcium-flame</h1>
      <p>${this._lineIndex}</p>
      <div id="commands">
        ${map(this.code, (stmt) => html`${this._createCmd(stmt)}`)}
      </div>
      <div id="context"></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calcium-flame': CalciumFlame
  }
}
