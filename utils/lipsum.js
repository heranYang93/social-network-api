// let wordArr = [];
// lipsum.split(" ").forEach((word) => {
//   const regex = /[A-z]+/gm;
//   wordArr.push(word.match(regex)[0]);
// });

// console.log(lipsum.length);

const randomText = function () {
  const lipsum =
    "Aliquam ac quam eget mauris euismod fringilla vitae sollicitudin quam. Ut ut euismod ipsum. Aenean vehicula eget ex ut iaculis. Aliquam erat volutpat. Phasellus pharetra tempus ipsum ut euismod. Quisque vehicula risus et erat semper fermentum. Mauris vitae vehicula diam, non dapibus mauris. Quisque vel enim at orci ultrices feugiat. Nullam imperdiet mattis consectetur. Curabitur et tellus suscipit, dapibus lorem ut, pulvinar lectus. In tortor lectus, tristique vel dapibus vitae, consequat sit amet diam.";

  const random1 = Math.floor(Math.random() * lipsum.length);
  const random2 = Math.floor(Math.random() * lipsum.length);
  return random1 > random2
    ? lipsum.slice(random2, random1)
    : lipsum.slice(random1, random2);
};

module.exports = { randomText };
