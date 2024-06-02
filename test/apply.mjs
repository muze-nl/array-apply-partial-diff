import tap from 'tap'
import applyValues from '../src/apply.mjs'

tap.test('insert one', t => {
	const full = [1,2,3,4]
	const prev = [3,4]
	const curr = [3,4,5]
	const result = applyValues(full, prev, curr)
	t.same([1,2,3,4,5], result)
	t.end()
})

tap.test('delete one', t => {
	const full = [1,2,3,4]
	const prev = [3,4]
	const curr = [3]
	const result = applyValues(full, prev, curr)
	t.same([1,2,3], result)
	t.end()
})

tap.test('reorder one', t => {
	const full = [1,2,3,4]
	const prev = [3,4]
	const curr = [4,3]
	const result = applyValues(full, prev, curr)
	t.same([1,2,4,3], result)
	t.end()
})

tap.test('insert multiple', t => {
	const full = [1,2,3,4]
	const prev = [3,4]
	const curr = [3,'x',4,'y']
	const result = applyValues(full, prev, curr)
	t.same([1,2,3,'x',4,'y'], result)
	t.end()
})

tap.test('delete multiple', t => {
	const full = [1,2,3,4]
	const prev = [2,3,4]
	const curr = [3]
	const result = applyValues(full, prev, curr)
	t.same([1,3], result)
	t.end()
})

tap.test('insert multiple consequtive', t => {
	const full = [1,2,3,4]
	const prev = [3,4]
	const curr = [3,'x','y',4]
	const result = applyValues(full, prev, curr)
	t.same([1,2,3,'x','y',4], result)
	t.end()
})
