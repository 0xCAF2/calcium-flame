import { html } from 'lit'

export class Variable {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get description() {
    return html`${this.name}`
  }
}
