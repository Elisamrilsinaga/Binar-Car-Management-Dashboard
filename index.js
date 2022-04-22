const express = require("express");
const app = express();
const bp = require("body-parser");
const {
  pageadd,
  pageindex,
  pageupdate,
  addDT,
  deleteDT,
  updateDT,
  filterDT,
} = require("./services/carServices");


// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine
app.set('view engine', 'ejs')

// render file private
app.use(express.static("public"));


app.get("/", pageindex);
app.get("/add", pageadd);
app.get("/update/:id", pageupdate);
app.post("/add", addDT);
app.get("/delete/:id", deleteDT);
app.post("/update", updateDT);
app.get("/filter/:type", filterDT);

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
})
