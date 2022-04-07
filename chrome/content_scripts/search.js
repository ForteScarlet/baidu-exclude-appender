window.onload = doListen



function doListen() {
    const searchForm = document.getElementById('form')
    if (searchForm) {
        const searchInput = document.getElementById('kw') // search input, name=wd
        if (searchInput) {
            searchInput.addEventListener('change', () => {
                chrome.storage.sync.get(['excludes'], (res) => {
                    searchInput.value = resetSearch(searchInput.value, res.excludes.filter((it) => it.enable).map((it) => it.id) || [])
                })
            })
            console.debug('绑定change事件')
            searchForm.addEventListener('submit', () => {
                chrome.storage.sync.get(['excludes'], (res) => {
                    searchInput.value = resetSearch(searchInput.value, res.excludes.filter((it) => it.enable).map((it) => it.id) || [])
                    searchForm.submit()
                })
                return false
            })
            console.debug('绑定submit事件')
        }
    }
}





