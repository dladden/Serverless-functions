//data is inserted into the page
const result = document.querySelector(".result");

const fetchProducts = async () => {
  try {
    //example with two serverless functions airtable.js and product.js
    // const { data } = await axios.get("/api/3-airtable");
    //example with one serverless function airtable-product-comb.js
    const { data } = await axios.get("/api/3-airtable-product-comb");
    // console.log(data);
    //every item is an object and it is used as a link since we are taking it to the product.html page
    //This is done with Query String Parameter "?"
    const products = data
      .map((product) => {
        const { id, url, name, price } = product;
        return `<a href="product.html?id=${id}" class="product">
      <img src="${url}" alt="${name}">
      <div class="info">
      <h5>${name}</h5>
       <h5 class="price">$${price}</h5>
      </div>
      </a>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = "<h4>There was an error, dawg.</h4>";
  }
};

fetchProducts();
