const HIGHLIGHT_GET_PARAM = 'highlight'

function removeHighlightURLParam(anchor) {
    const params = new URLSearchParams(anchor.search)
    if (params.has(HIGHLIGHT_GET_PARAM)) {
        params.delete(HIGHLIGHT_GET_PARAM)
        anchor.search = params.toString()
    }
}

const container = document.getElementById('search-results')
const observer = new MutationObserver(function (mutationList) {
    mutationList.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
            if (node.matches('li') && node.firstElementChild.matches('a')) {
                removeHighlightURLParam(node.firstElementChild)
            } else {
                console.debug("Not an anchor tag", node)
            }
        })
    })
});
observer.observe(container, {childList: true, subtree: true});
