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
  radisson: { name: "Radisson RED", coords: [41.7073, 44.7995], category: "hotel", icon: "R", major: true },
  roomsTbilisi: { name: "Rooms Hotel Tbilisi", coords: [41.7064, 44.7894], category: "hotel", icon: "R", major: true },
  stamba: { name: "Stamba / Photography Museum", coords: [41.7067, 44.7890], category: "walk", icon: "▣", major: true },
  vera: { name: "Vera", coords: [41.7092, 44.7865], category: "walk", icon: "•" },
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
    routes: [{ mode: "travel", label: "Аэропорт → Kisi", points: ["airport", "kisi"] }],
    timeline: [["13:20", "Вылет из IST", "Turkish Airlines"], ["16:40", "Прилёт в TBS", "Граница, багаж и документы Рокки"], ["19:00", "Kisi и ужин", "Короткая прогулка по Абанотубани"]],
    tags: ["✈️ перелёт", "🐕 Рокки с нами", "🏨 Kisi"],
  },
  "2026-10-25": {
    dow: "воскресенье", date: "25", place: "Тбилиси", short: "Старый город", kind: "city",
    summary: "Главный прогулочный день: утром пробежка, затем Старый город вместе с Рокки; после обеда музеи и Сололаки.",
    routes: [{ mode: "walk", label: "Прогулка по Старому городу", points: ["kisi", "abanotubani", "waterfall", "meidan", "sioni", "peaceBridge", "rike", "narikala", "sololaki", "kisi"] }],
    timeline: [["08:00", "Пробежка и завтрак", "Абанотубани → Рике → набережная"], ["10:30", "Прогулка с Рокки", "Серные бани, водопад, Мейдан и Мост Мира"], ["14:00", "Хинкали и город", "Рокки отдыхает в отеле; музей или Сололаки"]],
    tags: ["🏃 пробежка", "🐕 прогулка", "🥟 хинкали"],
  },
  "2026-10-26": {
    dow: "понедельник", date: "26", place: "Дорога в Казбеги", short: "Ананури и Гудаури", kind: "road",
    summary: "Путешествие по Военно-Грузинской дороге — это уже полноценный день маршрута, а не просто трансфер.",
    routes: [{ mode: "travel", label: "Военно-Грузинская дорога", points: ["kisi", "zhinvali", "ananuri", "gudauri", "roomsKazbegi"] }],
    timeline: [["09:00", "Выезд из Тбилиси", "Частный водитель, Рокки и лёгкий багаж"], ["11:00", "Жинвали и Ананури", "Прогулка и фотографии"], ["13:30", "Гудаури", "Обед и Арка Дружбы"], ["16:30", "Rooms Kazbegi", "Заселение, бассейн и ужин"]],
    tags: ["🚗 5–7 часов", "🐕 Рокки с нами", "🏨 Rooms Kazbegi"],
  },
  "2026-10-27": {
    dow: "вторник", date: "27", place: "Казбеги", short: "Гергети", kind: "mountain",
    summary: "Лучшее погодное окно отдаём главному виду поездки — Гергети и Казбеку.",
    routes: [{ mode: "local", label: "Подъём к Гергети", points: ["roomsKazbegi", "stepantsminda", "gergeti"] }, { mode: "walk", label: "Пешая часть", points: ["stepantsminda", "gergeti"] }],
    timeline: [["09:30", "Подъём к Гергети", "Местный 4×4; при сухой погоде часть пути пешком"], ["13:00", "Обед в Степанцминде", "Спокойный темп и прогулка"], ["16:00", "Отель и бассейн", "Резерв на перемену погоды"]],
    tags: ["🏔 погода A", "🐕 уточнить 4×4", "🏊 бассейн"],
  },
  "2026-10-30": {
    dow: "пятница", date: "30", place: "Тбилиси", short: "NFA и Vera", kind: "city",
    summary: "Утром получаем ветеринарную справку, затем возвращаем Рокки в отель и идём в Stamba и по Vera.",
    routes: [{ mode: "travel", label: "Отель → NFA → отель", points: ["lastHotel", "nfa", "lastHotel"] }, { mode: "walk", label: "Vera и Stamba", points: ["lastHotel", "stamba", "vera", "lastHotel"] }],
    timeline: [["09:00", "NFA вместе с Рокки", "Marshal Gelovani Ave 36a; оставить свободным всё утро"], ["13:00", "Обед и отдых", "Вернуться в отель и оставить Рокки"], ["15:00", "Stamba и Vera", "Photography & Multimedia Museum, магазины и кофе"]],
    tags: ["📄 справка", "🐕 обязательно взять", "📷 музей"],
  },
  "2026-10-31": {
    dow: "суббота", date: "31", place: "Домой", short: "TBS → IST", kind: "flight",
    summary: "Неспешное утро, последний обед и ранний выезд в аэропорт с запасом на оформление PETC.",
    routes: [{ mode: "travel", label: "Отель → аэропорт TBS", points: ["lastHotel", "airport"] }],
    timeline: [["10:00", "Завтрак и прогулка", "Без музеев и жёсткого расписания"], ["14:00", "Выезд в аэропорт", "Быть на месте примерно за три часа"], ["18:00", "Вылет в Стамбул", "Прилёт в IST в 19:30"]],
    tags: ["✈️ перелёт", "🐕 PETC", "🏠 домой"],
  },
};

const scenarios = {
  full: {
    note: "Три ночи дают два шанса на хорошую погоду. Мцхета и Джвари удобно ложатся на обратную дорогу в четверг.",
    kazbegiDates: "26–29 октября", lastHotelDates: "29–31 октября",
    days: {
      "2026-10-28": { dow: "среда", date: "28", place: "Казбеги", short: "Погодный резерв", kind: "mountain", summary: "Второй горный день: Дарьяли и Гвелети при сухой тропе либо Сно и неспешный отдых.", routes: [{ mode: "local", label: "Дарьяли и Гвелети", points: ["roomsKazbegi", "gveleti", "dariali"] }, { mode: "walk", label: "Тропа к водопаду", points: ["gveleti", "dariali"] }, { mode: "local", label: "Альтернатива: Сно", points: ["roomsKazbegi", "sno"] }], timeline: [["10:00", "Выбираем по погоде", "Дарьяльское ущелье и Гвелети или Сно"], ["14:00", "Обед", "Кафе в Степанцминде"], ["16:00", "Свободное время", "Вид, бассейн и книги у камина"]], tags: ["🌦 погода B", "🐕 прогулка", "🔥 спокойный день"] },
      "2026-10-29": { dow: "четверг", date: "29", place: "В Тбилиси", short: "Мцхета и Джвари", kind: "road", summary: "Возвращаемся без спешки и превращаем дорогу в экскурсионный день.", routes: [{ mode: "travel", label: "Казбеги → Мцхета → Тбилиси", points: ["roomsKazbegi", "jvari", "mtskheta", "lastHotel"] }], timeline: [["09:30", "Выезд из Казбеги", "Частный водитель"], ["13:00", "Джвари и Мцхета", "Прогулка и обед"], ["17:00", "Тбилиси", "Заселение в выбранный отель"]], tags: ["🚗 переезд", "⛪ Мцхета", "🏨 отель выбираем"] },
    },
  },
  short: {
    note: "Две ночи — компактнее и дешевле, но на Гергети остаётся только одно полноценное погодное окно. В Тбилиси появляется дополнительный день.",
    kazbegiDates: "26–28 октября", lastHotelDates: "28–31 октября",
    days: {
      "2026-10-28": { dow: "среда", date: "28", place: "В Тбилиси", short: "Мцхета и Джвари", kind: "road", summary: "Утром используем последний погодный шанс, затем едем через Джвари и Мцхету в Тбилиси.", routes: [{ mode: "local", label: "Резерв: Гергети", points: ["roomsKazbegi", "gergeti"] }, { mode: "travel", label: "Казбеги → Тбилиси", points: ["roomsKazbegi", "jvari", "mtskheta", "lastHotel"] }], timeline: [["09:00", "Резерв на Гергети", "Только если вторник был облачным"], ["11:00", "Выезд из Казбеги", "Остановки по дороге"], ["15:00", "Джвари и Мцхета", "Короткая прогулка и поздний обед"], ["18:30", "Тбилиси", "Заселение и отдых"]], tags: ["🚗 переезд", "🌦 короткий резерв", "🏨 отель выбираем"] },
      "2026-10-29": { dow: "четверг", date: "29", place: "Тбилиси", short: "Город без спешки", kind: "city", summary: "Дополнительный день в городе: музей, рынок, Sololaki или короткая гастрономическая прогулка.", routes: [{ mode: "walk", label: "Vera и Stamba", points: ["lastHotel", "stamba", "vera", "lastHotel"] }, { mode: "local", label: "До Старого города", points: ["lastHotel", "sololaki", "meidan"] }], timeline: [["09:00", "Пробежка и завтрак", "Маршрут зависит от выбранного отеля"], ["11:30", "Музей или рынок", "Один большой пункт, без гонки"], ["15:00", "Sololaki и гастрономия", "Кофе, магазины и ранний ужин"]], tags: ["🏙 дополнительный город", "🐕 прогулка", "🍷 гастрономия"] },
    },
  },
};

let currentScenario = "full";
let selectedDate = "2026-10-24";
let selectedMapDay = null;
let activeMapFilter = "all";
let activeHotel = "red";
let map;
let layerGroup;

function allDays() { return { ...sharedDays, ...scenarios[currentScenario].days }; }

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

function resolveKey(key) {
  return key === "lastHotel" ? (activeHotel === "rooms" ? "roomsTbilisi" : "radisson") : key;
}

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

function setScenario(name) {
  currentScenario = name;
  document.querySelectorAll(".scenario-button").forEach((button) => button.classList.toggle("active", button.dataset.scenario === name));
  document.getElementById("scenarioNote").textContent = scenarios[name].note;
  document.getElementById("kazbegiHotelDates").textContent = scenarios[name].kazbegiDates;
  document.getElementById("lastHotelDates").textContent = scenarios[name].lastHotelDates;
  if (!allDays()[selectedDate]) selectedDate = "2026-10-28";
  renderCalendar();
  renderDayPanel();
  renderMap(selectedDate);
}

function syncMapFilters() {
  document.querySelectorAll(".map-filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === activeMapFilter));
}

function initHotelChoice() {
  const note = document.getElementById("hotelChoiceNote");
  const copy = {
    red: "Radisson RED: удобнее для пробежек и проще по семейной логистике.",
    rooms: "Rooms Tbilisi: атмосфернее, рядом Vera и Stamba, но нужен ответ по Рокки.",
  };
  document.querySelectorAll(".hotel-choice").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".hotel-choice").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeHotel = button.dataset.hotel;
      note.textContent = copy[button.dataset.hotel];
      renderMap();
    });
  });
  note.textContent = copy.red;
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
    packingItems = Array.isArray(saved) && saved.length ? saved : structuredClone(defaultPackingItems);
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

document.querySelectorAll(".scenario-button").forEach((button) => button.addEventListener("click", () => setScenario(button.dataset.scenario)));
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
setScenario("full");
initHotelChoice();
initCountdown();
initPacking();
initMap();
document.getElementById("routeHeading").textContent = "Вся поездка";
