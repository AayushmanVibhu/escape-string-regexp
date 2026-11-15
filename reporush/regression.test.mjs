import assert from 'node:assert/strict';
import test from 'node:test';
import * as module from '../index.js';
const fn = module.default;

test('regression 1', {timeout: 1500}, async () => {
  assert.equal(fn('a.b+c?'), String.raw`a\.b\+c\?`);
});

test('regression 2', {timeout: 1500}, async () => {
  assert.equal(new RegExp(fn('a.b+c?'), 'u').test('aXbbc'), false);
});

test('regression 3', {timeout: 1500}, async () => {
  assert.throws(() => fn(3), TypeError);
});
