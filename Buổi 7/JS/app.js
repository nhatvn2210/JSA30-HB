// DOM
const productContainer = document.querySelector(".product-container");

const searchInput = document.querySelector("#search-input");
// Danh sách đối tượng sản phẩm
const productList = [
    {
      id: 1,
      name:'LeBron Witness 8 EP',
      price: 500,
      image: './assets/images/1.webp'
    },
    {
      id: 2,
      name: 'Nike Ultrafly',
      price: 700,
      image: './assets/images/2.webp'
    },
    {
      id: 3,
      name: 'Nike Air Zoom TR 1',
      price: 1000,
      image: './assets/images/3.webp'
    },
    {
      id: 4,
      name: 'JA 1 EP Hunger',
      price: 590,
      image: './assets/images/4.webp'
    },
    {
      id: 5,
      name: 'Nike Cortez SE',
      price: 590,
      image: './assets/images/5.webp'
    },
    {
      id: 6,
      name:'Nike Air Max 1',
      price: 1000,
      image: './assets/images/6.webp'
    },
    {
      id: 7,
      name: 'Nike Air Max 1 86 OG G',
      price: 570,
      image: './assets/images/7.webp'
    },
    {
      id: 8,
      name: 'Nike Revolution 6',
      price: 690,
      image: './assets/images/8.webp'
    },
    {
      id: 9,
      name: 'Nike Metcon 8',
      price: 750,
      image: './assets/images/9.webp'
    },
    {
      id: 10,
      name: 'Sabrina 1 Magnetic EP',
      price: 900,
      image: './assets/images/10.webp'
    },
  ]
// Hàm
// Hàm xử lí in ra sản phẩm
function renderProductList(selectedList) {
    let htmls = "";

    for (let i in selectedList) {
        htmls += ` 
        <div class = "product-item">
            <img src = ${selectedList[i].image}>
            <h3>${selectedList[i].name}</h3>
        </div>
        `;
    }

    productContainer.innerHTML = htmls;
}
// Hàm xử lí tìm kiếm sản phẩm
function searchProduct(searchString){
    let founderProduct = productList.filter( function(product) {
        return product.name.toLowerCase().includes(searchString.toLowerCase());
    });
    renderProductList(founderProduct);
}

// Chương trình chính
renderProductList(productList);

searchInput.addEventListener('input', function (event){
    searchProduct(event.target.value);
});