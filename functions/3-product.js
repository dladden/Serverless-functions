//refer to the ../examples/3-aritable/product.js
//In this function we first get the id to collect the data and if id is not provided by airtable upon the request
//we send response that id was not sent!

require("dotenv").config();
const Airtable = require("airtable-node");
//using air table
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appYTk17DlQj5jWth")
  .table("products");

//Using the "event" object
exports.handler = async (event, context, cb) => {
  //event log shows information about the object
  //   console.log(event);
  //   console.log(context);
  const { id } = event.queryStringParameters; //query the string parameters (object always exists) but checking the id!
  if (id) {
    try {
      const product = await airtable.retrieve(id); //awaiting response from airtable with id
      // console.log(product);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id "${id}" was found`,
        };
      }
      return {
        statusCode: 200,
        //(not that the final data is not destructured and raw if the id checks-out)
        body: JSON.stringify(product), //if id exists this is the out put
      };
    } catch (error) {
      return {
        statusCode: 404,
        body: `Error, no product with id "${id}" was found`,
      };
    }
  }

  return {
    statusCode: 400,
    body: "Product id is not provided, dude!",
    // body: JSON.stringify(person),
  };
};
