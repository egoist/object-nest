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

