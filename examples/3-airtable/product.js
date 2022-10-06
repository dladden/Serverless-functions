const result = document.querySelector(".result");

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading..</h2>`;
  //checking to see that our
  //   console.log("single product");
  try {
    const id = "?id=1";
    // const id = window.location.search; //getting the id from the browser
    //console logging the id as a test
    // console.log(id);
    const data = await axios.get(`/api/3-product${id}`);
    console.log(data);
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();
