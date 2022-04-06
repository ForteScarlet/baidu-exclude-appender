
const searchForm = document.getElementById('form')
if (searchForm) {
    const searchInput = document.getElementById('kw') // search input, name=wd
    if (searchInput) {
        searchForm.addEventListener('submit', () => {
            chrome.storage.sync.get(['excludes'], (res) => {
                searchInput.value = resetSearch(searchInput.value, res.excludes.map((it) => it.id) || [])
                searchInput.blur()
            })
        })
    }
    // else {
    //     console.log('searchInput && searchButton == false')
    // }
}
// else {
//     console.log('未找到 search form.')
// }








