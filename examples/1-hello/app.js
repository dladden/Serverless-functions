//This app pulls the function created from netlify server which we generated in function folder
//You can see that the data is right away destructured with {data}
// const { default: axios } = require("axios");

const result = document.querySelector(".result"); //selecting result

const fetchData = async () => {
  try {
    axios;
    const { data } = await axios.get("/api/1-hello"); //data is destructured and pulled from function
    // console.log(data);
    result.textContent = data;
  } catch (error) {
    // console.log(error.response.data);
    result.textContent = error.response.data;
  }
};

fetchData();
