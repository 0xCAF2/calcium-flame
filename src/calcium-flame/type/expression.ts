import { Reference } from './reference'

export type Expression = number | string | boolean | Reference | Expression[]
