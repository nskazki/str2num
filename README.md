# str2num

[![Build Status](https://travis-ci.org/nskazki/str2num.svg)](https://travis-ci.org/nskazki/str2num)
[![Coverage Status](https://coveralls.io/repos/github/nskazki/str2num/badge.svg?branch=master)](https://coveralls.io/github/nskazki/str2num)

>This module is written on `typescript`, and contains the `.d.ts` file.
><br>If you write on `typescript`: just use it in your project and definitions will be automatically uploaded.

```
npm i -S str2num
```

## About

Strict way to convert a string to a number.
If the string does not contain the number then will be thrown the error.

## Examples

```js
const str2num = require('str2num')
const assert = require('assert')

assert.equal(str2num(1000), 1000)
assert.equal(str2num('1000'), 1000)
assert.equal(str2num(' + 1,000 '), 1000)
assert.equal(str2num('- 1 000'), -1000)

assert.equal(str2num('-0'), -0)
assert.equal(str2num('1.20'), 1.2)
assert.equal(str2num('.120'), 0.12)
assert.equal(str2num('120.'), 120)
assert.equal(str2num('-.123e3'), -123)

assert.equal(str2num('-Infinity'), -Infinity)
assert.equal(isNaN(str2num('NaN')), isNaN(NaN))

assert.throws(() => str2num([]))
assert.throws(() => str2num({}))
assert.throws(() => str2num(/./))

assert.throws(() => str2num(''))
assert.throws(() => str2num('.'))
assert.throws(() => str2num('e'))
assert.throws(() => str2num('.e'))
assert.throws(() => str2num('.e3'))
assert.throws(() => str2num('-123e'))
assert.throws(() => str2num('e123'))
```
