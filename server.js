let express = require("express");
let fetch = require("node-fetch");
let { print } = require("listening-on");

let app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/yolov5_website.html");
});

app.get("/proxy", (req, res) => {
  let url = req.query.url;
  fetch(url)
    .then((res) => res.json())
    .then((json) => res.json(json))
    .catch((error) => {
      res.status(502);
      res.json({ error: String(error) });
    });
});

let port = 8100;
app.listen(port, () => {
  print(port);
});
