logBegin("external script");

const script = document.createElement("script");
script.innerHTML = "log('inline script appended by external script')";
document.head.appendChild(script);

const exScript = document.createElement("script");
exScript.src = "/public/scripts/dom-content-loaded-external-dynamic.js";
document.head.appendChild(exScript)

logEnd("external script end")