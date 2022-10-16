//Just 6 lines of code and:
//http://localhost:8888/.netlify/functions/1-hello
const person = { name: "Deni" };

exports.handler = async (event, context, cb) => {
  //event log shows information about the object in terminal
  //   console.log(event);
  //   console.log(context);
  return {
    statusCode: 200,
    body: "First Function Example (:",
    // body: JSON.stringify(person),
  };
};

/*
exports.handler = async (event, context, cb) => {
  cb(null, {
    statusCode: 200,
    body: "First Function Example using a Call Back",
  });
};
*/

//This is Node Ecosystem. So syntax is exports.handler (using handler function) and then what is being exported.
//async used for awaiting synchronous response it looks for a return in parameters event, context, and callback (cb)
//event is used to pass info about the request
//context is where the function is running
//statusCode: tells if the function (200 is success)

//Checking out event: reload and invoke the function first
