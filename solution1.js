function solution(S = 'nivee', T = 'nicex') {
    if (S === T) {
        return 'EQUAL'
    }
    else if (S.length === T.length) {
        let difference = 0
        let sTemp = ''
        let tTemp = ''
        let indexT = -1
        for (let i = 0, j = 0; i < S.length; i++ , j++) {
            if (S[i] !== T[j]) {

                sTemp = S[i]
                tTemp = T[i]
                indexT = i
                difference++
            }
        }
        if (difference === 1) {
            return `REPLACE ${sTemp} ${tTemp}`
        }
        if (difference === 2) {
            let sString = S
            let sTemp2 = sString[indexT]
            sString = sString.substr(0, indexT) + sString[indexT - 1] + sString.substr(indexT + sString[indexT - 1].length)
            sString = sString.substr(0, indexT - 1) + sTemp2 + sString.substr(indexT - 1 + sTemp2.length)
            sString[indexT] = sString[indexT - 1]
            sString[indexT - 1] = sTemp2
            if (sString === T) {
                return `SWAP ${sString[indexT]} ${sString[indexT - 1]}`
            }
        }
    }
    else if (Math.abs(S.length - T.length) === 1) {
        let strLength = S.length > T.length ? S.length : T.length
        for (let i = 0, j = 0; i < strLength; i++ , j++) {
            if (S[i] !== T[j]) {

                if (S.substring(i) === T.substring(j + 1)) {
                    return `INSERT ${T[j]}`
                }
                else if (S.substring(i + 1) === T.substring(j)) {
                    return `INSERT ${S[i]}`
                }
                else {
                    return 'IMPOSSIBLE'
                }
            }
        }
    }

    return 'IMPOSSIBLE'

}

console.log(solution())