# array-apply-partial-diff

This library implements an array diff application algorithm that can apply a
diff on part of an array to the whole. Given a complete array, a subset
of that array, and a changed version of that subset, this algoritm will
apply all the changes betweent the previous and new subset to the complete
array.

e.g.
```javascript
const complete = [1,2,3,4]
const subset   = [3,4]
const change   = [4,5]
const updated  = applyValues(complete, subset, change)
// => [1,2,4,5]
```

