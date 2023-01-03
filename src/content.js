console.log("Chrome extension ready to go!");
let clicked = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // checking if popup button has been clicked
    if (request.task === "yellowHighlighter") {
        // getting the users selection
        let selection = window.getSelection();

        // creating a new text node to replace the original users selection
        let highlightedText = document.createElement("span");
        highlightedText.style['background-color'] = '#FFFF00';
        highlightedText.style.color = "black";

        // checking that characters/text have been selected
        if (selection.rangeCount) {
            let range = selection.getRangeAt(0).cloneRange();
            range.surroundContents(highlightedText);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    clicked = !clicked;
    const response = { status: "done" };
    sendResponse(response);
});