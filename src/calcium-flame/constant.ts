const index = {
  statement: {
    keyword: 2,
  },
  assign: {
    lhs: 3,
    rhs: 4,
  },
}

const keyword = {
  command: {
    assign: '=',
    comment: '#',
    end: 'end',
  },
  expression: {
    subscript: 'sub',
    variable: 'var',
  },
}

export { index, keyword }
