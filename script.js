// DỮ LIỆU LAPTOP (Đã bổ sung thuộc tính brand để lọc)
const laptops = [
  // --- LAPTOP GAMING ---
  {
    id: 1,
    name: "Acer Nitro 5",
    brand: "Acer",
    category: "gaming",
    image:
      "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Acer+Nitro+5",
    pros: ["Thiết kế hầm hố", "Tản nhiệt 2 quạt mát mẻ", "Dễ dàng nâng cấp"],
    cons: ["Quạt tản nhiệt kêu to", "Trọng lượng máy khá nặng"],
    warranty: "Bảo hành VIP 3S1: Đổi mới nếu bảo hành quá 3 ngày.",
    configs: [
      { name: "Core i5 11400H | GTX 1650 | 8GB", price: "15.990.000 VNĐ" },
      { name: "Core i5 12500H | RTX 3050 | 16GB", price: "18.490.000 VNĐ" },
    ],
  },
  {
    id: 2,
    name: "HP Victus 15",
    brand: "HP",
    category: "gaming",
    image:
      "https://via.placeholder.com/300x200/2c3e50/ffffff?text=HP+Victus+15",
    pros: ["Thiết kế thanh lịch", "Màn hình 144Hz", "Bàn phím gõ nảy"],
    cons: ["Bản lề hơi rung lắc", "Chỉ có 1 khe cắm SSD"],
    warranty: "Bảo hành chính hãng 12 tháng HP toàn quốc.",
    configs: [
      { name: "Ryzen 5 5600H | GTX 1650 | 8GB", price: "15.500.000 VNĐ" },
      { name: "Core i5 12450H | RTX 3050 | 16GB", price: "17.800.000 VNĐ" },
    ],
  },
  {
    id: 3,
    name: "Asus TUF Gaming F15",
    brand: "Asus",
    category: "gaming",
    image:
      "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Asus+TUF+F15",
    pros: ["Độ bền chuẩn quân đội", "Pin lớn", "Thiết kế mặt lưng kim loại"],
    cons: ["Màu màn hình ở mức cơ bản", "Hơi ấm khi chơi lâu"],
    warranty: "Bảo hành quốc tế 24 tháng ASUS.",
    configs: [
      { name: "Core i5 11400H | RTX 2050 | 8GB", price: "16.200.000 VNĐ" },
      { name: "Core i7 12700H | RTX 3050 | 16GB", price: "19.990.000 VNĐ" },
    ],
  },
  {
    id: 4,
    name: "Lenovo LOQ 15",
    brand: "Lenovo",
    category: "gaming",
    image: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Lenovo+LOQ",
    pros: [
      "Tản nhiệt cao cấp",
      "Bàn phím cực kỳ sướng",
      "Đa dạng cổng kết nối",
    ],
    cons: ["Củ sạc to và nặng", "Giá nhỉnh hơn đối thủ"],
    warranty: "Bảo hành 24 tháng Lenovo Premium Care.",
    configs: [
      { name: "Ryzen 5 7640HS | RTX 3050 | 8GB", price: "17.500.000 VNĐ" },
      { name: "Core i5 13420H | RTX 4050 | 16GB", price: "21.000.000 VNĐ" },
    ],
  },
  {
    id: 5,
    name: "Dell Alienware m15",
    brand: "Dell",
    category: "gaming",
    image:
      "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Dell+Alienware",
    pros: ["Thiết kế phi thuyền", "LED RGB AlienFX", "Hiệu năng tối đa"],
    cons: ["Giá cực kỳ đắt đỏ", "Rất nặng"],
    warranty: "Bảo hành tận nơi 12 tháng Premium Support.",
    configs: [
      { name: "Core i7 12700H | RTX 3060 | 16GB", price: "35.990.000 VNĐ" },
      { name: "Core i9 13900HX | RTX 4080 | 32GB", price: "79.000.000 VNĐ" },
    ],
  },

  // --- LAPTOP MỎNG NHẸ VĂN PHÒNG ---
  {
    id: 6,
    name: "Asus Vivobook 15 OLED",
    brand: "Asus",
    category: "thin-light",
    image:
      "https://via.placeholder.com/300x200/3498db/ffffff?text=Asus+Vivobook",
    pros: ["Màn hình OLED rực rỡ", "Thiết kế mỏng nhẹ", "Pin trâu"],
    cons: ["Hàn chết RAM", "Vỏ nhựa dễ bám vân tay"],
    warranty: "Bảo hành quốc tế 24 tháng ASUS.",
    configs: [
      { name: "Core i3 | 8GB RAM | 512GB SSD", price: "13.500.000 VNĐ" },
      { name: "Core i5 | 16GB RAM | 512GB SSD", price: "16.990.000 VNĐ" },
    ],
  },
  {
    id: 7,
    name: "Lenovo ThinkBook 14",
    brand: "Lenovo",
    category: "thin-light",
    image:
      "https://via.placeholder.com/300x200/3498db/ffffff?text=Lenovo+ThinkBook",
    pros: [
      "Vỏ nhôm cao cấp",
      "Bàn phím chống tràn, gõ cực êm",
      "Đầy đủ cổng cắm",
    ],
    cons: ["Thiết kế hơi nghiêm túc", "Chất lượng loa hơi bé"],
    warranty: "Bảo hành 24 tháng Lenovo Premier Support.",
    configs: [
      { name: "Core i5 | 8GB RAM | 256GB SSD", price: "14.200.000 VNĐ" },
      { name: "Core i5 | 16GB RAM | 512GB SSD", price: "15.800.000 VNĐ" },
    ],
  },
];

let currentSelectedLaptop = null;

// HÀM HIỂN THỊ SẢN PHẨM RA MÀN HÌNH
function renderProducts(dataToRender) {
  const gamingContainer = document.getElementById("gaming-container");
  const officeContainer = document.getElementById("office-container");
  const gamingSection = document.getElementById("gaming-section");
  const officeSection = document.getElementById("office-section");

  // Xóa trắng trước khi in
  gamingContainer.innerHTML = "";
  officeContainer.innerHTML = "";
  gamingSection.style.display = "none";
  officeSection.style.display = "none";

  let hasGaming = false;
  let hasOffice = false;

  dataToRender.forEach((laptop) => {
    const defaultPrice = laptop.configs[0].price;
    const defaultSpecs = laptop.configs[0].name;

    const productHTML = `
            <div class="product-card">
                <img src="${laptop.image}" alt="${laptop.name}">
                <h3>${laptop.name}</h3>
                <p style="color: #666; font-size: 0.9rem; margin: 10px 0;">${defaultSpecs}</p>
                <p class="price">${defaultPrice}</p>
                <button class="btn-detail" onclick="openModal(${laptop.id})">Tùy Chọn & Chi Tiết</button>
            </div>
        `;

    if (laptop.category === "gaming") {
      gamingContainer.innerHTML += productHTML;
      gamingSection.style.display = "block";
      hasGaming = true;
    } else if (laptop.category === "thin-light") {
      officeContainer.innerHTML += productHTML;
      officeSection.style.display = "block";
      hasOffice = true;
    }
  });

  // Hiển thị thông báo nếu lọc không ra máy nào
  if (!hasGaming && !hasOffice) {
    gamingContainer.innerHTML =
      '<p style="text-align:center; color:red; grid-column: 1 / -1; font-weight: bold;">Không tìm thấy laptop phù hợp với tiêu chí của bạn!</p>';
    gamingSection.style.display = "block";
  }
}

// HÀM LỌC SẢN PHẨM
function filterProducts() {
  const selectedBrand = document.getElementById("filter-brand").value;
  const selectedCategory = document.getElementById("filter-category").value;

  const filteredLaptops = laptops.filter((laptop) => {
    const matchBrand =
      selectedBrand === "all" || laptop.brand === selectedBrand;
    const matchCategory =
      selectedCategory === "all" || laptop.category === selectedCategory;
    return matchBrand && matchCategory;
  });

  renderProducts(filteredLaptops);
}

// HÀM MỞ HỘP THOẠI MODAL
function openModal(id) {
  currentSelectedLaptop = laptops.find((item) => item.id === id);

  document.getElementById("modal-title").innerText = currentSelectedLaptop.name;
  document.getElementById("modal-warranty").innerText =
    currentSelectedLaptop.warranty;

  document.getElementById("modal-pros").innerHTML = currentSelectedLaptop.pros
    .map((pro) => `<li>${pro}</li>`)
    .join("");
  document.getElementById("modal-cons").innerHTML = currentSelectedLaptop.cons
    .map((con) => `<li>${con}</li>`)
    .join("");

  const configSelect = document.getElementById("config-select");
  configSelect.innerHTML = currentSelectedLaptop.configs
    .map((config, index) => `<option value="${index}">${config.name}</option>`)
    .join("");

  updatePrice();
  document.getElementById("product-modal").style.display = "block";
}

function updatePrice() {
  const selectedIndex = document.getElementById("config-select").value;
  document.getElementById("modal-price").innerText =
    currentSelectedLaptop.configs[selectedIndex].price;
}

// CÁC SỰ KIỆN CHẠY KHI TRANG ĐÃ TẢI XONG
document.addEventListener("DOMContentLoaded", function () {
  // In toàn bộ sản phẩm lúc khởi tạo
  renderProducts(laptops);

  // Xử lý Menu trên Mobile
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Đóng Modal
  const modal = document.getElementById("product-modal");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };
});
