'use strict'

import str2num from '../src'
import assert = require('power-assert')

describe('number', () => {
  it('1000', () => {
    const act = str2num('1000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it(' 1 000 ', () => {
    const act = str2num(' 1 000 ')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('1,000', () => {
    const act = str2num('1,000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it('-1000', () => {
    const act = str2num('-1000')
    const exp = -1000
    assert.equal(act, exp)
  })

  it('+1000', () => {
    const act = str2num('+1000')
    const exp = 1000
    assert.equal(act, exp)
  })

  it(' + 1,000 ', () => {
    const act = str2num(' + 1,000 ')
    const exp = 1000
    assert.equal(act, exp)
  })

  it(' - 1,000 ', () => {
    const act = str2num(' - 1,000 ')
    const exp = -1000
    assert.equal(act, exp)
  })

  it('+0', () => {
    const act = str2num('+0')
    const exp = 0
    assert.equal(act, exp)
  })

  it('-0', () => {
    const act = str2num('-0')
    const exp = -0
    assert.equal(act, exp)
  })

  it('NaN', () => {
    const act = str2num('NaN')
    const exp = NaN
    assert.equal(isNaN(act), isNaN(exp))
  })

  it('Infinity', () => {
    const act = str2num('Infinity')
    const exp = Infinity
    assert.equal(act, exp)
  })

  it('+Infinity', () => {
    const act = str2num('+Infinity')
    const exp = Infinity
    assert.equal(act, exp)
  })

  it('-Infinity', () => {
    const act = str2num('-Infinity')
    const exp = -Infinity
    assert.equal(act, exp)
  })

  it('1.2', () => {
    const act = str2num('1.2')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('+1.2', () => {
    const act = str2num('+1.2')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('-1.2', () => {
    const act = str2num('-1.2')
    const exp = -1.2
    assert.equal(act, exp)
  })

  it('1.20', () => {
    const act = str2num('1.20')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('+1.20', () => {
    const act = str2num('+1.20')
    const exp = 1.2
    assert.equal(act, exp)
  })

  it('-1.20', () => {
    const act = str2num('-1.20')
    const exp = -1.2
    assert.equal(act, exp)
  })

  it(' 12,345,678.90 ', () => {
    const act = str2num(' 12,345,678.90 ')
    const exp = 12345678.9
    assert.equal(act, exp)
  })

  it(' + 12,345,678.90 ', () => {
    const act = str2num(' + 12,345,678.90 ')
    const exp = 12345678.9
    assert.equal(act, exp)
  })

  it(' - 12,345,678.90 ', () => {
    const act = str2num(' - 12,345,678.90 ')
    const exp = -12345678.9
    assert.equal(act, exp)
  })

  it('123.e0', () => {
    const act = str2num('123.e0')
    const exp = 123
    assert.equal(act, exp)
  })

  it('+123.e0', () => {
    const act = str2num('+123.e0')
    const exp = 123
    assert.equal(act, exp)
  })

  it('-123.e0', () => {
    const act = str2num('-123.e0')
    const exp = -123
    assert.equal(act, exp)
  })

  it('.123e3', () => {
    const act = str2num('.123e3')
    const exp = 123
    assert.equal(act, exp)
  })

  it('+.123e3', () => {
    const act = str2num('+.123e3')
    const exp = 123
    assert.equal(act, exp)
  })

  it('-.123e3', () => {
    const act = str2num('-.123e3')
    const exp = -123
    assert.equal(act, exp)
  })


  it('123456.', () => {
    const act = str2num('123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('123456.', () => {
    const act = str2num('123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('+123456.', () => {
    const act = str2num('+123456.')
    const exp = 123456
    assert.equal(act, exp)
  })

  it('-123456.', () => {
    const act = str2num('-123456.')
    const exp = -123456
    assert.equal(act, exp)
  })

  it('.123', () => {
    const act = str2num('.123')
    const exp = 0.123
    assert.equal(act, exp)
  })

  it('+.123', () => {
    const act = str2num('+.123')
    const exp = 0.123
    assert.equal(act, exp)
  })

  it('-.123', () => {
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
