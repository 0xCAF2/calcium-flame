import { keyword } from '../constant'
import { Variable } from '../expression/variable'
import { Expression } from '../type/expression'

export function parseExpr(expr: any): Expression {
  if (
    typeof expr === 'number' ||
    typeof expr === 'string' ||
    typeof expr === 'boolean'
  ) {
    return expr
  } else if (Array.isArray(expr)) {
    if (Array.isArray(expr[0])) {
      // eg. [["arrayLiteral", ["var", "data"]]]
      return expr[0].map((e) => parseExpr(e))
    } else {
      const kw = expr[0] as string
      switch (kw) {
        case keyword.expression.variable:
          return new Variable(expr[1] as string)
      }
    }
  }
  return -1
}
