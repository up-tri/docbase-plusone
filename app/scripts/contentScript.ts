// Enable chromereload by uncommenting this line:
// import "chromereload/devonly";

chrome.runtime.onMessage.addListener((msg) => {
  const editorClassName = ".CodeMirror";

  if (msg.text === "report_back") {
    if (
      document.getElementById("dpe_linktag") !== null &&
      document.getElementById("dpe_styletag") !== null
    ) {
      return "already_appended";
    }

    const linkTag = document.createElement("link");
    linkTag.id = "dpe_linktag";
    linkTag.href =
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;700&display=swap";
    linkTag.rel = "stylesheet";

    const styleTag = document.createElement("style");
    styleTag.id = "dpe_styletag";
    styleTag.innerText = `${editorClassName} {font-family: 'Roboto Mono', monospace;}`;

    document.body.appendChild(linkTag);
    document.body.appendChild(styleTag);
    console.log(
      "Docbase Powerful Editor",
      "フォントの置き換えが完了しました。"
    );
    return "complete";
  }
  return "not_run";
});
