console.log("Chrome extension ready to go!");

chrome.runtime.onMessage.addListener((request) => {
    // checking if popup button has been clicked
    if (request.task) {
        highlight(request.task);
    }
});

/*
* The below (uncommented) functions were sourced from https://stackoverflow.com/a/3224513
* Author: Tim Down
* How they work:
*   - Essentially the below highlight() and makeEditableAndHighlight() functions 
*     use the execCommand() which allows us to manipulate any region of the 
*     document when it is in designMode (including selections that span 
*     across multiple elements/nodes).
* 
* Another potential solution could be:

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

* However the issue with the code above is that it will only highlight
* elements within the same node, and if they are not in the same node 
* it will simply insert an empty span element.
*/

function makeEditableAndHighlight(colour) {
    let range;
    let selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt) {
        range = selection.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        selection.removeAllRanges();
        selection.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
    }
    document.designMode = "off";
}

function highlight(colour) {
    if (window.getSelection) {
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, colour)) {
                makeEditableAndHighlight(colour);
            }
        } catch (err) {
            makeEditableAndHighlight(colour)
        }
    } else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        let range = document.selection.createRange();
        range.execCommand("BackColor", false, colour);
    }
}
