// Animações de apresentação sempre ativas, conforme solicitado.
// 1. CARDÁPIO — produtos, preços e categorias
const products = [
  {
    id: "classico",
    category: "burgers",
    name: "O Clássico",
    desc: "Smash de 100 g, queijo prato, picles e molho da casa no pão brioche.",
    price: 24,
    tag: "O COMEÇO DE TUDO",
  },
  {
    id: "duplo",
    category: "burgers",
    name: "O Duplo",
    desc: "Dois smash de 100 g, cheddar em dobro, picles e molho da casa.",
    price: 32,
    tag: "O DA CAPA",
  },
  {
    id: "bacon",
    category: "burgers",
    name: "Bacon & Brasa",
    desc: "Smash de 100 g, cheddar, bacon crocante, cebola e barbecue.",
    price: 31,
    tag: "PRA QUEM VAI ALÉM",
  },
  {
    id: "verde",
    category: "burgers",
    name: "O Verde",
    desc: "Burger de grão-de-bico, queijo prato, alface, tomate e maionese de ervas.",
    price: 29,
    tag: "VEGETARIANO",
  },
  {
    id: "batata",
    category: "sides",
    name: "Batata da Casa",
    desc: "Batata frita sequinha com páprica, sal e maionese da casa. Porção de 200 g.",
    price: 16,
    art: "FRITAS",
    sub: "crocantes até o fim",
  },
  {
    id: "onion",
    category: "sides",
    name: "Onion Rings",
    desc: "Oito anéis de cebola empanados, acompanhados de barbecue.",
    price: 19,
    art: "ONION",
    sub: "rings & barbecue",
  },
  {
    id: "cola",
    category: "drinks",
    name: "Refrigerante",
    desc: "Refrigerante de cola, lata de 350 ml. Bem gelado.",
    price: 7,
    art: "COLA",
    sub: "350 ml • geladinha",
  },
  {
    id: "zero",
    category: "drinks",
    name: "Refrigerante Zero",
    desc: "Refrigerante de cola sem açúcar, lata de 350 ml.",
    price: 7,
    art: "ZERO",
    sub: "350 ml • sem açúcar",
  },
  {
    id: "agua",
    category: "drinks",
    name: "Água Mineral",
    desc: "Água mineral sem gás. Garrafa de 500 ml.",
    price: 5,
    art: "ÁGUA",
    sub: "500 ml • sem gás",
  },
  {
    id: "cheddar-fries",
    category: "sides",
    name: "Batata Cheddar & Bacon",
    desc: "Batata frita com cheddar cremoso e bacon crocante. Porção de 300 g.",
    price: 25,
    icon: "fries",
  },
  {
    id: "rustica",
    category: "sides",
    name: "Batata Rústica",
    desc: "Batata com casca, alecrim e páprica. Acompanha maionese de alho. 250 g.",
    price: 20,
    icon: "fries",
  },
  {
    id: "frango",
    category: "sides",
    name: "Tiras de Frango",
    desc: "Tiras de frango empanadas e crocantes com molho barbecue. 250 g.",
    price: 28,
    icon: "bites",
  },
  {
    id: "queijo",
    category: "sides",
    name: "Palitos de Queijo",
    desc: "Seis palitos de muçarela empanados com geleia de pimenta.",
    price: 24,
    icon: "bites",
  },
  {
    id: "guarana",
    category: "drinks",
    name: "Guaraná",
    desc: "Refrigerante de guaraná, lata de 350 ml.",
    price: 7,
    icon: "can",
  },
  {
    id: "agua-gas",
    category: "drinks",
    name: "Água com Gás",
    desc: "Água mineral com gás. Garrafa de 500 ml.",
    price: 6,
    icon: "water",
  },
  {
    id: "laranja",
    category: "drinks",
    name: "Suco de Laranja",
    desc: "Suco de laranja natural, preparado na hora. Copo de 400 ml.",
    price: 12,
    icon: "drink",
  },
  {
    id: "limao",
    category: "drinks",
    name: "Limonada da Casa",
    desc: "Limão espremido, água e gelo. Copo de 400 ml.",
    price: 10,
    icon: "drink",
  },
  {
    id: "shake",
    category: "drinks",
    name: "Milk-shake de Chocolate",
    desc: "Sorvete de chocolate batido com leite e calda de chocolate. 400 ml.",
    price: 19,
    icon: "shake",
  },
  {
    id: "combo",
    category: "combo",
    name: "Combo pra Dois",
    desc: "2 Clássicos, 1 Batata da Casa e 2 refrigerantes de cola.",
    price: 79,
  },
  {
    id: "combo-solo",
    category: "combo",
    name: "Combo Clássico",
    desc: "1 Clássico + Batata da Casa de 200 g + refrigerante de cola de 350 ml.",
    price: 42,
  },
  {
    id: "combo-duplo",
    category: "combo",
    name: "Combo Duplo",
    desc: "1 Duplo + Batata da Casa de 200 g + refrigerante de cola de 350 ml.",
    price: 49,
  },
  {
    id: "combo-bacon",
    category: "combo",
    name: "Combo Bacon",
    desc: "1 Bacon & Brasa + Batata Cheddar & Bacon de 300 g + refrigerante de cola de 350 ml.",
    price: 57,
  },
];
// 2. UTILITÁRIOS E ESTADO
const money = (n) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  $ = (s) => document.querySelector(s),
  $$ = (s) => document.querySelectorAll(s);
let cart = {},
  category = "burgers",
  query = "",
  toastTimer,
  closing = false;
try {
  const saved = JSON.parse(localStorage.getItem("chapa-cart") || "{}");
  for (const p of products)
    if (Number.isInteger(saved[p.id]) && saved[p.id] > 0 && saved[p.id] <= 99)
      cart[p.id] = saved[p.id];
} catch {}
const icons = {
  can: '<path d="M9 3h10l1 3v17H8V6Z"/><path d="M9 6h10M8 10h12M8 18h12M12 3h4"/>',
  bites:
    '<path d="M3 19h22l-3 5H6Z"/><rect x="6" y="5" width="5" height="14" rx="2" transform="rotate(-15 8 12)"/><rect x="14" y="4" width="5" height="15" rx="2" transform="rotate(15 16 12)"/>',
  shake:
    '<path d="m7 10 2 14h10l2-14ZM6 10h16M9 10C3 3 13 2 14 5c4-5 9 1 5 5M16 5l3-4"/>',
  bag: '<path d="M5 7h14l1 14H4L5 7Z" data-path="box"/><path d="M8 9V6a4 4 0 0 1 8 0v3" data-path="line-top"/><path d="m9 14 2 2 4-4" data-path="line-bottom"/>',
  fries:
    '<path d="m6 10 2 12h12l2-12Z"/><path d="M8 10V3h3v7m1 0V1h3v9m1 0V4h3v6"/>',
  onion:
    '<ellipse cx="14" cy="13" rx="10" ry="7"/><ellipse cx="14" cy="13" rx="6" ry="3"/><path d="M4 13v4c0 4 20 4 20 0v-4"/>',
  drink: '<path d="m7 7 2 16h10l2-16ZM6 7h16M14 7V2l6-1"/>',
  water:
    '<path d="M11 2h6v4l3 4v13H8V10l3-4Z"/><path d="M8 12h12M8 19h12M11 6h6"/>',
};
function saveIcon() {
  return `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons.bag}</svg>`;
}
function normalize(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
function filtered() {
  return products.filter(
    (p) =>
      (query ? true : p.category === category) &&
      normalize(p.name + " " + p.desc).includes(normalize(query)),
  );
}
// 3. RENDERIZAÇÃO DO CARDÁPIO E DA ABA DE PESQUISA
function productCard(p) {
  const art =
    p.category === "burgers"
      ? `<div class="food-photo photo-${products.indexOf(p)}" role="img" aria-label="${p.name}, imagem ilustrativa"></div>`
      : `<img class="catalog-photo ${p.category === "combo" ? "combo-photo" : ""}" src="${p.category === "combo" ? "assets/hero.png" : `assets/products/${p.id}.webp`}" alt="${p.name}, imagem ilustrativa" width="640" height="640" loading="lazy" decoding="async">`;
  return `<article class="product"><div class="product-art">${art}</div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p></div><div class="product-bottom"><strong>${money(p.price)}</strong><button class="action_has has_saved" data-add="${p.id}" aria-label="Adicionar ${p.name}" type="button">${saveIcon()}</button></div></article>`;
}
function renderMenu() {
  const list = filtered();
  $(query ? "#search-count" : "#result-count").textContent =
    list.length + " " + (list.length === 1 ? "opção" : "opções");
  $(query ? "#search-grid" : "#menu-grid").innerHTML =
    list.map(productCard).join("") ||
    '<p class="empty-results">Não encontramos esse item. Tente “bacon”, “batata” ou “cola”.</p>';
}
function setSearchView(active) {
  $("#search-results").hidden = !active;
  for (const selector of [".hero", "#cardapio", "#combos"])
    $(selector).hidden = active;
  $("#search").setAttribute(
    "aria-controls",
    active ? "search-results" : "cardapio",
  );
}
function clearSearch() {
  clearTimeout(searchTimer);
  finishMenuChange();
  query = "";
  $("#search").value = "";
  setSearchView(false);
  renderMenu();
}
// 4. SACOLA E PERSISTÊNCIA LOCAL
function renderCart() {
  const items = products.filter((p) => cart[p.id]),
    count = items.reduce((n, p) => n + cart[p.id], 0);
  $$(".count").forEach((el) => (el.textContent = count));
  $("#cart-items").innerHTML =
    items
      .map(
        (p) =>
          `<div class="cart-row"><div><h3>${p.name}</h3><p>${money(p.price)} cada</p></div><div class="quantity"><button data-change="${p.id}" data-delta="-1" aria-label="Remover uma unidade de ${p.name}">−</button><span>${cart[p.id]}</span><button data-change="${p.id}" data-delta="1" aria-label="Adicionar uma unidade de ${p.name}">+</button></div></div>`,
      )
      .join("") ||
    '<p class="empty">Sua sacola está vazia.<br>Escolha seu burger no cardápio.</p>';
  $("#total").textContent = money(
    items.reduce((n, p) => n + p.price * cart[p.id], 0),
  );
  $("#checkout").disabled = !count;
  $("#order-summary").hidden = true;
  try {
    localStorage.setItem("chapa-cart", JSON.stringify(cart));
  } catch {}
}
// 5. FEEDBACK VISUAL
function notify(text) {
  $(".toast").textContent = text;
  $(".toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $(".toast").classList.remove("show"), 2100);
}
function animateAdded(button) {
  button.classList.remove("added");
  void button.offsetWidth;
  button.classList.add("added");
  setTimeout(() => button.classList.remove("added"), 1000);
  $$(".count").forEach((el) =>
    el.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.35)" },
        { transform: "scale(1)" },
      ],
      { duration: 550 },
    ),
  );
}
// 6. TRANSIÇÃO ENTRE CATEGORIAS
let menuRun = 0,
  menuEffects = [],
  oldMenu = null;
function finishMenuChange() {
  menuRun++;
  for (const effect of menuEffects) effect.cancel();
  menuEffects = [];
  if (oldMenu) {
    oldMenu.remove();
    oldMenu = null;
  }
  $$(".menu-stage").forEach((stage) => {
    stage.classList.remove("is-changing");
    stage.style.height = "";
  });
}
function animateMenuChange(duration = 650) {
  const grid = $(query ? "#search-grid" : "#menu-grid"),
    stage = grid.parentElement;
  // Measure the visible wrapper before cancelling an interrupted transition.
  const fromHeight = stage.getBoundingClientRect().height;
  const fromOpacity = getComputedStyle(grid).opacity;
  const previous = grid.cloneNode(true);
  previous.removeAttribute("id");
  previous.setAttribute("aria-hidden", "true");
  previous.inert = true;
  previous.classList.add("outgoing");
  finishMenuChange();
  const run = menuRun;
  // Keep the wrapper in flow while replacing its content.
  stage.style.height = fromHeight + "px";
  stage.classList.add("is-changing");
  renderMenu();
  const toHeight = grid.getBoundingClientRect().height;
  oldMenu = previous;
  stage.append(previous);
  stage.classList.add("is-changing");
  stage.style.height = toHeight + "px";
  const options = {
    duration,
    easing: "cubic-bezier(.4,0,.2,1)",
    fill: "both",
  };
  const incoming = grid.animate(
    [
      { opacity: 0, transform: "translateY(24px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    options,
  );
  const outgoing = previous.animate(
    [
      { opacity: fromOpacity, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(-16px)" },
    ],
    options,
  );
  const resize = stage.animate(
    [{ height: fromHeight + "px" }, { height: toHeight + "px" }],
    options,
  );
  menuEffects = [incoming, outgoing, resize];
  // Ignore cancelled/obsolete completion callbacks after rapid category changes.
  Promise.all(menuEffects.map((effect) => effect.finished)).then(
    () => {
      if (run === menuRun) finishMenuChange();
    },
    () => {},
  );
}
let searchTimer;
function switchCategory(value) {
  clearTimeout(searchTimer);
  if (value === category && !query && !$("#search").value.trim()) return;
  const savedY = window.scrollY;
  category = value;
  query = "";
  $("#search").value = "";
  setSearchView(false);
  $(".tabs").dataset.category = value;
  $$(".tab[data-category]").forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === value),
    ),
  );
  animateMenuChange();
  window.scrollTo({ top: savedY, behavior: "instant" });
}
// 7. ABERTURA E FECHAMENTO DA SACOLA
const dialog = $("#cart");
let drawerEffect = null,
  drawerRun = 0;
function openCart() {
  const wasOpen = dialog.open;
  const from = wasOpen
    ? getComputedStyle(dialog).transform
    : "translateX(100%)";
  drawerRun++;
  if (drawerEffect) drawerEffect.cancel();
  closing = false;
  dialog.classList.remove("leaving");
  if (!wasOpen) dialog.showModal();
  document.body.classList.add("modal-open");
  drawerEffect = dialog.animate(
    [{ transform: from }, { transform: "translateX(0)" }],
    { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" },
  );
}
function closeCart() {
  if (!dialog.open || closing) return;
  closing = true;
  const run = ++drawerRun;
  const from = getComputedStyle(dialog).transform;
  if (drawerEffect) drawerEffect.cancel();
  drawerEffect = dialog.animate(
    [{ transform: from }, { transform: "translateX(100%)" }],
    { duration: 450, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" },
  );
  drawerEffect.finished.then(
    () => {
      if (run !== drawerRun) return;
      dialog.close();
      drawerEffect.cancel();
      drawerEffect = null;
      closing = false;
    },
    () => {},
  );
}
// 8. MENU MOBILE
let menuCloseTimer;
function closeMenu(immediate = false) {
  clearTimeout(menuCloseTimer);
  const menu = $("#site-menu");
  $("#menu-toggle").setAttribute("aria-expanded", "false");
  $("#menu-toggle").setAttribute("aria-label", "Abrir menu");
  if (menu.hidden) return;
  if (immediate) {
    menu.hidden = true;
    menu.classList.remove("menu-leaving");
    return;
  }
  menu.classList.add("menu-leaving");
  menuCloseTimer = setTimeout(() => {
    menu.hidden = true;
    menu.classList.remove("menu-leaving");
  }, 400);
}
// 9. EVENTOS DE CLIQUE
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    if (cart[id] >= 99) {
      notify("Limite de 99 unidades por item.");
      return;
    }
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
    animateAdded(add);
    notify(products.find((p) => p.id === id).name + " na sacola.");
  }
  const change = e.target.closest("[data-change]");
  if (change) {
    const id = change.dataset.change;
    cart[id] = Math.min(99, (cart[id] || 0) + Number(change.dataset.delta));
    if (cart[id] <= 0) delete cart[id];
    renderCart();
    const focus = dialog.querySelector(
      `[data-change="${id}"][data-delta="${change.dataset.delta}"]`,
    );
    (focus || dialog.querySelector(".close")).focus();
  }
  if (e.target.closest("[data-open-cart]")) {
    closeMenu();
    renderCart();
    openCart();
  }
  if (e.target.closest(".close")) closeCart();
  if (!e.target.closest("#menu-toggle") && !e.target.closest("#site-menu"))
    closeMenu();
  if (e.target.closest("#site-menu a")) closeMenu();
});
$$(".tab[data-category]").forEach((button) =>
  button.addEventListener("click", () =>
    switchCategory(button.dataset.category),
  ),
);
$("#search").addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  const nextQuery = e.target.value.trim();
  searchTimer = setTimeout(() => {
    if (nextQuery === query) return;
    finishMenuChange();
    query = nextQuery;
    setSearchView(Boolean(query));
    if (query) animateMenuChange(450);
    else renderMenu();
  }, 160);
});
$("#clear-search").addEventListener("click", () => {
  clearSearch();
  $("#search").focus({ preventScroll: true });
});
$("#search").addEventListener("keydown", (event) => {
  if (event.key === "Escape") clearSearch();
});
$$("[data-section], #site-menu a, .desktop-nav a, .bottom-brand-card").forEach(
  (link) =>
    link.addEventListener("click", () => {
      if (query) clearSearch();
    }),
);
$("#menu-toggle").addEventListener("click", () => {
  const open = $("#menu-toggle").getAttribute("aria-expanded") !== "true";
  if (!open) {
    closeMenu();
    return;
  }
  clearTimeout(menuCloseTimer);
  $("#site-menu").classList.remove("menu-leaving");
  $("#site-menu").hidden = false;
  $("#menu-toggle").setAttribute("aria-expanded", "true");
  $("#menu-toggle").setAttribute("aria-label", "Fechar menu");
});
// 10. TEMA CLARO E ESCURO
const theme = $("#theme");
theme.checked = document.documentElement.dataset.theme === "dark";
theme.addEventListener("change", () => {
  const value = theme.checked ? "dark" : "light";
  document.documentElement.dataset.theme = value;
  try {
    localStorage.setItem("chapa-theme", value);
  } catch {}
  document.querySelector('meta[name="theme-color"]').content = theme.checked
    ? "#191a1d"
    : "#f5f2ed";
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
  if (
    e.key === "/" &&
    !/INPUT|TEXTAREA/.test(document.activeElement.tagName) &&
    !dialog.open
  ) {
    e.preventDefault();
    $("#search").focus();
  }
});
dialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeCart();
});
dialog.addEventListener("close", () =>
  document.body.classList.remove("modal-open"),
);
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right) closeCart();
  }
});
$("#checkout").addEventListener("click", () => {
  const box = $("#order-summary");
  box.replaceChildren();
  const title = document.createElement("h3");
  title.textContent = "Confira seu pedido";
  box.append(title);
  for (const p of products.filter((p) => cart[p.id])) {
    const row = document.createElement("p");
    row.textContent = `${cart[p.id]}× ${p.name} — ${money(p.price * cart[p.id])}`;
    box.append(row);
  }
  if ($("#notes").value.trim()) {
    const note = document.createElement("p");
    note.textContent = "Observação: " + $("#notes").value.trim();
    box.append(note);
  }
  const info = document.createElement("p");
  info.textContent = "Demonstração concluída. Nenhum pedido foi enviado.";
  box.append(info);
  box.hidden = false;
  box.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
// 11. NAVEGAÇÃO DURANTE A ROLAGEM
let scheduled = false;
function updateNav() {
  scheduled = false;
  let active = "inicio";
  for (const id of ["cardapio", "combos"])
    if (!$("#" + id).hidden && $("#" + id).getBoundingClientRect().top < innerHeight * 0.4)
      active = id;
  $$("[data-section]").forEach((a) => {
    const on = a.dataset.section === active;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
}
addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNav);
    }
  },
  { passive: true },
);
$("#combo-grid").innerHTML = products
  .filter((p) => p.category === "combo" && p.id !== "combo")
  .map(productCard)
  .join("");
renderMenu();
renderCart();
updateNav();

// 12. RESPONSIVIDADE
const desktopQuery = matchMedia("(min-width: 768px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) {
    const focusInside =
      $("#site-menu").contains(document.activeElement) ||
      document.activeElement === $("#menu-toggle");
    closeMenu(true);
    if (focusInside) $(".desktop-nav a").focus();
  }
});

let resizeFrame;
addEventListener(
  "resize",
  () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (menuEffects.length) finishMenuChange();
    });
  },
  { passive: true },
);
