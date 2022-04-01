console.log("baidu!")

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded!")
})

chrome.runtime.onMessage.addListener(() => {
    console.log("On Message")
});
