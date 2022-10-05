//refer to ./assets/data.js
//Instead of housing the raw data in the function file we can store it in a more acessible file at our choosing
//and export it out.

//Additionally, you can create your own header which allows you to change information about the status of the request
//In this instance we set access to all '*' with the 'Access-Control-Allow-Origin':'*',

const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  return {
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
