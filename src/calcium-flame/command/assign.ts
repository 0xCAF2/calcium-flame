import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Environment } from '../environment'
import { getDescription } from '../expression/getDescription'
import { Expression } from '../type/expression'
import { Reference } from '../type/reference'
import { Command } from '.'

@customElement('cf-assign')
export class Assign extends LitElement implements Command {
  @property()
  lhs!: Reference

  @property()
  rhs!: Expression

  render() {
    return html`<p>${this.lhs.description} = ${getDescription(this.rhs)}</p>`
  }

  execute(env: Environment): void {
    env.jump(1)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cf-assign': Assign
  }
}
