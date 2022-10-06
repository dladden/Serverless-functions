//This sereverless function takes the aritable-node capability to authenticate access to the airtable data which was created
//in airtable.com. This is done with the base base key and API key. However to hide the API as a goo practice the ENV is used
//which is then omitted from the push

//The try catch destructires the data and interates through it with map function and inserted as strings JSON.stringify(products)
//refer to the ../examples/3-aritable/app.js

require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appYTk17DlQj5jWth")
  .table("products");

exports.handler = async (event, context, cb) => {
  //event log shows information about the object
  //   console.log(event);
  //   console.log(context);
  try {
    const { records } = await airtable.list();
    // console.log(data);
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return { id, name, url, price };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
