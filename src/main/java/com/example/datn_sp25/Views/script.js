const products = [
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo sơ mi nam trắng", price: "249.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    // Thêm các sản phẩm khác nếu muốn
];

const PRODUCTS_PER_LOAD = 4;
let currentIndex = 0;

function renderProducts() {
    const list = document.getElementById("product-list");
    const nextIndex = Math.min(currentIndex + PRODUCTS_PER_LOAD, products.length);
    for (let i = currentIndex; i < nextIndex; i++) {
        const p = products[i];
        const col = document.createElement("div");
        col.className = "col-md-3";

        col.innerHTML = `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}" />
                <div class="product-name">${p.name}</div>
                <div class="product-price">${p.price}</div>
            </div>
        `;
        list.appendChild(col);
    }

    currentIndex = nextIndex;
    if (currentIndex >= products.length) {
        document.getElementById("loadMoreBtn").style.display = "none";
    }
}

function loadMore() {
    renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});
