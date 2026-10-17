// ============================================================
// Agent Use Cases - 前端逻辑（搜索 + 分类筛选 + 邮件 + 提交）
// 纯前端，无需后端。数据来自 data.js。
// ============================================================

(function () {
  const data = window.AGENT_USE_CASES || [];
  const grid = document.getElementById("grid");
  const searchInput = document.getElementById("search");
  const chips = document.getElementById("chips");
  const countEl = document.getElementById("count");
  let activeCategory = "All";

  function categoryList() {
    const set = new Set(data.map(function (d) { return d.category; }));
    return ["All"].concat(Array.from(set));
  }

  function renderChips() {
    chips.innerHTML = "";
    categoryList().forEach(function (cat) {
      const btn = document.createElement("button");
      btn.className = "chip" + (cat === activeCategory ? " active" : "");
      btn.textContent = cat;
      btn.onclick = function () {
        activeCategory = cat;
        renderChips();
        render();
      };
      chips.appendChild(btn);
    });
  }

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = data.filter(function (d) {
      const matchCat = activeCategory === "All" || d.category === activeCategory;
      const hay = (d.title + " " + d.summary + " " + d.tools.join(" ") + " " + d.tags.join(" ")).toLowerCase();
      const matchQ = !q || hay.indexOf(q) !== -1;
      return matchCat && matchQ;
    });

    grid.innerHTML = "";
    countEl.textContent = filtered.length + (filtered.length === 1 ? " use case" : " use cases");

    if (!filtered.length) {
      grid.innerHTML = '<p class="empty">No use cases found. Try another keyword.</p>';
      return;
    }

    filtered.forEach(function (d) {
      const card = document.createElement("article");
      card.className = "card";
      const tools = d.tools.map(function (t) {
        return '<span class="tool">' + t + "</span>";
      }).join("");
      card.innerHTML =
        '<span class="badge">' + d.category + "</span>" +
        '<h3><a href="' + d.url + '" target="_blank" rel="noopener">' + d.title + "</a></h3>" +
        "<p>" + d.summary + "</p>" +
        '<div class="tools">' + tools + "</div>";
      grid.appendChild(card);
    });
  }

  if (searchInput) searchInput.addEventListener("input", render);

  // 邮件订阅：接入 Beehiiv 前先本地提示，避免丢数据
  const nlForm = document.getElementById("newsletter");
  if (nlForm) {
    nlForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      if (email) {
        document.getElementById("nl-msg").textContent =
          "Thanks! Connect Beehiiv to start collecting emails automatically.";
        nlForm.reset();
      }
    });
  }

  renderChips();
  render();
})();
