import { html, TemplateResult } from 'lit'
import { Statement } from '../statement'
import { index, keyword } from '../constant'
import { parseAssign } from './parseAssign'

export function parse(stmt: Statement): TemplateResult {
  const kw = stmt[index.statement.keyword] as string
  switch (kw) {
    case keyword.command.assign:
      return parseAssign(stmt)
    case keyword.command.comment:
      return html``
    case keyword.command.end:
      return html`<p>プログラムの終わり</p>`
    default:
      return html`<p>Not implemented</p>`
  }
}
