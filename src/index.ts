'use strict'

import { inspect } from 'util'

export default function str2num(value: string): number {
  if (typeof value === 'number')
    return value as any as number

  if (typeof value !== 'string')
    throw new TypeError(`str2num: value must be a string or number!
      \n\t value type: ${typeof value}\
      \n\t value: ${inspect(value)}`)

  const clr = value
    .replace(/\s/g, '')
    .replace(/,/g, '')

  const isStrNaN = clr === 'NaN'
  const isStrInfinity = /^[-+]?Infinity$/.test(clr)

  const isStrEpsilon = false
    || /^[-+]?\d+\.\d*e\d+$/.test(clr)
    || /^[-+]?\d*\.\d+e\d+$/.test(clr)
    || /^[-+]?\d+e\d+$/.test(clr)

  const isStrNormal = false
    || /^[-+]?\d+\.\d*$/.test(clr)
    || /^[-+]?\d*\.\d+$/.test(clr)
    || /^[-+]?\d+$/.test(clr)

  const isStrNumber = false
    || isStrNaN
    || isStrInfinity
    || isStrEpsilon
    || isStrNormal

  if (isStrNumber) return Number(clr)
  else throw new Error(`str2num: value can't be cast to the number!\
    \n\t value type: ${typeof value}\
    \n\t value: ${inspect(value)}`)
}

// ES6 Modules default exports interop with CommonJS
module.exports = str2num
module.exports.default = str2num
