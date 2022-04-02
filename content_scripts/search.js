

const searchForm = document.getElementById('form')
if (searchForm) {
    const searchInput = document.getElementById('kw') // search input, name=wd
    if (searchInput) {
        searchForm.addEventListener('submit', (event) => {
            chrome.storage
            console.log('submit')
            console.log(event)
            searchInput.value = resetSearch(searchInput, )
            console.log(event.submitter);
        })
    } else {
        console.log('searchInput && searchButton == false')
    }
} else {
    console.log('未找到 search form.')
}








