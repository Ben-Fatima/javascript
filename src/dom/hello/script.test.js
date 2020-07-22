const path = require("path");
const script = require("./script");
const { render } = require("../../../testUtils");

test("says Hi", async () => {
  const container = await render(path.join(__dirname, "template.html"));
  script(container);

  container.querySelector("#say-hi").click();
  expect(container.querySelector("#result").innerHTML).toEqual("Hello World");
});
