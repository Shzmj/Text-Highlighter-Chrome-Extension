const btnYellow = document.getElementById("clickBtnYellow");
const btnPink = document.getElementById("clickBtnPink");
const btnGreen = document.getElementById("clickBtnGreen");
const btnBlue = document.getElementById("clickBtnBlue");
const btnClear = document.getElementById("clickBtnClear");

btnYellow.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "yellow"
            },
        );
    })
})

btnPink.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "#FA3BF0"
            },
        );
    })
})

btnGreen.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "#5DE23C"
            },
        );
    })
})

btnBlue.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "#30C5FF"
            },
        );
    })
})

btnClear.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "transparent"
            },
        );
    })
})