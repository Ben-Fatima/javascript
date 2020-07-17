const { readFile } = require("fs").promises;

async function render(path) {
  const div = document.createElement("div");
  div.innerHTML = await readFile(path);
  return div;
}

module.exports = { render };
