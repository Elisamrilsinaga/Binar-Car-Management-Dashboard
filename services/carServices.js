const {
   createdata,
   findAlldata,
   deletedata,
   findIddata,
   updatedata,
   filterdata,
 } = require("./dbServices");


 // halaman awal
const pageindex = (req, res) => {
   const cars = findAlldata();
   cars.then(function (result) {
     res.render("index", {
       layout: "index",
       title: "Car Management Dashboar Elisamril Sinaga",
       cars: result,
     });
   });
 };
 
// halaman add
const pageadd = (req, res) => {
   res.render("add", {
     layout: "layouts/main-layout",
     title: "Add Car",
   });
 };
 
 // halaman update
 const pageupdate = (req, res) => {
   const car = findIddata(req.params.id);
   car.then(function (result) {
     res.render("update", {
       layout: "layouts/main-layout",
       title: "Edit Car",
       car: result,
     });
   });
 };
 
 // menambahkan data
 const addDT = (req, res) => {
   createdata(req.body);
   setTimeout(pindah, 2000);
 
   function pindah() {
     res.status(201).redirect("/");
   }
 };
 
 // delete data
 const deleteDT = (req, res) => {
   deletedata(req.params.id);
   setTimeout(pindah2, 2000);
   function pindah2() {
     res.status(201).redirect("/");
   }
 };
 
 // update data
 const updateDT = (req, res) => {
   updatedata(req.body);
   setTimeout(pindah3, 2000);
   function pindah3() {
     res.status(201).redirect("/");
   }
 };
 
 // filter data
 const filterDT = (req, res) => {
   const cars = filterdata(req.params.type);
   cars.then(function (result) {
     res.render("index", {
       layout: "layouts/main-layout",
       title: "Car Management Dashboar Elisamril Sinaga",
       cars: result,
     });
   });
 };
 
 module.exports = {
   pageindex,
   pageadd,
   pageupdate,
   addDT,
   deleteDT,
   updateDT,
   filterDT,
 };