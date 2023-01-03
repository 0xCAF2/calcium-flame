import { html, TemplateResult } from 'lit'
import { index } from '../constant'
import { Statement } from '../statement'
import { Expression } from '../type/expression'
import { Reference } from '../type/reference'
import { parseExpr } from './parseExpr'

export function parseAssign(stmt: Statement): TemplateResult {
  const lhs = parseExpr(stmt[index.assign.lhs]) as Reference
  const rhs = parseExpr(stmt[index.assign.rhs]) as Expression
  return html`<cf-assign .lhs=${lhs} .rhs=${rhs}></cf-assign>`
}
