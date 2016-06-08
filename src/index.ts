'use strict'

import { inspect } from 'util'

const toString = Object.prototype.toString
const isNumber = (v: any): v is number => toString.call(v) === '[object Number]'
const isString = (v: any): v is string => toString.call(v) === '[object String]'

export default function str2num(value: string|number): number {
  if (isNumber(value))
    return value.valueOf() as any as number

  if (!isString(value))
    throw new TypeError(`str2num: value must be a string or number!
      \n\t value type: ${typeof value}\
      \n\t value: ${inspect(value)}`)

  const clr = (value as string)
    .replace(/\s/g, '')
    .replace(/,/g, '')

  if (isNum(clr)) return Number(clr)
  else throw new Error(`str2num: value can't be cast to the number!\
    \n\t value type: ${typeof value}\
    \n\t value: ${inspect(value)}`)
}

export function isNum(value: any): boolean {
  if (isNumber(value)) return true
  if (!isString(value)) return false

  const clr = value
    .replace(/\s/g, '')
    .replace(/,/g, '')

  const isStrNaN = clr === 'NaN'
  const isStrInfinity = /^[-+]?Infinity$/.test(clr)

  const isStrEpsilon = false
    || /^[-+]?\d+\.\d*e[+-]?\d+$/.test(clr)
    || /^[-+]?\d*\.\d+e[+-]?\d+$/.test(clr)
    || /^[-+]?\d+e[+-]?\d+$/.test(clr)

  const isStrNormal = false
    || /^[-+]?\d+\.\d*$/.test(clr)
    || /^[-+]?\d*\.\d+$/.test(clr)
    || /^[-+]?\d+$/.test(clr)

  const isStrNumber = false
    || isStrNaN
    || isStrInfinity
    || isStrEpsilon
    || isStrNormal

  return isStrNumber
}

// ES6 Modules default exports interop with CommonJS
module.exports = str2num
module.exports.default = str2num
module.exports.isNum = isNum
