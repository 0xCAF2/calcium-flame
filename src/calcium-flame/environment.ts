import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import { Variable } from './expression/variable'
import { AnyType } from './type/anyType'
import { Expression } from './type/expression'

@customElement('cf-environment')
export class Environment extends LitElement {
  @property()
  context = new Map<string, AnyType>()

  @property()
  indent = 0

  @property()
  lineIndex = 0

  render() {
    return html`<p>${this.lineIndex}</p>
      <table>
        <thead>
          <tr>
            <th>変数名</th>
            <th>値</th>
          </tr>
        </thead>
        <tbody>
          ${map(
            this.context.entries(),
            ([key, value], _) =>
              html`<tr>
                <td>${key}</td>
                <td>${value.toString()}</td>
              </tr>`
          )}
        </tbody>
      </table> `
  }

  evaluate(expr: Expression): AnyType {
    if (typeof expr === 'number') {
      return expr
    } else if (typeof expr === 'string') {
      return expr
    } else if (typeof expr === 'boolean') {
      return expr
    } else if (Array.isArray(expr)) {
      return expr.map((e) => this.evaluate(e))
    } else if (expr instanceof Variable) {
      const value = this.context.get(expr.name)
      if (value === undefined) {
        this.dispatchEvent(
          new CustomEvent('nameNotFound', {
            bubbles: true,
            detail: {
              name: expr.name,
            },
          })
        )
      }
    }
    return Number.NEGATIVE_INFINITY
  }

  jump(deltaIndex: number): void {
    this.lineIndex += deltaIndex
  }

  shift(deltaIndent: number): void {
    this.indent += deltaIndent
  }

  static styles = css`
    table,
    tr,
    th,
    td {
      border: 1px solid white;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-environment': Environment
  }
}
