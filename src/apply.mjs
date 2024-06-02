function append(result, value) {
    if (result.indexOf(value)!=-1) {
        result = result.filter(e => e!=value)
    } 
    result.push(value)
	return result
}

/**
 * return a new full array, with additions and deletions from prevValue to newValue, applied to full
 */
export default function applyValues(full,prevValue,newValue) {
	let result = []
	let cursor = 0
	let newCursor = 0
	while(cursor<full.length) {
		let current = full[cursor] // 0 => 1
		if (prevValue.indexOf(current)==-1) {
			result = append(result, current) // keep the value from full
		} else {
			let newPos = newValue.indexOf(current)
			if (newPos==-1) {
				// do nothing, value is deleted
			} else if (newPos==newCursor) {
				newCursor++
				result = append(result, current) // in both prevValue and newValue in the correct order
			} else if (newPos!=newCursor) {
				// moved or something is inserted TODO: handle moved
				while (newPos>=newCursor) {
					current = newValue[newCursor]
					result = append(result, current)
					newCursor++
				}
			}
		}
		cursor++
		continue
	}
	while (newCursor<newValue.length) {
		let current = newValue[newCursor]
		result = append(result, current)
		newCursor++
	}
    return result
}