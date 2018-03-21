browser.browserAction.onClicked.addListener(function(tab) {
    if (!tab.pinned) {
        browser.tabs.remove(tab.id);
    }
})
