function main(container) {
  const btn = container.querySelector("#say-hi");
  const div = container.querySelector("#result");
  btn.addEventListener("click",hello)
  function hello() {
    div.innerHTML = "Hello World"
  }
}

module.exports = main;
