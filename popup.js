const btn = document.getElementById("clickBtn");

btn.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                task: "yellowHighlighter"
            },
            function (response) {
                console.log(response.status);
            });
    })
})