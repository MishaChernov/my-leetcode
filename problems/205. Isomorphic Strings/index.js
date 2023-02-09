/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        if (
            s?.[i + 1] &&
            ((s[i] === s?.[i + 1] && t[i] !== t[i + 1]) ||
                (t[i] === t?.[i + 1] && s[i] !== s[i + 1]))
        )
            return false;

        if (mapS.hasOwnProperty([s[i]])) {
            mapS[s[i]]++;
        } else {
            mapS[s[i]] = 1;
        }

        if (mapT.hasOwnProperty([t[i]])) {
            mapT[t[i]]++;
        } else {
            mapT[t[i]] = 1;
        }
    }

    mapS = Object.values(mapS);
    mapT = Object.values(mapT);

    for (let i = 0; i < mapS.length; i++) {
        if (mapS[i] !== mapT[i]) return false;
    }

    return true;
};
