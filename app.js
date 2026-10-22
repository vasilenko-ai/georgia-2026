const places = {
  airport: { name: "Аэропорт TBS", coords: [41.6692, 44.9547], category: "airport", icon: "✈" , major: true },
  kisi: { name: "Kisi Boutique Hotel", coords: [41.6867, 44.8093], category: "hotel", icon: "K", major: true },
  abanotubani: { name: "Абанотубани", coords: [41.6877, 44.8102], category: "walk", icon: "♨" },
  waterfall: { name: "Водопад Легвтахеви", coords: [41.6860, 44.8109], category: "walk", icon: "💧" },
  meidan: { name: "Мейдан", coords: [41.6892, 44.8082], category: "walk", icon: "•" },
  sioni: { name: "Сиони", coords: [41.6912, 44.8076], category: "walk", icon: "⛪" },
  peaceBridge: { name: "Мост Мира", coords: [41.6930, 44.8086], category: "walk", icon: "≋" },
  rike: { name: "Rike Park", coords: [41.6932, 44.8112], category: "walk", icon: "♧" },
  narikala: { name: "Нарикала", coords: [41.6879, 44.8083], category: "sight", icon: "♜", major: true },
  sololaki: { name: "Сололаки", coords: [41.6904, 44.8007], category: "walk", icon: "•" },
  gallery27: { name: "Gallery 27", coords: [41.6882, 44.8061], category: "sight", icon: "◇" },
  gudiashvili: { name: "Площадь Гудиашвили", coords: [41.6918, 44.8013], category: "walk", icon: "•" },
  nationalGallery: { name: "Национальная галерея", coords: [41.6998, 44.7984], category: "sight", icon: "▣", major: true },
  dryBridge: { name: "Сухой мост", coords: [41.7022, 44.8022], category: "walk", icon: "✦" },
  zhinvali: { name: "Жинвали", coords: [42.1455, 44.7714], category: "sight", icon: "◒" },
  ananuri: { name: "Ананури", coords: [42.1638, 44.7032], category: "sight", icon: "♜", major: true },
  gudauri: { name: "Арка Дружбы", coords: [42.4924, 44.4527], category: "sight", icon: "◎", major: true },
  roomsKazbegi: { name: "Rooms Kazbegi", coords: [42.6590, 44.6508], category: "hotel", icon: "R", major: true },
  stepantsminda: { name: "Степанцминда", coords: [42.6566, 44.6433], category: "walk", icon: "•" },
  gergeti: { name: "Церковь Гергети", coords: [42.6625, 44.6205], category: "sight", icon: "⛪", major: true },
  sno: { name: "Сно", coords: [42.6081, 44.6371], category: "sight", icon: "S" },
  dariali: { name: "Дарьяльское ущелье", coords: [42.7350, 44.6220], category: "sight", icon: "△", major: true },
  gveleti: { name: "Гвелетский водопад", coords: [42.7047, 44.6152], category: "walk", icon: "💧" },
  jvari: { name: "Монастырь Джвари", coords: [41.8385, 44.7331], category: "sight", icon: "⛪", major: true },
  mtskheta: { name: "Мцхета", coords: [41.8427, 44.7206], category: "sight", icon: "M", major: true },
  samtavro: { name: "Монастырь Самтавро", coords: [41.8471, 44.7208], category: "sight", icon: "⛪" },
  uplistsikhe: { name: "Уплисцихе", coords: [41.9668, 44.2071], category: "sight", icon: "U", major: true },
  chapidon: { name: "Chapidon Winery", coords: [41.8799, 44.3386], category: "sight", icon: "🍷", major: true },
  roomsTbilisi: { name: "Rooms Hotel Tbilisi", coords: [41.7064, 44.7894], category: "hotel", icon: "R", major: true },
  stamba: { name: "Stamba / Photography Museum", coords: [41.7067, 44.7890], category: "walk", icon: "▣", major: true },
  vera: { name: "Vera", coords: [41.7092, 44.7865], category: "walk", icon: "•" },
  moreIsLove: { name: "MORE is LOVE", coords: [41.7072, 44.7926], category: "sight", icon: "M" },
  wineFactory: { name: "Wine Factory N1", coords: [41.7087, 44.7817], category: "sight", icon: "W", major: true },
  ieri: { name: "IERI Store", coords: [41.7085, 44.7815], category: "sight", icon: "I" },
  whiteStudio: { name: "White Studio", coords: [41.7092, 44.7808], category: "sight", icon: "◇" },
  vintages: { name: "8000 Vintages", coords: [41.7023, 44.7963], category: "sight", icon: "8" },
  veraPark: { name: "Парк Вера", coords: [41.7082, 44.7847], category: "walk", icon: "♧" },
  nfa: { name: "NFA", coords: [41.7584, 44.7738], category: "document", icon: "✓", major: true },
};

const routeStyles = {
  travel: { color: "#7b2536", weight: 4, opacity: .82 },
  walk: { color: "#214b3d", weight: 4, opacity: .9, dashArray: "2 9" },
  local: { color: "#c89c52", weight: 4, opacity: .9, dashArray: "8 8" },
};

const sharedDays = {
  "2026-10-24": {
    dow: "суббота", date: "24", place: "Тбилиси", short: "Прилёт и тихий вечер", kind: "city",
    summary: "Первый вечер без спешки: получить багаж, пройти контроль с Рокки и спокойно заселиться в Kisi.",
    routes: [{ mode: "travel", label: "Аэропорт → Kisi", points: ["airport", "kisi"] }, { mode: "walk", label: "Вечерняя петля · 1,8 км", points: ["kisi", "abanotubani", "waterfall", "meidan", "kisi"] }],
    timeline: [["13:20", "Вылет из IST", "Turkish Airlines"], ["16:40", "Прилёт в TBS", "Граница, багаж и документы Рокки"], ["после прилёта", "Трансфер агентства", "Водитель встречает в аэропорту и отвозит в Kisi"], ["20:00", "Первый круг по Старому городу", "1,8 км · 35 минут чистой ходьбы · бесплатно"]],
    tags: ["✈️ перелёт", "🚐 трансфер агентства", "🐕 Рокки с нами", "🏨 Kisi"],
  },
  "2026-10-25": {
    dow: "воскресенье", date: "25", place: "Тбилиси", short: "Старый город", kind: "city",
    summary: "Главный прогулочный день: утром пробежка, затем Старый город вместе с Рокки; после обеда музеи и Сололаки.",
    routes: [{ mode: "walk", label: "С Рокки · 2,5 км", points: ["kisi", "abanotubani", "waterfall", "meidan", "sioni", "peaceBridge", "rike", "kisi"] }, { mode: "local", label: "После обеда · галерея и Сололаки", points: ["kisi", "gallery27", "gudiashvili", "nationalGallery", "sololaki", "kisi"] }, { mode: "local", label: "Опция: канатная дорога", points: ["rike", "narikala"] }],
    timeline: [["08:00", "Пробежка и завтрак", "Абанотубани → Рике → набережная · 5–6 км"], ["10:30", "Прогулка с Рокки", "2,5 км · 40 минут чистой ходьбы · 2 часа с остановками"], ["13:00", "Рокки отдыхает в Kisi", "Хинкали, затем город без собаки"], ["15:30", "Национальная галерея", "1–1,5 часа · семья ≈ 11 GEL · вход до 17:30"], ["17:15", "Сололаки и Gallery 27", "Парадные, площадь Гудиашвили и локальный дизайн"]],
    tags: ["🏃 пробежка", "🐕 прогулка", "🥟 хинкали"],
  },
  "2026-10-26": {
    dow: "понедельник", date: "26", place: "Дорога в Казбеги", short: "Ананури и Гудаури", kind: "road",
    summary: "Путешествие по Военно-Грузинской дороге — это уже полноценный день маршрута, а не просто трансфер.",
    routes: [{ mode: "travel", label: "Военно-Грузинская дорога", points: ["kisi", "zhinvali", "ananuri", "gudauri", "roomsKazbegi"] }],
    timeline: [["утро", "Выезд из Тбилиси с гидом", "Начало поездки по Военно-Грузинской дороге"], ["по пути", "Жинвали и Ананури", "Водохранилище, крепость, прогулка и фотографии"], ["после обеда", "Гудаури", "Арка Дружбы и горные виды"], ["вечер", "Rooms Kazbegi", "Заселение, бассейн и ужин"]],
    tags: ["👤 гид", "🚗 Военно-Грузинская дорога", "🐕 Рокки с нами", "🏨 Rooms Kazbegi"],
  },
  "2026-10-27": {
    dow: "вторник", date: "27", place: "Казбеги", short: "День отдыха", kind: "mountain",
    summary: "Свободный день в Rooms Kazbegi: отдыхаем и решаем по погоде, нужен ли самостоятельный выезд к Гергети.",
    routes: [{ mode: "local", label: "Подъём к Гергети", points: ["roomsKazbegi", "stepantsminda", "gergeti"] }, { mode: "walk", label: "Пешая часть", points: ["stepantsminda", "gergeti"] }],
    timeline: [["утро", "Поздний завтрак и отдых", "Терраса, виды и спокойный темп"], ["по погоде", "Опция: церковь Гергети", "Не входит в программу агентства; организовать на месте"], ["день", "Степанцминда или бассейн", "Без обязательной программы и раннего подъёма"]],
    tags: ["🛋 свободный день", "🏔 Гергети опционально", "🏊 бассейн"],
  },
  "2026-10-28": {
    dow: "среда", date: "28", place: "В Тбилиси", short: "Возвращение через Сно", kind: "road",
    summary: "Трансфер агентства из Казбеги в Тбилиси; по желанию делаем короткий заезд к каменным головам в Сно.",
    routes: [{ mode: "travel", label: "Казбеги → Сно → Rooms Tbilisi", points: ["roomsKazbegi", "sno", "roomsTbilisi"] }],
    timeline: [["до 12:00", "Check-out из Rooms Kazbegi", "Завтрак и спокойные сборы"], ["по желанию", "Сно и каменные головы", "Короткая остановка по пути"], ["после 14:00", "Rooms Hotel Tbilisi", "Заселение · Garden View King + Twin"], ["вечер", "Свободная Vera", "Ужин рядом с отелем и отдых"]],
    tags: ["🚐 трансфер агентства", "🗿 Сно опционально", "🏨 Rooms Tbilisi"],
  },
  "2026-10-29": {
    dow: "четверг", date: "29", place: "Мцхета и Уплисцихе", short: "Храмы, пещеры и вино", kind: "road",
    summary: "Подтверждённый экскурсионный день с гидом: Мцхета, Уплисцихе, обед и дегустация в Chapidon Winery, затем Джвари на закате.",
    routes: [{ mode: "travel", label: "Полный маршрут дня", points: ["roomsTbilisi", "mtskheta", "samtavro", "uplistsikhe", "chapidon", "jvari", "roomsTbilisi"] }],
    timeline: [["10:00", "Выезд из Rooms", "Частная машина и гид на весь день"], ["11:00", "Мцхета", "Светицховели и Самтавро · до 12:00"], ["13:00", "Уплисцихе", "Пещерный город · до 14:00"], ["15:00", "Chapidon Winery", "Обед, экскурсия и дегустация · до 16:30"], ["17:30", "Монастырь Джвари", "Золотой час и вид на Мцхету · выезд в 18:00"], ["19:00", "Возвращение в Тбилиси", "Время ориентировочное, зависит от трафика"]],
    tags: ["👤 гид", "⛪ Мцхета", "🏛 Уплисцихе", "🍷 Chapidon", "🌇 Джвари на закате"],
  },
  "2026-10-30": {
    dow: "пятница", date: "30", place: "Тбилиси", short: "NFA и Vera", kind: "city",
    summary: "Утром получаем ветеринарную справку, затем возвращаем Рокки в отель и идём в Stamba и по Vera.",
    routes: [{ mode: "travel", label: "Rooms → NFA → Rooms", points: ["roomsTbilisi", "nfa", "roomsTbilisi"] }, { mode: "walk", label: "Vera, музей и магазины · 3,5–4 км", points: ["roomsTbilisi", "stamba", "moreIsLove", "nationalGallery", "vintages", "roomsTbilisi"] }],
    timeline: [["09:00", "NFA вместе с Рокки", "Marshal Gelovani Ave 36a · 20–30 минут на такси в одну сторону"], ["13:00", "Обед и отдых", "Вернуться в Rooms и оставить Рокки"], ["14:30", "TPMM в соседнем Stamba", "45–60 минут · вход бесплатный · работает до 19:00"], ["15:45", "Vera и локальные магазины", "MORE is LOVE → Rustaveli → 8000 Vintages · 3,5–4 км"]],
    tags: ["📄 справка", "🐕 обязательно взять", "📷 TPMM бесплатно", "🛍 локальные бренды"],
  },
  "2026-10-31": {
    dow: "суббота", date: "31", place: "Домой", short: "TBS → IST", kind: "flight",
    summary: "Неспешное утро, последний обед и ранний выезд в аэропорт с запасом на оформление PETC.",
    routes: [{ mode: "walk", label: "Утренняя петля · 3 км", points: ["roomsTbilisi", "veraPark", "vera", "roomsTbilisi"] }, { mode: "travel", label: "Rooms → аэропорт TBS", points: ["roomsTbilisi", "airport"] }],
    timeline: [["08:00", "Пробежка или прогулка", "Парк Вера · около 3 км · Рокки с нами"], ["10:00", "Завтрак и последний кофе", "Check-out до 12:00; багаж оставить в отеле"], ["14:15", "Трансфер агентства в аэропорт", "Дорога 30–45 минут; запас на PETC около трёх часов"], ["18:00", "Вылет в Стамбул", "Прилёт в IST в 19:30"]],
    tags: ["🚐 трансфер агентства", "✈️ перелёт", "🐕 PETC", "🏠 домой"],
  },
};
let selectedDate = "2026-10-24";
let selectedMapDay = null;
let activeMapFilter = "all";
let map;
let layerGroup;

function allDays() { return sharedDays; }

function initMap() {
  if (!window.L) {
    document.querySelector(".map-card").innerHTML = '<div class="map-fallback">Карта загрузится при подключении к интернету.</div>';
    return;
  }
  map = L.map("map", { zoomControl: false, scrollWheelZoom: false }).setView([42.16, 44.73], 8);
  L.control.zoom({ position: "topright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  layerGroup = L.layerGroup().addTo(map);
  renderMap();
}

function resolveKey(key) { return key === "lastHotel" ? "roomsTbilisi" : key; }

function markerIcon(place) {
  return L.divIcon({ className: "route-marker-wrap", html: `<span class="route-marker ${place.category}">${place.icon}</span>`, iconSize: [32, 28], iconAnchor: [16, 14] });
}

function visibleRoutes(dayKey = null) {
  const daySet = allDays();
  const routes = dayKey ? daySet[dayKey].routes : Object.values(daySet).flatMap((day) => day.routes || []);
  if (activeMapFilter === "travel") return routes.filter((route) => route.mode === "travel" || route.mode === "local");
  if (activeMapFilter === "walk") return routes.filter((route) => route.mode === "walk");
  if (activeMapFilter === "stays") return [];
  return routes;
}

function renderMap(dayKey = selectedMapDay) {
  if (!map || !layerGroup) return;
  map.invalidateSize();
  layerGroup.clearLayers();
  const routes = visibleRoutes(dayKey);
  let pointKeys = [...new Set(routes.flatMap((route) => route.points.map(resolveKey)))];
  if (activeMapFilter === "stays") pointKeys = ["airport", "kisi", "roomsKazbegi", resolveKey("lastHotel"), "nfa"];
  const coords = pointKeys.map((key) => places[key].coords);
  routes.forEach((route) => {
    const routeCoords = route.points.map(resolveKey).map((key) => places[key].coords);
    L.polyline(routeCoords, routeStyles[route.mode]).bindTooltip(route.label, { sticky: true }).addTo(layerGroup);
  });
  pointKeys.forEach((key) => {
    const place = places[key];
    const marker = L.marker(place.coords, { icon: markerIcon(place) }).bindPopup(`<strong>${place.name}</strong>`).addTo(layerGroup);
    if (dayKey || place.major || activeMapFilter === "stays") marker.bindTooltip(place.name, { permanent: true, direction: "top", offset: [0, -12], className: "map-place-label" });
  });
  if (coords.length) {
    const bounds = L.latLngBounds(coords).pad(dayKey ? .25 : .12);
    map.fitBounds(bounds, { maxZoom: dayKey ? 14 : 8 });
    window.setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(bounds, { maxZoom: dayKey ? 14 : 8, animate: false });
    }, 120);
  }
}

function renderCalendar() {
  const container = document.getElementById("calendarStrip");
  container.innerHTML = "";
  Object.entries(allDays()).sort(([a], [b]) => a.localeCompare(b)).forEach(([key, day]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calendar-day ${key === selectedDate ? "active" : ""}`;
    button.dataset.date = key;
    button.innerHTML = `<span class="dow">${day.dow}</span><span class="date">${day.date}</span><span class="place">${day.place}</span><span class="short-plan">${day.short}</span>`;
    button.addEventListener("click", () => selectDay(key, true));
    container.appendChild(button);
  });
}

function renderDayPanel() {
  const day = allDays()[selectedDate];
  const panel = document.getElementById("dayPanel");
  document.getElementById("routeHeading").textContent = `${day.date} октября · ${day.place}`;
  panel.innerHTML = `
    <span class="day-kicker">${day.dow} · ${day.short}</span>
    <h3>${day.place}</h3>
    <p class="day-summary">${day.summary}</p>
    <div class="timeline">${day.timeline.map(([time, title, note]) => `<div class="timeline-item"><time>${time}</time><div><strong>${title}</strong><span>${note}</span></div></div>`).join("")}</div>
    <div class="day-tags">${day.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function selectDay(key, scroll = false) {
  selectedDate = key;
  selectedMapDay = key;
  activeMapFilter = "all";
  syncMapFilters();
  renderCalendar();
  renderDayPanel();
  renderMap(key);
  if (scroll) document.getElementById("route").scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncMapFilters() {
  document.querySelectorAll(".map-filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === activeMapFilter));
}

function initCountdown() {
  const start = new Date("2026-10-24T13:20:00+03:00");
  const days = Math.max(0, Math.ceil((start - new Date()) / 86400000));
  document.getElementById("countdown").textContent = days ? `До поездки ${days} дней` : "Путешествие начинается!";
}

const packingStorageKey = "georgia-trip-packing-v1";
const defaultPackingItems = [
  ["passports", "🛂", "Паспорта всей семьи"],
  ["tickets", "✈️", "Билеты и посадочные"],
  ["bookings", "🏨", "Подтверждения отелей"],
  ["insurance", "🛡️", "Страховки GPI на всех четверых"],
  ["rocky-docs", "🐕", "Документы Рокки"],
  ["cards", "💳", "Карты и немного наличных"],
  ["medicine", "🩹", "Семейная аптечка"],
  ["toiletries", "🪥", "Косметички"],
  ["rain", "🌧️", "Непромокаемые куртки"],
  ["fleece", "🧥", "Флиски и тёплые слои"],
  ["thermal", "♨️", "Термобельё для гор"],
  ["shirts", "👕", "Футболки и лонгсливы"],
  ["trousers", "👖", "Брюки и джинсы"],
  ["underwear", "🧺", "Бельё на 8 дней"],
  ["socks", "🧦", "Носки и тёплые носки"],
  ["sleepwear", "🌙", "Пижамы"],
  ["mountain-shoes", "🥾", "Обувь для гор"],
  ["city-shoes", "👟", "Обувь для города"],
  ["hats", "🧤", "Шапки, перчатки, баффы"],
  ["swimwear", "🏊", "Купальники для бассейна"],
  ["chargers", "🔌", "Зарядки и кабели"],
  ["powerbanks", "🔋", "Пауэрбанки"],
  ["headphones", "🎧", "Наушники"],
  ["camera", "📷", "Камера и карты памяти"],
  ["bottles", "💧", "Бутылки для воды"],
  ["snacks", "🍎", "Перекус в дорогу"],
  ["umbrellas", "☂️", "Компактные зонты"],
  ["sunglasses", "🕶️", "Солнцезащитные очки"],
  ["rocky-food", "🦴", "Корм Рокки"],
  ["rocky-bowls", "🥣", "Миски Рокки"],
  ["rocky-leash", "🦮", "Шлейка, поводок и адресник"],
  ["rocky-carrier", "👜", "Переноска для самолёта"],
  ["rocky-bed", "🛏️", "Лежанка или плед Рокки"],
  ["rocky-bags", "🧻", "Пакеты и салфетки"],
  ["rocky-treats", "🎾", "Лакомства и игрушка"],
].map(([id, emoji, label]) => ({ id, emoji, label, location: "pool", packed: false }));

let packingItems = [];
let selectedPackingItem = null;

function loadPackingItems() {
  try {
    const saved = JSON.parse(localStorage.getItem(packingStorageKey));
    if (Array.isArray(saved) && saved.length) {
      const savedIds = new Set(saved.map((item) => item.id));
      packingItems = [...saved, ...defaultPackingItems.filter((item) => !savedIds.has(item.id))];
    } else {
      packingItems = structuredClone(defaultPackingItems);
    }
  } catch {
    packingItems = structuredClone(defaultPackingItems);
  }
}

function savePackingItems() {
  localStorage.setItem(packingStorageKey, JSON.stringify(packingItems));
}

function movePackingItem(id, location) {
  const item = packingItems.find((entry) => entry.id === id);
  if (!item) return;
  item.location = location;
  selectedPackingItem = null;
  savePackingItems();
  renderPacking();
}

function togglePackingItem(id) {
  const item = packingItems.find((entry) => entry.id === id);
  if (!item) return;
  item.packed = !item.packed;
  savePackingItems();
  renderPacking();
}

function renderPacking() {
  document.querySelectorAll("[data-items]").forEach((container) => { container.innerHTML = ""; });
  packingItems.forEach((item) => {
    const container = document.querySelector(`[data-items="${item.location}"]`) || document.querySelector('[data-items="pool"]');
    const card = document.createElement("div");
    card.className = `packing-item${item.packed ? " packed" : ""}${selectedPackingItem === item.id ? " selected" : ""}`;
    card.draggable = true;
    card.tabIndex = 0;
    card.dataset.itemId = item.id;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.label}. ${item.packed ? "Упаковано" : "Не упаковано"}`);

    const check = document.createElement("button");
    check.className = "packing-check";
    check.type = "button";
    check.textContent = item.packed ? "✓" : "";
    check.setAttribute("aria-label", item.packed ? `Отметить ${item.label} как неупакованное` : `Отметить ${item.label} как упакованное`);
    check.addEventListener("click", (event) => { event.stopPropagation(); togglePackingItem(item.id); });

    const emoji = document.createElement("span");
    emoji.textContent = item.emoji;
    const label = document.createElement("span");
    label.className = "packing-label";
    label.textContent = item.label;
    card.append(check, emoji, label);

    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id);
      event.dataTransfer.effectAllowed = "move";
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
    const selectCard = (event) => {
      event.stopPropagation();
      selectedPackingItem = selectedPackingItem === item.id ? null : item.id;
      renderPacking();
    };
    card.addEventListener("click", selectCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectCard(event); }
    });
    container.appendChild(card);
  });

  document.querySelectorAll(".packing-zone").forEach((zone) => {
    const location = zone.dataset.location;
    const count = packingItems.filter((item) => item.location === location).length;
    zone.classList.toggle("is-empty", count === 0);
    zone.classList.toggle("tap-target", Boolean(selectedPackingItem));
    const countNode = zone.querySelector(`[data-count="${location}"]`);
    if (countNode) countNode.textContent = count;
  });
  const packed = packingItems.filter((item) => item.packed).length;
  document.getElementById("packingProgress").textContent = `${packed} из ${packingItems.length}`;
}

function initPacking() {
  loadPackingItems();
  document.querySelectorAll(".packing-zone").forEach((zone) => {
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      movePackingItem(event.dataTransfer.getData("text/plain"), zone.dataset.location);
    });
    zone.addEventListener("click", () => {
      if (selectedPackingItem) movePackingItem(selectedPackingItem, zone.dataset.location);
    });
  });

  document.getElementById("packingAddForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("packingNewItem");
    const label = input.value.trim();
    if (!label) return;
    packingItems.push({ id: `custom-${Date.now()}`, emoji: "＋", label, location: "pool", packed: false });
    input.value = "";
    savePackingItems();
    renderPacking();
  });
  document.getElementById("packingReset").addEventListener("click", () => {
    if (!window.confirm("Вернуть исходный список и убрать распределение по сумкам?")) return;
    packingItems = structuredClone(defaultPackingItems);
    selectedPackingItem = null;
    savePackingItems();
    renderPacking();
  });
  renderPacking();
}

document.getElementById("showAllButton").addEventListener("click", () => {
  document.getElementById("routeHeading").textContent = "Вся поездка";
  selectedMapDay = null;
  activeMapFilter = "all";
  syncMapFilters();
  renderMap();
});
document.querySelectorAll(".map-filter").forEach((button) => button.addEventListener("click", () => {
  activeMapFilter = button.dataset.filter;
  selectedMapDay = null;
  document.getElementById("routeHeading").textContent = button.dataset.filter === "walk" ? "Все прогулки" : button.dataset.filter === "travel" ? "Все переезды" : button.dataset.filter === "stays" ? "Отели и важные точки" : "Вся поездка";
  syncMapFilters();
  renderMap();
}));
document.getElementById("printButton").addEventListener("click", () => window.print());

renderCalendar();
renderDayPanel();
initCountdown();
initPacking();
initMap();
document.getElementById("routeHeading").textContent = "Вся поездка";
