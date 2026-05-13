// DỮ LIỆU LAPTOP (Đã bổ sung thuộc tính brand để lọc)
const laptops = [
  // --- LAPTOP GAMING ---
  {
    id: 1,
    name: "Acer Nitro 5",
    brand: "Acer",
    category: "gaming",
    shopeeUrl: "https://shopee.vn/search?keyword=Acer+Nitro+5",
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
    shopeeUrl: "https://shopee.vn/search?keyword=HP+Victus+15",
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
    shopeeUrl: "https://shopee.vn/search?keyword=Asus+TUF+Gaming+F15",
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
    shopeeUrl: "https://shopee.vn/search?keyword=Lenovo+LOQ+15",
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
    shopeeUrl: "https://shopee.vn/search?keyword=Dell+Alienware+m15",
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
    shopeeUrl: "https://shopee.vn/search?keyword=Asus+Vivobook+15+OLED",
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
    shopeeUrl: "https://shopee.vn/search?keyword=Lenovo+ThinkBook+14",
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
  {
    id: 8,
    name: "Dell Inspiron 14 5445 ",
    brand: "Dell",
    category: "thin-light",
    shopeeUrl: "https://shopee.vn/search?keyword=Dell+Inspiron+14+5445",
    image: "https://ten-file-anh-cua-ban.jpg", // Hoặc link ảnh online
    pros: [
      "Hiệu năng cực kỳ mạnh mẽ",
      "Màn hình 2K sắc nét",
      "Mỏng nhẹ, dễ dàng mang theo",
      "Thương hiệu uy tín Dell",
    ],
    cons: [
      "Giá thành cao",
      "Máy khá dày và nặng",
      "Củ sạc đi kèm chiếm diện tích",
    ],
    warranty: "Bảo hành chính hãng 24 tháng Dell Việt Nam.",
    configs: [
      {
        name: "Core Ryzen 7 - 8840HS | 16GB| 512GB SSD|FHD",
        price: "14.890.000đ",
      },
      {
        name: "Core Ryzen 7 - 8840HS | 32GB| 512GB SSD|2K",
        price: "17.890.000đ",
      },
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

  gamingContainer.innerHTML = "";
  officeContainer.innerHTML = "";
  gamingSection.style.display = "none";
  officeSection.style.display = "none";

  let hasGaming = false;
  let hasOffice = false;

  dataToRender.forEach((laptop) => {
    const defaultPrice = laptop.configs[0].price;
    const defaultSpecs = laptop.configs[0].name;

    const shopeeBtn = laptop.shopeeUrl
      ? `<a href="${laptop.shopeeUrl}" target="_blank" rel="noopener noreferrer" class="btn-shopee">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/512px-Shopee.svg.png" alt="Shopee" style="width:18px;height:18px;vertical-align:middle;margin-right:6px;">
           Mua trên Shopee
         </a>`
      : "";

    const productHTML = `
            <div class="product-card">
                <img src="${laptop.image}" alt="${laptop.name}">
                <h3>${laptop.name}</h3>
                <p style="color: #666; font-size: 0.9rem; margin: 10px 0;">${defaultSpecs}</p>
                <p class="price">${defaultPrice}</p>
                <button class="btn-detail" onclick="openModal(${laptop.id})">Tùy Chọn & Chi Tiết</button>
                ${shopeeBtn}
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

// =================== CHATBOT ===================

const CHATBOT_SYSTEM_PROMPT = `Bạn là trợ lý tư vấn laptop thông minh của cửa hàng DTLQ Laptop. Nhiệm vụ của bạn là giúp khách hàng tìm được chiếc laptop phù hợp nhất với nhu cầu và ngân sách của họ.

Dữ liệu sản phẩm hiện có tại cửa hàng:
${JSON.stringify(laptops, null, 2)}

Hướng dẫn:
- Trả lời bằng tiếng Việt, thân thiện và chuyên nghiệp.
- Dựa vào dữ liệu sản phẩm trên để tư vấn chính xác về tên máy, giá, cấu hình, ưu/nhược điểm, bảo hành.
- Khi khách hỏi về ngân sách hoặc nhu cầu (gaming, học tập, văn phòng...), hãy gợi ý sản phẩm phù hợp từ danh sách.
- Nếu khách hỏi ngoài phạm vi sản phẩm của cửa hàng, hãy trả lời kiến thức chung về laptop rồi khéo léo hướng về sản phẩm hiện có.
- Thông tin liên hệ cửa hàng: 0384039030.
- Câu trả lời ngắn gọn, dễ hiểu, tránh quá dài dòng.
- Dùng emoji phù hợp để câu trả lời sinh động hơn.`;

let chatHistory = [];
let isChatOpen = false;
let isTyping = false;

function createChatbotUI() {
  const chatWidget = document.createElement("div");
  chatWidget.id = "chat-widget";
  chatWidget.innerHTML = `
    <button id="chat-toggle-btn" onclick="toggleChat()" title="Tư vấn laptop">
      <span id="chat-icon">💬</span>
      <span id="chat-close-icon" style="display:none">✕</span>
      <span id="chat-badge" style="display:none">1</span>
    </button>

    <div id="chat-window" style="display:none">
      <div id="chat-header">
        <div class="chat-header-info">
          <div class="chat-avatar">🤖</div>
          <div>
            <div class="chat-name">DTLQ Tư Vấn</div>
            <div class="chat-status">
              <span class="status-dot"></span> Đang hoạt động
            </div>
          </div>
        </div>
        <button class="chat-close-btn" onclick="toggleChat()">✕</button>
      </div>

      <div id="chat-messages">
        <div class="chat-message bot-message">
          <div class="message-avatar">🤖</div>
          <div class="message-bubble">
            Xin chào! Mình là trợ lý tư vấn laptop của <strong>DTLQ Laptop</strong> 👋<br><br>
            Bạn đang cần tìm laptop cho mục đích gì? Gaming, học tập hay văn phòng?
          </div>
        </div>
      </div>

      <div id="quick-replies">
        <button onclick="sendQuickReply('Laptop gaming giá dưới 20 triệu')">🎮 Gaming &lt;20tr</button>
        <button onclick="sendQuickReply('Laptop mỏng nhẹ cho sinh viên')">💼 Mỏng nhẹ SV</button>
        <button onclick="sendQuickReply('So sánh các dòng laptop')">⚖️ So sánh</button>
        <button onclick="sendQuickReply('Tư vấn theo ngân sách')">💰 Theo budget</button>
      </div>

      <div id="chat-input-area">
        <textarea
          id="chat-input"
          placeholder="Nhập câu hỏi về laptop..."
          rows="1"
          onkeydown="handleChatKey(event)"
          oninput="autoResize(this)"
        ></textarea>
        <button id="chat-send-btn" onclick="sendMessage()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(chatWidget);
}

function toggleChat() {
  isChatOpen = !isChatOpen;
  const chatWindow = document.getElementById("chat-window");
  const chatIcon = document.getElementById("chat-icon");
  const chatCloseIcon = document.getElementById("chat-close-icon");
  const badge = document.getElementById("chat-badge");

  if (isChatOpen) {
    chatWindow.style.display = "flex";
    chatIcon.style.display = "none";
    chatCloseIcon.style.display = "block";
    badge.style.display = "none";
    setTimeout(() => {
      chatWindow.classList.add("chat-open");
      document.getElementById("chat-input").focus();
    }, 10);
  } else {
    chatWindow.classList.remove("chat-open");
    setTimeout(() => {
      chatWindow.style.display = "none";
    }, 300);
    chatIcon.style.display = "block";
    chatCloseIcon.style.display = "none";
  }
}

function handleChatKey(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 120) + "px";
}

function sendQuickReply(text) {
  document.getElementById("chat-input").value = text;
  sendMessage();
  document.getElementById("quick-replies").style.display = "none";
}

function appendMessage(role, content) {
  const container = document.getElementById("chat-messages");
  const isBot = role === "bot";
  const div = document.createElement("div");
  div.className = `chat-message ${isBot ? "bot-message" : "user-message"}`;
  div.innerHTML = isBot
    ? `<div class="message-avatar">🤖</div><div class="message-bubble">${content}</div>`
    : `<div class="message-bubble">${content}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div;
}

function showTypingIndicator() {
  const container = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className = "chat-message bot-message typing-indicator-wrapper";
  div.id = "typing-indicator";
  div.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble typing-bubble">
      <span></span><span></span><span></span>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById("typing-indicator");
  if (el) el.remove();
}

async function sendMessage() {
  const input = document.getElementById("chat-input");
  const userText = input.value.trim();
  if (!userText || isTyping) return;

  input.value = "";
  input.style.height = "auto";

  appendMessage("user", userText);
  chatHistory.push({ role: "user", content: userText });

  isTyping = true;
  document.getElementById("chat-send-btn").disabled = true;
  showTypingIndicator();

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: CHATBOT_SYSTEM_PROMPT,
        messages: chatHistory,
      }),
    });

    const data = await response.json();
    const botReply =
      data.content?.[0]?.text ||
      "Xin lỗi, mình chưa hiểu câu hỏi của bạn. Bạn có thể hỏi lại không?";

    removeTypingIndicator();
    appendMessage("bot", botReply.replace(/\n/g, "<br>"));
    chatHistory.push({ role: "assistant", content: botReply });
  } catch (err) {
    removeTypingIndicator();
    appendMessage(
      "bot",
      "⚠️ Có lỗi kết nối. Vui lòng thử lại hoặc liên hệ <strong>0384039030</strong>.",
    );
  }

  isTyping = false;
  document.getElementById("chat-send-btn").disabled = false;
}

// CÁC SỰ KIỆN CHẠY KHI TRANG ĐÃ TẢI XONG
document.addEventListener("DOMContentLoaded", function () {
  renderProducts(laptops);

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

  const modal = document.getElementById("product-modal");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };

  // Khởi tạo chatbot
  createChatbotUI();

  // Hiện badge sau 3 giây để thu hút chú ý
  setTimeout(() => {
    if (!isChatOpen) {
      const badge = document.getElementById("chat-badge");
      if (badge) badge.style.display = "flex";
    }
  }, 3000);
});
