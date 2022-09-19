import { assert, expect, test } from 'vitest';
import { stringify } from '../src/index.js';

test('stringify string', () => {
  const query = [
    { key: 'foo', value: 'bar' },
    { key: 'baz', value: 'qux' },
  ];

  const queryString = stringify(query);

  expect(queryString).toBe('?foo=bar&baz=qux');
});

test('stringify number', () => {
  const query = [
    { key: 'foo', value: 1 },
    { key: 'bar', value: 2 },
  ];

  const queryString = stringify(query);

  expect(queryString).toBe('?foo=1&bar=2');
});

test('stringify boolean', () => {
  const query = [
    { key: 'foo', value: true },
    { key: 'bar', value: false },
  ];

  const queryString = stringify(query);

  expect(queryString).toBe('?foo=true&bar=false');
});

test('stringify array', () => {
  const query = [
    { key: 'foo', value: ['bar', 'baz'] },
    { key: 'qux', value: ['quux', 'corge'] },
  ];

  const queryString = stringify(query);

  expect(queryString).toBe('?foo=bar,baz&qux=quux,corge');
});

test('stringify null', () => {
  const query = [
    { key: 'foo', value: null },
    { key: 'bar', value: null },
  ];

  const queryString = stringify(query);

  expect(queryString).toBe('?foo=null&bar=null');
});
