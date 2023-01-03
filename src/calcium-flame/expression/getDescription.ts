import { html, TemplateResult } from 'lit'
import { Expression } from '../type/expression'
import { Variable } from './variable'

export function getDescription(expr: Expression): TemplateResult {
  if (typeof expr === 'number' || typeof expr === 'boolean') {
    return html`${expr}`
  } else if (typeof expr === 'string') {
    return html`"${expr}"`
  } else if (expr instanceof Variable) {
    return expr.description
  }
  return html`${expr}`
}
