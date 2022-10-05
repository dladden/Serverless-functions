//refer to ./assets/data.js
//Instead of housing the raw data in the function file we can store it in a more acessible file at our choosing
//and export it out.

const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
