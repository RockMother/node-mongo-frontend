export function addOrUpdate (array, value, predicate) {
    const index = array.find(predicate);
    if (index >= 0) {
        array[index] = value;
    } else {
        array.push(value);
    }
    return array;
}