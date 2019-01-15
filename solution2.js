function solution(S = 'banana') {
    let result = 0
    if (S === S.split('').sort().join(''))
        return result
    let length = S.length
    for (let i = 0; i < length / 2; i++) {
        if (S[i] > S[i + 1]) {
            result++
            S = S.substring(0, i) + S.substring(i + 1, S.length)
            i = 0
            length = S.length
        }
        if (S[S.length - 1 - i] < S[S.length - 1 - (i + 1)]) {
            result++
            S = S.substring(0, S.length - 1 - i) + S.substring(S.length - i, S.length)
            i = 0
            length = S.length
        }
        if (S === S.split('').sort().join('')) {
            return result
        }
    }
    return result
}

console.log(solution())