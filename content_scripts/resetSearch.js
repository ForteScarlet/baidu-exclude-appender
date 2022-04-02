function resetSearch(search, attributes) {
    if (attributes.length === 0) {
        return search
    }


    const needAppendAttributes = {}
    for (const attribute of attributes) {
        needAppendAttributes[attribute] = attribute
    }


    const splits = search.split(/ +/).reverse()

    let isInSearchValue = false
    let searchValue = ''
    for (const splitValue of splits) {
        if (isInSearchValue) {
            searchValue += ' ' + splitValue
        } else {
            if (!splitValue.startsWith('-')) {
                searchValue = splitValue
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
    for (const value of needAppendAttributesKeys) {
        searchValue += ' -' + value
    }

    return searchValue
}