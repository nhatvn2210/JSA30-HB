// DOM
const productContainer = document.querySelector(".product-container");
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
function renderProductList() {
    let htmls = "";

    for (let i in productList) {
        htmls += ` 
        <div class = "product-item">
            <img src = ${productList[i].image}>
            <h3>${productList[i].name}</h3>
        </div>
        `;
    }

    productContainer.innerHTML = htmls;
}
// Chương trình chính
renderProductList();