const products = [
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo sơ mi nam trắng", price: "249.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo hoodie đen", price: "459.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo nỉ có mũ", price: "329.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo sơ mi nam trắng", price: "249.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo hoodie đen", price: "459.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo thun nam tay ngắn", price: "199.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo khoác nam thể thao", price: "399.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Quần jeans nam slim", price: "299.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo sơ mi nam trắng", price: "249.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
    { name: "Áo hoodie đen", price: "459.000đ", image: "https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074" },
];

const PRODUCTS_PER_LOAD = 8;
let currentIndex = 0;

function renderProducts() {
    const list = document.getElementById("product-list");
    if (!list) return;

    const nextIndex = Math.min(currentIndex + PRODUCTS_PER_LOAD, products.length);

    for (let i = currentIndex; i < nextIndex; i++) {
        const p = products[i];
        const col = document.createElement("div");
        col.className = "col-6 col-md-3 mb-4";

        col.innerHTML = `
            <div class="product-card text-center border rounded p-2 h-100" data-index="${i}" style="cursor: pointer;">
                <img src="${p.image}" alt="${p.name}" class="img-fluid product-image mb-2" style="height: 220px; object-fit: cover;">
                <div class="fw-bold text-dark">${p.name}</div>
                <div class="text-danger">${p.price}</div>
            </div>
        `;

        // Bắt sự kiện click để chuyển qua trang chi tiết
        col.querySelector(".product-card").addEventListener("click", () => {
            localStorage.setItem("selectedProductIndex", i);
            window.location.href = "../Products/ProductsDetail.html";// đường dẫn trang chi tiết
        });

        list.appendChild(col);
    }

    currentIndex = nextIndex;
    if (currentIndex >= products.length) {
        const btn = document.getElementById("loadMoreBtn");
        if (btn) btn.style.display = "none";
    }
}

function loadMore() {
    renderProducts();
}


// Khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    // Nếu có danh sách sản phẩm (trang Home)
    if (document.getElementById("product-list")) {
        renderProducts();
    }

    // Nếu đang ở trang chi tiết sản phẩm
    const index = localStorage.getItem("selectedProductIndex");
    if (index !== null && document.getElementById("productName")) {
        const p = products[+index];
        document.getElementById("productName").textContent = p.name;
        document.getElementById("productPrice").textContent = `Giá: ${p.price}`;
        document.getElementById("mainImage").src = p.image;
    }
});

// Hiệu ứng ẩn/hiện topbar khi cuộn
let lastScrollTop = 0;
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Cuộn xuống
        header.style.transform = "translateY(-100%)";
    } else {
        // Cuộn lên
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

