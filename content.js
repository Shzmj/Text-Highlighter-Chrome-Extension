console.log("Chrome extension ready to go!");
let clicked = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.task === "yellowHighlighter") {
        let paragraphs = document.getElementsByTagName('p');
        for (p of paragraphs) {
            if (!clicked) {
                p.style['background-color'] = '#FFFF00';
            } else {
                p.style['background-color'] = 'transparent';
            }
        }
    }
    clicked = !clicked;
    const response = { status: "done" };
    sendResponse(response);
});
