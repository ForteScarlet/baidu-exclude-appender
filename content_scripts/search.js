// console.log('!' + new Date())
// const searchForm = document.getElementById('form')
// if (searchForm) {
//     const searchInput = document.getElementById('kw') // search input, name=wd
//     const searchButton = document.getElementById('su') // button
//     if (searchInput && searchButton) {
//         const newRealInput = document.createElement('input')
//         newRealInput.name = searchInput.name
//         newRealInput.type = 'hidden'
//         newRealInput.value = searchInput.value
//         searchInput.removeAttribute('name') // .name = null
//         searchInput.name = '__'
//
//
//         console.log('newRealInput: ' + newRealInput.value)
//         console.log(newRealInput)
//         console.log('searchInput: ' + searchInput.value)
//         console.log(searchInput)
//
//         searchForm.appendChild(newRealInput)
//         console.log(searchForm)
//
//         // searchInput.addEventListener('change', (event) => {
//         //     console.log("change")
//         //     console.log(event)
//         // })
//
//         searchForm.addEventListener('submit', (event) => {
//             console.log('submit')
//             console.log(event)
//             newRealInput.value = searchInput.value + ' -csdn'
//             console.log(event.submitter);
//         })
//     } else {
//         console.log('searchInput && searchButton == false')
//     }
// } else {
//     console.log('未找到 search form.')
// }
//
//
//
//
//
//
//
//
