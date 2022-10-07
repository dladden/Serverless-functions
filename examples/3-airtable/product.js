const result = document.querySelector(".result");

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading..</h2>`;
  //checking to see that our
  //   console.log("single product");
  try {
    // const id = "?id=1";
    const id = window.location.search; //getting the id of data from the browser
    //console logging non-existant id as a test
    // console.log(id);
    //next line we grab the id and send the request for the data once again using the axios.get
    // const data = await axios.get(`/api/3-product${id}`);
    //this will show the raw data:
    // console.log(data);
    // const {
    //   data: { fields },
    // } = await axios.get(`/api/3-product${id}`);
    const {
      data: { fields },
    } = await axios.get(`/api/3-airtable-product-comb${id}`);
    const { name, desc, image, price } = fields;
    result.innerHTML = `
    <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();
