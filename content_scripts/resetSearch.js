function resetSearch(search, attributes) {
    if (!attributes || !search) {
        return search
    }

    if (search.length === 0 || attributes.length === 0) {
        return search
    }

    const needAppendAttributes = {}
    for (const attribute of attributes) {
        needAppendAttributes[attribute] = attribute
    }


    const splits = search.trim().split(/ +/).map(it => it.trim()).filter(it => it.length > 0).reverse()
    let isInSearchValue = false
    let searchValueArray = []
    for (const splitValue of splits) {
        if (isInSearchValue) {
            searchValueArray.push(splitValue.trim())
        } else {
            if (!splitValue.startsWith('-')) {
                searchValueArray.push(splitValue.trim())
                isInSearchValue = true
            } else {
                // find attribute
                const removePrefix = splitValue.substring(1).trim()
                if (removePrefix.length > 0) {
                    needAppendAttributes[removePrefix] = removePrefix
                }
            }
        }
    }

    const needAppendAttributesKeys = Object.keys(needAppendAttributes).reverse()
    let searchValue = searchValueArray.reverse().join(' ')
    for (const value of needAppendAttributesKeys) {
        searchValue += ' -' + value
    }

    return searchValue
}