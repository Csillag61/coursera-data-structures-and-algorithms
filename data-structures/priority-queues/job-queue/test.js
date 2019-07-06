const assert = require('assert').strict;
const assignJobs = require('./index');

assert.deepEqual([[0, 0], [1, 0], [0, 1], [1, 2], [0, 4]], assignJobs([1, 2, 3, 4, 5], 2));
assert.deepEqual([
    [0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2],
    [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [3, 3], [0, 4], [1, 4], [2, 4], [3, 4]
], assignJobs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4));

console.info('OK!');
process.exit();