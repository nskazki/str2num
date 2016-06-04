'use strict'

import str2num, { isNum } from '../src'
import assert = require('power-assert')

describe('str2num', () => {
  it('#isNum: Infinity', () => {
    assert.ok(isNum(Infinity))
  })

  it('#isNum: -Infinity -> true', () => {
    assert.ok(isNum(-Infinity))
  })

  it('#isNum: NaN -> true', () => {
    assert.ok(isNum(NaN))
  })

  it('#isNum: 0 -> true', () => {
    assert.ok(isNum(0))
  })

  it('#isNum: 1 -> true', () => {
    assert.ok(isNum(1))
  })

  it('#isNum: -1 -> true', () => {
    assert.ok(isNum(-1))
  })

  it('#isNum: new Number(-1) -> true', () => {
    assert.ok(isNum(new Number(-1)))
  })

  it('#isNum: "Infinity" -> true', () => {
    assert.ok(isNum('Infinity'))
  })

  it('#isNum: "-Infinity" -> true', () => {
    assert.ok(isNum('-Infinity'))
  })

  it('#isNum: "NaN" -> true', () => {
    assert.ok(isNum('NaN'))
  })

  it('#isNum: "0" -> true', () => {
    assert.ok(isNum('0'))
  })

  it('#isNum: "1" -> true', () => {
    assert.ok(isNum('1'))
  })

  it('#isNum: "-1" -> true', () => {
    assert.ok(isNum('-1'))
  })

  it('#isNum: "-1." -> true', () => {
    assert.ok(isNum('-1.'))
  })

  it('#isNum: "-.1" -> true', () => {
    assert.ok(isNum('-.1'))
  })

  it('#isNum: "-1.e1" -> true', () => {
    assert.ok(isNum('-1.e1'))
  })

  it('#isNum: "-.1e1" -> true', () => {
    assert.ok(isNum('-.1e1'))
  })

  it('#isNum: "- .1e1" -> true', () => {
    assert.ok(isNum('- .1e1'))
  })

  it('#isNum: "- 123, 456 .1e1" -> true', () => {
    assert.ok(isNum('- 123, 456 .1e1'))
  })

  it('#isNum: new String("-1") -> true', () => {
    assert.ok(isNum(new String('-1')))
  })

  it('#isNum: {} -> false', () => {
    assert.ok(!isNum({}))
  })

  it('#isNum: [] -> false', () => {
    assert.ok(!isNum([]))
  })

  it('#isNum: /.*/ -> false', () => {
    assert.ok(!isNum(/.*/))
  })

  it('#isNum: "." -> false', () => {
    assert.ok(!isNum('.'))
  })

  it('#isNum: ".e" -> false', () => {
    assert.ok(!isNum('.e'))
  })

  it('#isNum: "1.e" -> false', () => {
    assert.ok(!isNum('1.e'))
  })

  it('#isNum: ".1e" -> false', () => {
    assert.ok(!isNum('.1e'))
  })

  it('#isNum: ".e3" -> false', () => {
    assert.ok(!isNum('.e3'))
  })

  it('number: 0', () => {
    const act = str2num(0)
    const exp = 0
    assert.equal(act, exp)
  })

  it('number: -0', () => {
    const act = str2num(-0)
    const exp = -0
    assert.equal(act, exp)
  })

  it('number: 1', () => {
    const act = str2num(1)
    const exp = 1
    assert.equal(act, exp)
  })

  it('number: -1', () => {
    const act = str2num(-1)
    const exp = -1
    assert.equal(act, exp)
  })

  it('string: 1000', () => {
    const act = str2num('1000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('string:  1 000 ', () => {
    const act = str2num(' 1 000 ')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('string: 1,000', () => {
    const act = str2num('1,000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('string: -1000', () => {
    const act = str2num('-1000')
    const exp = -1000
    assert.equal(act, exp)
  })

  it('string: +1000', () => {
    const act = str2num('+1000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('string:  + 1,000 ', () => {
    const act = str2num(' + 1,000 ')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('string:  - 1,000 ', () => {
    const act = str2num(' - 1,000 ')
    const exp = -1000
    assert.equal(act, exp)
  })

  it('string: +0', () => {
    const act = str2num('+0')
    const exp = 0
    assert.equal(act, exp)
  })

  it('string: -0', () => {
    const act = str2num('-0')
    const exp = -0
    assert.equal(act, exp)
  })

  it('string: NaN', () => {
    const act = str2num('NaN')
    const exp = NaN
    assert.equal(isNaN(act), isNaN(exp))
  })

  it('string: Infinity', () => {
    const act = str2num('Infinity')
    const exp = Infinity
    assert.equal(act, exp)
  })

  it('string: +Infinity', () => {
    const act = str2num('+Infinity')
    const exp = Infinity
    assert.equal(act, exp)
  })

  it('string: -Infinity', () => {
    const act = str2num('-Infinity')
    const exp = -Infinity
    assert.equal(act, exp)
  })

  it('string: 1.2', () => {
    const act = str2num('1.2')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('string: +1.2', () => {
    const act = str2num('+1.2')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('string: -1.2', () => {
    const act = str2num('-1.2')
    const exp = -1.2
    assert.equal(act, exp)
  })

  it('string: 1.20', () => {
    const act = str2num('1.20')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('string: +1.20', () => {
    const act = str2num('+1.20')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('string: -1.20', () => {
    const act = str2num('-1.20')
    const exp = -1.2
    assert.equal(act, exp)
  })

  it('string:  12,345,678.90 ', () => {
    const act = str2num(' 12,345,678.90 ')
    const exp = 12345678.9
    assert.equal(act, exp)
  })

  it('string:  + 12,345,678.90 ', () => {
    const act = str2num(' + 12,345,678.90 ')
    const exp = 12345678.9
    assert.equal(act, exp)
  })

  it('string:  - 12,345,678.90 ', () => {
    const act = str2num(' - 12,345,678.90 ')
    const exp = -12345678.9
    assert.equal(act, exp)
  })

  it('string: 123.e0', () => {
    const act = str2num('123.e0')
    const exp = 123
    assert.equal(act, exp)
  })

  it('string: +123.e0', () => {
    const act = str2num('+123.e0')
    const exp = 123
    assert.equal(act, exp)
  })

  it('string: -123.e0', () => {
    const act = str2num('-123.e0')
    const exp = -123
    assert.equal(act, exp)
  })

  it('string: .123e3', () => {
    const act = str2num('.123e3')
    const exp = 123
    assert.equal(act, exp)
  })

  it('string: +.123e3', () => {
    const act = str2num('+.123e3')
    const exp = 123
    assert.equal(act, exp)
  })

  it('string: -.123e3', () => {
    const act = str2num('-.123e3')
    const exp = -123
    assert.equal(act, exp)
  })


  it('string: 123456.', () => {
    const act = str2num('123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('string: 123456.', () => {
    const act = str2num('123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('string: +123456.', () => {
    const act = str2num('+123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('string: -123456.', () => {
    const act = str2num('-123456.')
    const exp = -123456
    assert.equal(act, exp)
  })

  it('string: .123', () => {
    const act = str2num('.123')
    const exp = 0.123
    assert.equal(act, exp)
  })

  it('string: +.123', () => {
    const act = str2num('+.123')
    const exp = 0.123
    assert.equal(act, exp)
  })

  it('string: -.123', () => {
    const act = str2num('-.123')
    const exp = -0.123
    assert.equal(act, exp)
  })

  it('throw: wrong value type', () => {
    assert.throws(() => str2num([] as any))
    assert.throws(() => str2num({} as any))
    assert.throws(() => str2num(/./ as any))
  })

  it('throw: string has unexpected format', () => {
    assert.throws(() => str2num(''), '')
    assert.throws(() => str2num('.'), '.')
    assert.throws(() => str2num('e'), 'e')
    assert.throws(() => str2num('.e'), '.e')
    assert.throws(() => str2num('.e3'), '.e3')
    assert.throws(() => str2num('-123e'), '-123e')
    assert.throws(() => str2num('e123'), 'e123')
  })
})
