const input = [
    [3, 7],
    [1, 4],
    [5, 6],
    [10, 22],
    [9, 18],
    [222, 1028],
    [100, 232],
]

// Output:
// [
//   [ 1, 7 ],
//   [ 9, 22 ],
//   [ 100, 1028 ],
// ]

const mergeIntervals = intervals => {
    intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1
        } else {
            return -1
        }
    })
    return intervals.reduce((pre, cur) => {
        let preEl = pre[pre.length-1];
        if(typeof pre[0] === 'Number'){
            if (preEl[1] >= cur[0]) {
                if (preEl[1] < cur[1]) {
                    preEl[1] = cur[1];
                }
                return [...pre,preEl];
            } else {
                return [...pre,...cur];
            }
        }else{
            
        }

    });
     
}

console.log(mergeIntervals(input))
