chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({ id: "DLCSV", title: "Download table as CSV", type: "normal", contexts: ["page"]});
});
chrome.contextMenus.onClicked.addListener((item, tab) => {
    "use strict";
    if(item.menuItemId == "DLCSV"){
        chrome.tabs.executeScript(tab.id, {file: "downloadcsv.js", allFrames:true});
    }
});
// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
      file: 'downloadDocs.js'
    });
  });
  