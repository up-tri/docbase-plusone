const docbaseUrlRegex = /^https?:\/\/.*\.docbase\.io\/posts\/.*/;

chrome.webNavigation.onCompleted.addListener(function (ev) {
  const tabUrl = ev.url;
  const tabId = ev.tabId;
  console.log(tabUrl, docbaseUrlRegex.test(tabUrl));
  if (!docbaseUrlRegex.test(tabUrl)) return;

  chrome.tabs.sendMessage(tabId, { text: "report_back" });
});
