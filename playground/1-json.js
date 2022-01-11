const fs = require("fs");

const buffer = fs.readFileSync("1-json.json");
const dataJSON = buffer.toString();
const data = JSON.parse(dataJSON);

data.name = "shin";
data.age = "29";

fs.writeFileSync("1-json.json", JSON.stringify(data));
