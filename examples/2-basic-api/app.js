//Acessing the array of products by selecting result. Then
const result = document.querySelector(".result");

const fetchData = async () => {
  //   console.log("test");
  try {
    const { data } = await axios.get("/api/2-basic-api"); //destructuring the data after pulling it
    //storing data in the product and using the map to iterate through the array
    const products = data
      .map((product) => {
        //   console.log(product);
        const {
          image: { url },
          name,
          price,
        } = product;
        //the part above shows the array of strings and the img as object in form of url
        //next is the return as html format using template literals
        return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>`;
      })
      .join(""); //turing array into strings
    result.innerHTML = products; //inserting the distructured data into the html
  } catch (error) {
    result.innerHTML = `<h2>Error</h2>`;
  }
};

fetchData();
