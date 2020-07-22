function main(container) {
  const btn = container.querySelector("#say-hi");
  const div = container.querySelector("#result");
  document.getElementById("say-hi").addEventListener("click",hello)
  function hello() {
    document.getElementById("result").innerHTML = "Hello"
  }
}

module.exports = main;
