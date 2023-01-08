import { html } from 'lit'
import { Environment } from '../environment'
import { AnyType } from '../type/anyType'

export class Variable {
  name: string

  constructor(name: string) {
    this.name = name
  }

  assign(value: AnyType, env: Environment) {
    env.context.set(this.name, value)
  }

  get description() {
    return html`${this.name}`
  }
}
