const { Cars } = require("../models");

// mencari semua data
const findAlldata = async () => {
  const data = await Cars.findAll();
  console.log(data);
  return data;
};

// mencari data berdasarkan id
const findIddata = async (id) => {
  const car = await Cars.findOne({
    where: { id: id },
  });
  let newcar = JSON.stringify(car, null, 2);
  newcar = JSON.parse(newcar);
  return newcar;
};

// membuat data baru
const createdata = (data) => {
  Cars
    .create({
      name: data.name,
      type: data.type,
      image: data.image,
      price: data.price,
    })
    .then((cars) => {
      console.log(cars);
    });
};

// menghapus data berdasarkan id
const deletedata = (id) => {
  Cars.destroy({
    where: {
      id: id,
    },
  });
};

const updatedata = (data) => {
  let newtype = "";
  if (data.type == "Choose Type") {
    newtype = data.oldtype;
  } else {
    newtype = data.type;
  }

  const query = {
    where: { id: data.id },
  };

  Cars.update(
    {
      name: data.name,
      type: newtype,
      image: data.image,
      price: data.price,
    },
    query
  );
};

const filterdata = async (type) => {
  const data = await Cars.findAll();
  const newcars = data.filter((row) => row.type == type);
  return newcars;
};

module.exports = {
  createdata,
  findAlldata,
  deletedata,
  updatedata,
  findIddata,
  filterdata,
};
