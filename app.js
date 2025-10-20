
const APP_NAME = "Merge Styles Lab";
const VERSION = "1.0.0"; 


function renderHeader() {

  console.log("Header: Hello from feature A");
}

function renderBody() {
  console.log("Body: Here we test CI + merge strategies.");
}

function renderFooter() {
  console.log("Footer: Thank you for collaborating!");
}

// Boot
function main() {
  renderHeader();
  renderBody();
  renderFooter();
}

main();
