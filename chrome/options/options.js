const testExcludes = [{
    id: 'csbn', enable: true
}, {
    id: 'dilibili', enable: false
}]

$(document).ready(() => {
    loadExcludes(excludeManage)
})

function excludeManage(excludes) {
    // 搜索预览事件绑定
    searchView(excludes)

    // 添加事件绑定
    addExclude(excludes)

    // 列表数据绑定
    excludeTableBody(excludes)
}


//region 搜索预览
/**
 * 搜索预览事件绑定
 */
function searchView(excludes) {
    setSearchView(excludes)
    $('#searchViewValue').bind('input', () => {
        setSearchView(excludes)
    })
}

function setSearchView(excludes) {
    const val = $('#searchViewValue').val()
    $('#searchView').val(getSearchView(excludes, val))
}

function getSearchView(excludes, value) {
    const needExcludes = excludes.filter((it) => {
        return it.enable
    })
        .map((it) => {
            return it.id
        })
    return resetSearch(value, needExcludes)
}
//endregion

function addExclude(excludes) {
    $('#add-btn').click(() => {
        const val = $('#add-value').val()
        if (val) {
            for (let exclude of excludes) {
                if (exclude.id === val) {
                    return
                }
            }
            excludes.push({ id: val, enable: true })
            saveExcludes(excludes)
            setSearchView(excludes)
            excludeTableBody(excludes)
        }
    })
}




function excludeTableBody(excludes) {
    let body = $('#excludeTableBody')
    body.html('')
    let index = 0
    for (let exclude of excludes) {
        const currIndex = index++
        const thIndex = $('<th></th>').text(currIndex)
        const tdExcludeValue = $('<td></td>')
        const codeValue = $('<code></code>').text(exclude.id)
        tdExcludeValue.append(codeValue)

        let tdEnabled = $('<td></td>')
        if (exclude.enable) {
            tdEnabled.append($('<span class="label label-success">启用中</span>'))
        } else {
            tdEnabled.append($('<span class="label label-danger">已停用</span>'))
        }

        const tdOptions = $('<td></td>')
        const deleteOption = $('<span><a href="javascript:void(0)">删除</a></span>')
        deleteOption.click(() => {
            deleteExclude(excludes, currIndex)
        })

        tdOptions.append(deleteOption)
        tdOptions.append(' | ')
        if (exclude.enable) {
            const doDisableLink = $('<span><a href="javascript:void(0)">停用</a></span>')
            doDisableLink.click(() => {
                changeEnabled(excludes, currIndex, false)
            })
            tdOptions.append(doDisableLink)
        } else {
            const doEnableLink = $('<span><a href="javascript:void(0)">启用</a></span>')
            doEnableLink.click(() => {
                changeEnabled(excludes, currIndex, true)
            })
            tdOptions.append(doEnableLink)
        }
        const tr = getTr(exclude.enable ? 'success' : 'danger', currIndex, [thIndex, tdExcludeValue, tdEnabled, tdOptions])
        body.append(tr)
    }
}

/**
 * 得到一个tr.
 * @param classValue
 * @param index
 * @param tds
 */
function getTr(classValue, index, tds) {
    const tr = $("<tr></tr>")
    tr.attr('class', classValue)
    for (let td of tds) {
        tr.append(td)
    }
    return tr
}


function deleteExclude(excludes, index) {
    excludes.splice(index, 1)
    saveExcludes(excludes)
    setSearchView(excludes)
    excludeTableBody(excludes)
}

function changeEnabled(excludes, index, value) {
    excludes[index].enable = value
    saveExcludes(excludes)
    setSearchView(excludes)
    excludeTableBody(excludes)

}


function saveExcludes(excludes) {
    chrome.storage.sync.set({ excludes: excludes });
}

function loadExcludes(useExcludes) {
    // test only
    // useExcludes(testExcludes)
    return chrome.storage.sync.get(['excludes'], (res) => {
        useExcludes(res.excludes || [])
    });
}