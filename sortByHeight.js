function sortByHeight(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i] != -1 && a[j] != -1) {
                if (a[i] < a[j]) {
                    // console.log('i'+a[i]);
                    // console.log('j'+a[j]);
                    [a[i], a[j]] = [a[j], a[i]]
                }
            }
        }
    }
    return a;
}

