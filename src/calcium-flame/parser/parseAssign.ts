import { html, TemplateResult } from 'lit'
import { index } from '../constant'
import { Statement } from '../statement'

export function parseAssign(stmt: Statement): TemplateResult {
  const lhs = stmt[index.assign.lhs]
  return html`<p>${lhs}</p>`
}
