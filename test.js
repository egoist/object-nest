import test from 'ava';
import objectNest from './';

test('assign nestly', t => {
  const obj = objectNest({a:1}, 'b.c.d', 'hello');
  t.same(obj.b.c.d, 'hello');
});

test('override', t => {
  const obj = objectNest({a:1}, 'a.b.c.d', 'hello');
  t.same(obj.a.b.c.d, 'hello');
});

test('conflict', t => {
  let obj = {a: 1};
  obj = objectNest(obj, 'a.b', {value: 1});
  obj = objectNest(obj, 'a.b.c', {value: 2});
  t.ok(obj.a.b.value === 1 && obj.a.b.c.value === 2);
});

test('empty', t => {
  let obj = objectNest(null, 'a.b.c.d', 1);
  t.same(obj.a.b.c.d, 1);
});

test('same level', t => {
  let obj = {};
  obj = objectNest(obj, 'a', {d: 4});
  obj = objectNest(obj, 'b', 2);
  t.ok(obj.a.d === 4 && obj.b === 2);
});