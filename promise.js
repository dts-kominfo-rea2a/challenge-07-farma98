const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  const hasilTheaterIXX = await promiseTheaterIXX();
  const hasilTheaterVGC = await promiseTheaterVGC();
  const hasilSetelahMenonton = [...hasilTheaterIXX, ...hasilTheaterVGC];

  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    const hasilSetelahMenontonDariTheater = hasilSetelahMenonton.filter(
      (item) => item.hasil === hasil
    );

    return resolve(hasilSetelahMenontonDariTheater.length);
  });
};

module.exports = {
  promiseOutput,
};
